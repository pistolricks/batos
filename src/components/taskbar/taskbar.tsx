import {createSignal, For, Show} from 'solid-js'
import {cn, formatTime} from '~/lib/utils'
import {TaskbarItem} from '~/types/desktop'
import {Button} from '~/components/ui/button'
import {useTheme} from '~/contexts/theme-context'
import {useVolume} from '~/contexts/volume-context'
import {Battery, Search, Volume2, VolumeX, Wifi, Circle} from 'lucide-solid'

interface TaskbarProps {
    items: TaskbarItem[]
    onItemClick: (item: TaskbarItem) => void
    onStartMenuClick: () => void
    onSystemMenuToggle?: () => void
    currentTime: () => Date
}

export function Taskbar(props: TaskbarProps) {
    const {getThemeClass} = useTheme()
    const {volume, isMuted, setVolume, toggleMute} = useVolume()
    const [showVolumeControl, setShowVolumeControl] = createSignal(false)
    let volumeRef: HTMLDivElement | undefined

    // File search functionality
    const [searchQuery, setSearchQuery] = createSignal('')
    const [searchResults, setSearchResults] = createSignal<Array<{
        name: string
        path: string
        type: 'file' | 'folder'
        icon: string
    }>>([])
    const [showSearchResults, setShowSearchResults] = createSignal(false)

    // Filesystem data for search
    const filesystemData = [
        {name: 'batmobile', path: '/batcave/batmobile', type: 'folder' as const, icon: '🚗'},
        {name: 'batwing', path: '/batcave/batwing', type: 'folder' as const, icon: '✈️'},
        {name: 'batarangs', path: '/batcave/batarangs', type: 'folder' as const, icon: '🥷'},
        {name: 'gadgets', path: '/batcave/gadgets', type: 'folder' as const, icon: '🛠️'},
        {name: 'surveillance', path: '/batcave/surveillance', type: 'folder' as const, icon: '📹'},
        {name: 'evidence', path: '/batcave/evidence', type: 'folder' as const, icon: '🔍'},
        {name: 'case_files', path: '/batcave/case_files', type: 'folder' as const, icon: '📁'},
        {name: 'wayne_tech', path: '/batcave/wayne_tech', type: 'folder' as const, icon: '🏢'},
        {name: 'gotham_map', path: '/batcave/gotham_map', type: 'folder' as const, icon: '🗺️'},
        {name: 'criminal_database', path: '/batcave/criminal_database', type: 'folder' as const, icon: '👥'},
        {name: 'status.txt', path: '/batcave/batmobile/status.txt', type: 'file' as const, icon: '📄'},
        {name: 'specs.txt', path: '/batcave/batmobile/specs.txt', type: 'file' as const, icon: '📄'},
        {name: 'maintenance.log', path: '/batcave/batmobile/maintenance.log', type: 'file' as const, icon: '📄'},
        {
            name: 'active_targets.txt',
            path: '/batcave/surveillance/active_targets.txt',
            type: 'file' as const,
            icon: '📄'
        },
        {name: 'joker_case.txt', path: '/batcave/case_files/joker_case.txt', type: 'file' as const, icon: '📄'},
        {name: 'penguin_case.txt', path: '/batcave/case_files/penguin_case.txt', type: 'file' as const, icon: '📄'},
        {name: 'riddler_case.txt', path: '/batcave/case_files/riddler_case.txt', type: 'file' as const, icon: '📄'}
    ]

    const handleSearch = (query: string) => {
        setSearchQuery(query)
        if (query.trim() === '') {
            setSearchResults([])
            setShowSearchResults(false)
            return
        }

        const results = filesystemData.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.path.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 8) // Limit to 8 results

        setSearchResults(results)
        setShowSearchResults(results.length > 0)
    }

    const handleSearchResultClick = (result: typeof filesystemData[0]) => {
        console.log(`Opening: ${result.path}`)
        setSearchQuery('')
        setShowSearchResults(false)
    }

    return (

        <div
            class={`fixed top-0 left-0 right-0 h-14 ${getThemeClass()} backdrop-blur-md border-b-2 border-blue-400/50 z-50`}
            style={{
                'box-shadow': '0 2px 20px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(59, 130, 246, 0.1)'
            }}>
            <div class="flex items-center justify-between h-full w-screen px-4">
                {/* Batman Logo */}
                <div class="flex items-center space-x-3">

                    <Button
                        variant="default"
                        size={"icon"}
                        class="cursor-pointer transition-all duration-300 hover:scale-110 group relative"
                        onClick={props.onStartMenuClick}
                    >
                        <div
                            class="absolute inset-0 bg-blue-400/20 rounded-full blur-md group-hover:bg-blue-400/40 transition-all duration-300"></div>
                        <img
                            src="/batman-logo.png"
                            alt="Batman Logo"
                            class="relative w-12 h-12 object-contain filter drop-shadow-lg drop-shadow-blue-400/80 group-hover:drop-shadow-blue-400 transition-all duration-300"
                        />
                        <div
                            class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-400 group-hover:w-8 transition-all duration-300"></div>
                    </Button>
                    <div class="h-8 w-px bg-linear-to-b from-blue-400/50 to-transparent"></div>
                </div>

                {/* Search Bar */}

                <div class={"flex justify-end items-center"}>
                    <div class="">
                        <div
                            class="flex items-center bg-blue-400/10 border border-blue-400/30 rounded-full px-3 py-1 w-64 focus-within:border-blue-400/60 focus-within:bg-blue-400/20 transition-all duration-300">
                            <Search size={14} class="text-blue-400/60 mr-2"/>
                            <input
                                type="text"
                                placeholder="Search Batcave database..."
                                value={searchQuery()}
                                onInput={(e) => handleSearch(e.currentTarget.value)}
                                class="bg-transparent border-none outline-none text-xs text-blue-400 placeholder:text-blue-400/40 w-full"
                            />
                        </div>

                        <Show when={showSearchResults()}>
                            <div
                                class="absolute bottom-14 left-0 w-80 bg-black/90 border border-blue-400/30 rounded-lg shadow-xl shadow-blue-400/20 overflow-hidden z-[60]">
                                <div class="p-2 border-b border-blue-400/20 bg-blue-400/10">
                                    <span class="text-[10px] font-bold text-blue-400 tracking-widest uppercase">Database Matches</span>
                                </div>
                                <div class="max-h-60 overflow-y-auto">
                                    <For each={searchResults()}>
                                        {(result) => (
                                            <button
                                                class="w-full flex items-center p-2 hover:bg-blue-400/20 text-left transition-colors group"
                                                onClick={() => handleSearchResultClick(result)}
                                            >
                                                <span
                                                    class="text-lg mr-3 group-hover:scale-110 transition-transform">{result.icon}</span>
                                                <div class="flex flex-col">
                                                    <span class="text-sm text-blue-400 font-medium">{result.name}</span>
                                                    <span class="text-[10px] text-blue-400/50">{result.path}</span>
                                                </div>
                                            </button>
                                        )}
                                    </For>
                                </div>
                            </div>
                        </Show>

                    </div>
                    <div class="h-6 w-px bg-blue-400/20 mx-2"></div>

                    <div class="flex items-center space-x-1">
                        <For each={props.items}>
                            {(item) => (
                                <Button
                                variant="ghost"
                                    class={cn(
                                        "px-3 relative group transition-all duration-300",
                                        item.isActive ? "bg-blue-400/30 text-blue-400" : "text-blue-400/60 hover:text-blue-400 hover:bg-blue-400/10"
                                    )}
                                    onClick={() => props.onItemClick(item)}
                                >

                                    <div class="flex space-x-2 items-center">
                                        <Show when={item.isActive}>

                                            <Circle size={10}
                                                    class="text-blue-400 group-hover:text-blue-400 transition-colors"/>


                                        </Show>
                                        <span class="text-xs font-medium hidden lg:block">{item.title}</span>
                                    </div>

                                </Button>
                            )}
                        </For>
                    </div>


                    {/* System Tray Icons */}
                    <div class="h-6 w-px bg-blue-400/30 mx-2"></div>
                    <div class="items-center space-x-4 ml-2 hidden sm:flex">
                        <Wifi size={20} class="text-blue-400/60 hover:text-blue-400 transition-colors cursor-pointer"/>
                        <Battery size={20}
                                 class="text-blue-400/60 hover:text-blue-400 transition-colors cursor-pointer"/>

                        <div class="relative" ref={volumeRef}>
                            <div
                                class="flex items-center space-x-1 cursor-pointer group"
                                onClick={() => setShowVolumeControl(!showVolumeControl())}
                            >
                                <Show when={isMuted() || volume() === 0} fallback={<Volume2 size={14}
                                                                                            class="text-blue-400/60 group-hover:text-blue-400 transition-colors"/>}>
                                    <VolumeX size={20}
                                             class="text-red-400/60 group-hover:text-red-400 transition-colors"/>
                                </Show>
                            </div>

                            <Show when={showVolumeControl()}>
                                <div
                                    class="absolute bottom-12 right-0 bg-black/90 border border-blue-400/30 rounded-lg p-3 w-40 shadow-xl shadow-blue-400/20 z-[60]">
                                    <div class="flex items-center justify-between mb-2">
                                        <span
                                            class="text-[10px] text-blue-400 font-bold uppercase tracking-tighter">Volume</span>
                                        <span class="text-[10px] text-blue-400 font-mono">{volume()}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={volume()}
                                        onInput={(e) => setVolume(parseInt(e.currentTarget.value))}
                                        class="w-full h-1 bg-blue-400/20 rounded-lg appearance-none cursor-pointer accent-blue-400"
                                    />
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        class="w-full mt-2 h-6 text-[10px] text-blue-400 hover:bg-blue-400/10 border border-blue-400/20"
                                        onClick={toggleMute}
                                    >
                                        {isMuted() ? 'UNMUTE' : 'MUTE'}
                                    </Button>
                                </div>
                            </Show>
                        </div>


                        <div class="h-6 w-px bg-blue-400/30 mx-2"></div>

                        <Button
                            variant="ghost"
                            class="flex items-center space-x-2 px-2 h-10 hover:bg-blue-400/10 transition-all duration-300 group"
                            onClick={() => props.onSystemMenuToggle?.()}
                        >
                            <div class="flex flex-col items-end space-y-1">
                                 <span
                                     class="text-xs font-mono font-bold text-blue-400 leading-none group-hover:text-blue-300 transition-colors">
                                   {formatTime(props.currentTime())}
                                 </span>
                                <span class="text-[9px] font-mono text-blue-400/90 leading-none">
                                   {props.currentTime().toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}
                                 </span>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
