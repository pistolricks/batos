import { createSignal, onMount, onCleanup, Show, JSX } from 'solid-js'
import { cn } from '~/lib/utils'
import { UiWindow as WindowType } from '~/types/desktop'
import { Button } from '~/components/ui/button'
import { useTheme } from '~/contexts/theme-context'
import { 
  X, 
  Minus, 
  Square, 
  Maximize2,
  GripVertical
} from 'lucide-solid'

interface WindowComponentProps {
  window: WindowType
  onClose: () => void
  onFocus: () => void
  onMinimize: () => void
  onMaximize: () => void
  onMove: (position: { x: number; y: number }) => void
  onResize: (size: { width: number; height: number }) => void
  onClick?: () => void
}

export function WindowComponent(props: WindowComponentProps) {
  const { getThemeClass } = useTheme()
  const [isDragging, setIsDragging] = createSignal(false)
  const [isResizing, setIsResizing] = createSignal(false)
  const [dragStart, setDragStart] = createSignal({ x: 0, y: 0 })
  const [resizeStart, setResizeStart] = createSignal({ 
    x: 0, 
    y: 0, 
    width: 0, 
    height: 0, 
    startX: 0, 
    startY: 0
  })
  const [resizeCorner, setResizeCorner] = createSignal<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top' | 'bottom' | 'left' | 'right'>('bottom-right')
  let windowRef: HTMLDivElement | undefined

  const handleMouseDown = (e: MouseEvent) => {
    props.onFocus()
    props.onClick?.()
  }

  const handleTitleBarMouseDown = (e: MouseEvent) => {
    if (!props.window.draggable) return
    
    setIsDragging(true)
    setDragStart({
      x: e.clientX - props.window.position.x,
      y: e.clientY - props.window.position.y
    })
    props.onFocus()
    e.preventDefault()
    e.stopPropagation()
  }

  const handleResizeMouseDown = (e: MouseEvent, corner: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top' | 'bottom' | 'left' | 'right') => {
    if (!props.window.resizable) return
    
    setIsResizing(true)
    setResizeCorner(corner)
    const rect = windowRef?.getBoundingClientRect()
    if (rect) {
      setResizeStart({
        x: e.clientX,
        y: e.clientY,
        width: props.window.size.width,
        height: props.window.size.height,
        startX: props.window.position.x,
        startY: props.window.position.y
      })
    }
    props.onFocus()
    e.preventDefault()
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging()) {
      const newX = e.clientX - dragStart().x
      const newY = e.clientY - dragStart().y
      const boundedX = Math.max(0, Math.min(newX, globalThis.innerWidth - props.window.size.width))
      const boundedY = Math.max(0, Math.min(newY, globalThis.innerHeight - props.window.size.height))
      props.onMove({ x: boundedX, y: boundedY })
    }
    
    if (isResizing()) {
      const deltaX = e.clientX - resizeStart().x
      const deltaY = e.clientY - resizeStart().y
      let newWidth = resizeStart().width
      let newHeight = resizeStart().height
      let newX = resizeStart().startX
      let newY = resizeStart().startY
      
      const corner = resizeCorner()
      if (corner === 'bottom-right') {
        newWidth = Math.max(300, resizeStart().width + deltaX)
        newHeight = Math.max(200, resizeStart().height + deltaY)
      } else if (corner === 'bottom-left') {
        newWidth = Math.max(300, resizeStart().width - deltaX)
        newHeight = Math.max(200, resizeStart().height + deltaY)
        newX = resizeStart().startX + (resizeStart().width - newWidth)
      } else if (corner === 'top-right') {
        newWidth = Math.max(300, resizeStart().width + deltaX)
        newHeight = Math.max(200, resizeStart().height - deltaY)
        newY = resizeStart().startY + (resizeStart().height - newHeight)
      } else if (corner === 'top-left') {
        newWidth = Math.max(300, resizeStart().width - deltaX)
        newHeight = Math.max(200, resizeStart().height - deltaY)
        newX = resizeStart().startX + (resizeStart().width - newWidth)
        newY = resizeStart().startY + (resizeStart().height - newHeight)
      } else if (corner === 'right') {
        newWidth = Math.max(300, resizeStart().width + deltaX)
      } else if (corner === 'left') {
        newWidth = Math.max(300, resizeStart().width - deltaX)
        newX = resizeStart().startX + (resizeStart().width - newWidth)
      } else if (corner === 'bottom') {
        newHeight = Math.max(200, resizeStart().height + deltaY)
      } else if (corner === 'top') {
        newHeight = Math.max(200, resizeStart().height - deltaY)
        newY = resizeStart().startY + (resizeStart().height - newHeight)
      }
      
      props.onResize({ width: newWidth, height: newHeight })
      props.onMove({ x: newX, y: newY })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsResizing(false)
  }

  onMount(() => {
    globalThis.addEventListener('mousemove', handleMouseMove)
    globalThis.addEventListener('mouseup', handleMouseUp)
  })

  onCleanup(() => {
    globalThis.removeEventListener('mousemove', handleMouseMove)
    globalThis.removeEventListener('mouseup', handleMouseUp)
  })

  return (
    <div
      ref={windowRef}
      class={cn(
        "absolute flex flex-col rounded-lg shadow-2xl transition-all duration-300 pointer-events-auto overflow-hidden",
        props.window.isFocused ? "z-[40] scale-x-[1.00005] scale-y-[0.91]" : "z-[30] opacity-80 blur-[0.5px]",
        props.window.isMaximized ? "inset-0 !w-full !h-full !rounded-none" : "",
        getThemeClass(),
        "border border-blue-400/50 shadow-blue-400/20"
      )}
      style={{
        left: props.window.isMaximized ? '0' : `${props.window.position.x}px`,
        top: props.window.isMaximized ? '0' : `${props.window.position.y}px`,
        width: props.window.isMaximized ? '100%' : `${props.window.size.width}px`,
        height: props.window.isMaximized ? '100%' : `${props.window.size.height}px`,
        "z-index": props.window.zIndex
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Title Bar */}
      <div
        class={cn(
          "h-10 flex items-center justify-between px-3 cursor-default select-none transition-colors",
          props.window.isFocused ? "bg-blue-400/20" : "bg-blue-400/5"
        )}
        onMouseDown={handleTitleBarMouseDown}
      >
        <div class="flex items-center space-x-2">
          <Show when={props.window.icon}>
            <span class="text-sm">{props.window.icon}</span>
          </Show>
          <span class={cn(
            "text-xs font-bold uppercase tracking-wider",
            props.window.isFocused ? "text-blue-400" : "text-blue-400/50"
          )}>
            {props.window.title}
          </span>
        </div>
        
        <div class="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="icon"
            class="h-6 w-6 text-blue-400/60 hover:text-blue-400 hover:bg-blue-400/20 rounded-sm transition-colors"
            onClick={(e) => { e.stopPropagation(); props.onMinimize(); }}
          >
            <Minus size={14} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            class="h-6 w-6 text-blue-400/60 hover:text-blue-400 hover:bg-blue-400/20 rounded-sm transition-colors"
            onClick={(e) => { e.stopPropagation(); props.onMaximize(); }}
          >
            <Square size={12} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            class="h-6 w-6 text-red-400/60 hover:text-red-400 hover:bg-red-400/20 rounded-sm transition-colors"
            onClick={(e) => { e.stopPropagation(); props.onClose(); }}
          >
            <X size={14} />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div class="flex-1 overflow-hidden relative">
        <Show when={props.window.content} fallback={<div class="w-full h-full bg-black/40 flex items-center justify-center text-blue-400/30 text-xs italic uppercase tracking-widest">Initialization Sequence...</div>}>
          {props.window.content}
        </Show>
      </div>

      {/* Resize Handles */}
      <Show when={props.window.resizable && !props.window.isMaximized}>
        <div
          class="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize z-50 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity"
          onMouseDown={(e) => handleResizeMouseDown(e, 'bottom-right')}
        >
          <div class="w-2 h-2 border-r-2 border-b-2 border-blue-400"></div>
        </div>
        <div class="absolute top-0 left-0 w-1.5 h-full cursor-ew-resize z-50" onMouseDown={(e) => handleResizeMouseDown(e, 'left')}></div>
        <div class="absolute top-0 right-0 w-1.5 h-full cursor-ew-resize z-50" onMouseDown={(e) => handleResizeMouseDown(e, 'right')}></div>
        <div class="absolute top-0 left-0 w-full h-1.5 cursor-ns-resize z-50" onMouseDown={(e) => handleResizeMouseDown(e, 'top')}></div>
        <div class="absolute bottom-0 left-0 w-full h-1.5 cursor-ns-resize z-50" onMouseDown={(e) => handleResizeMouseDown(e, 'bottom')}></div>
      </Show>
    </div>
  )
}
