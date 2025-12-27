import { For, Show, createSignal, JSX } from 'solid-js'
import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'
import { DesktopApp } from '~/types/desktop'
import { useTheme } from '~/contexts/theme-context'
import { 
  Play, 
  FileText, 
  Monitor, 
  Settings, 
  Power,
  Search,
  User,
  Terminal,
  Folder,
  Music,
  Clock,
  Calendar,
  Cpu,
  Activity,
  MapPin,
  Cloud,
  Database,
  Shield
} from 'lucide-solid'

import { TerminalApp } from '~/features/apps/terminal-app'
import { NotepadApp } from '~/features/apps/notepad-app'

interface StartMenuProps {
  isOpen: boolean
  onClose: () => void
  onAppLaunch: (app: DesktopApp) => void
  username: string
}

const getIconComponent = (iconName: string): JSX.Element => {
  switch (iconName) {
    case 'terminal': return <Terminal size={24} />;
    case 'folder': return <Folder size={24} />;
    case 'music': return <Music size={24} />;
    case 'file-text': return <FileText size={24} />;
    case 'monitor': return <Monitor size={24} />;
    case 'settings': return <Settings size={24} />;
    case 'user': return <User size={24} />;
    default: return <Settings size={24} />;
  }
}
export const applications: DesktopApp[] = [
  {
    id: 'alfred',
    name: 'Alfred',
    icon: 'user',
    description: 'AI Assistant & Voice Control',
    category: 'system',
    executable: () => <div>Alfred App</div>, // Placeholder
    defaultSize: { width: 300, height: 300 },
    defaultPosition: { x: 20, y: 70 }
  },
  {
    id: 'terminal',
    name: 'Terminal',
    icon: 'terminal',
    description: 'Command line interface',
    category: 'system',
    executable: () => <TerminalApp />,
    defaultSize: { width: 300, height: 300 },
    defaultPosition: { x: 20, y: 70 },
    type: 'terminal',
    resizable: true,
    draggable: true
  },
  {
    id: 'file-manager',
    name: 'File Manager',
    icon: 'folder',
    description: 'Browse files and folders',
    category: 'system',
    executable: () => <div>File Manager App</div>,
    defaultSize: { width: 300, height: 300 },
    defaultPosition: { x: 20, y: 70 },
    type: 'file-manager',
    resizable: true,
    draggable: true
  },
  {
    id: 'ipod',
    name: 'Batplayer',
    icon: 'music',
    description: 'Retro music player',
    category: 'entertainment',
    executable: () => <div>Batplayer App</div>,
    defaultSize: { width: 300, height: 300 },
    defaultPosition: { x: 20, y: 70 },
    resizable: true,
    draggable: true
  },
  {
    id: 'notepad',
    name: 'Notepad',
    icon: 'file-text',
    description: 'Simple text editor',
    category: 'utilities',
    executable: () => <NotepadApp />,
    defaultSize: { width: 300, height: 300 },
    defaultPosition: { x: 20, y: 70 },
    resizable: true,
    draggable: true
  },
  {
    id: 'system-info',
    name: 'System Info',
    icon: 'monitor',
    description: 'System information and monitoring',
    category: 'system',
    executable: () => <div>System Info App</div>,
    defaultSize: { width: 300, height: 300 },
    defaultPosition: { x: 20, y: 70 }
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: 'settings',
    description: 'System settings and preferences',
    category: 'system',
    executable: () => <div>Settings App</div>,
    defaultSize: { width: 300, height: 300 },
    defaultPosition: { x: 20, y: 70 },
  }
]
export function StartMenu(props: StartMenuProps) {
  const { getThemeClass } = useTheme()
  const [searchQuery, setSearchQuery] = createSignal('')



  const filteredApps = () => applications.filter(app => 
    app.name.toLowerCase().includes(searchQuery().toLowerCase()) ||
    app.description.toLowerCase().includes(searchQuery().toLowerCase())
  )

  return (
    <Show when={props.isOpen}>
      <div 
        class={cn(
          "absolute bottom-14 left-0 w-full h-full sm:w-125 sm:h-150 rounded-tr-lg shadow-2xl z-50 border-x border-t border-blue-400/30 overflow-hidden flex flex-col transition-all duration-300 animate-in slide-in-from-bottom-5",
          getThemeClass()
        )}
      >
        {/* Header */}


        {/* Search */}
        <div class="p-4 border-b border-blue-400/10">
          <div class="relative">
            <Search size={16} class="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400/40" />
            <input 
              type="text" 
              placeholder="Query Batcomputer database..." 
              class="w-full bg-blue-400/5 border border-blue-400/20 rounded-md py-2 pl-10 pr-4 text-sm text-blue-400 placeholder:text-blue-400/30 outline-none focus:border-blue-400/50 focus:bg-blue-400/10 transition-all"
              onInput={(e) => setSearchQuery(e.currentTarget.value)}
              autofocus
            />
          </div>
        </div>

        {/* Content */}
        <div class="flex-1 flex overflow-hidden">
          {/* Main Apps Grid */}
          <div class="flex-1 p-4 overflow-y-auto">
            <div class="mb-4">
              <h3 class="text-[10px] font-bold text-blue-400/40 uppercase tracking-[0.2em] mb-3">Priority Applications</h3>
              <div class="grid grid-cols-3 gap-4">
                <For each={filteredApps()}>
                  {(app) => (
                    <button 
                      class="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-blue-400/10 transition-all group"
                      onClick={() => { props.onAppLaunch(app); props.onClose(); }}
                    >
                      <div class="w-12 h-12 mb-2 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-all">
                        {getIconComponent(app.icon)}
                      </div>
                      <span class="text-[10px] text-blue-400 font-medium uppercase tracking-tighter text-center">{app.name}</span>
                    </button>
                  )}
                </For>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div class="w-16 bg-blue-400/5 border-l border-blue-400/10 flex flex-col items-center py-4 space-y-6">
            <Settings size={18} class="text-blue-400/40 hover:text-blue-400 cursor-pointer transition-colors" />
            <Folder size={18} class="text-blue-400/40 hover:text-blue-400 cursor-pointer transition-colors" />
            <Monitor size={18} class="text-blue-400/40 hover:text-blue-400 cursor-pointer transition-colors" />
            <div class="flex-1"></div>
            <div class="flex flex-col items-center space-y-2 pb-2">
              <div class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
              <div class="w-1.5 h-1.5 rounded-full bg-blue-400/40"></div>
              <div class="w-1.5 h-1.5 rounded-full bg-blue-400/40"></div>
            </div>
          </div>
        </div>
        <div class="pl-4 pr-3 py-2 bg-blue-400/10 border-y border-blue-400/20 flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="size-8 rounded-full border-2 border-blue-400 p-0.5 shadow-[0_0_15px_rgba(96,165,250,0.5)]">
              <div class="w-full h-full rounded-full bg-blue-900 flex items-center justify-center text-blue-400">
                <User size={24} />
              </div>
            </div>
            <div>
              <h2 class="text-[14px] font-bold text-blue-400 tracking-wider uppercase leading-none">{props.username}</h2>
              <p class="text-[10px] text-blue-400/60 font-mono mt-1 tracking-tighter uppercase">Administrator Access Granted</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" class="text-red-400 hover:bg-red-400/10 rounded-full" onClick={() => props.onClose()}>
            <Power size={20} />
          </Button>
        </div>
        {/* Footer */}
        <div class="p-3 bg-blue-400/5 border-t border-blue-400/10 flex items-center justify-between px-6">
          <div class="flex items-center space-x-2">
            <Shield size={12} class="text-blue-400/40" />
            <span class="text-[9px] font-mono text-blue-400/40 uppercase tracking-widest">Encrypted Session: Active</span>
          </div>
          <span class="text-[9px] font-mono text-blue-400/40 uppercase tracking-widest">BatOS v1.0.4-LQUND</span>
        </div>
      </div>
    </Show>
  )
}
