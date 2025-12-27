import { For } from 'solid-js'
import { Window } from '~/types/desktop'
import { WindowComponent } from './window'

interface WindowManagerProps {
  windows: Window[]
  onWindowClose: (windowId: string) => void
  onWindowFocus: (windowId: string) => void
  onWindowMinimize: (windowId: string) => void
  onWindowMaximize: (windowId: string) => void
  onWindowMove: (windowId: string, position: { x: number; y: number }) => void
  onWindowResize: (windowId: string, size: { width: number; height: number }) => void
  onWindowClick?: (windowId: string) => void
}

export function WindowManager(props: WindowManagerProps) {
  const visibleWindows = () => props.windows
    .filter(window => !window.isMinimized)
    .sort((a, b) => a.zIndex - b.zIndex)

  return (
    <div class="absolute inset-0 pointer-events-none">
      <For each={visibleWindows()}>
        {(window) => (
          <WindowComponent
            window={window}
            onClose={() => props.onWindowClose(window.id)}
            onFocus={() => props.onWindowFocus(window.id)}
            onMinimize={() => props.onWindowMinimize(window.id)}
            onMaximize={() => props.onWindowMaximize(window.id)}
            onMove={(position) => props.onWindowMove(window.id, position)}
            onResize={(size) => props.onWindowResize(window.id, size)}
            onClick={() => props.onWindowClick?.(window.id)}
          />
        )}
      </For>
    </div>
  )
}
