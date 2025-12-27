import {createEffect, createSignal, onCleanup, onMount} from 'solid-js'
import {cn} from '~/lib/utils'
import {Taskbar} from '~/components/taskbar/taskbar'
import {WindowManager} from '~/components/windows/window-manager'
import {StartMenu} from '~/components/start-menu/start-menu'
import {createDesktopStore} from '~/stores/desktop-store'
import {useTheme} from '~/contexts/theme-context'

export function Desktop() {
    const {getThemeClass} = useTheme()
    const {state, openWindow, closeWindow, focusWindow, toggleMinimize, toggleMaximize} = createDesktopStore()

    const [currentTime, setCurrentTime] = createSignal(new Date())
    const [isStartMenuOpen, setIsStartMenuOpen] = createSignal(false)

    onMount(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000)
        onCleanup(() => clearInterval(timer))
    })

    createEffect(() => {
        console.log(getThemeClass())
    })

    return (
        <div class={cn("h-screen w-screen overflow-hidden flex flex-col relative bg-black", getThemeClass())}>
            {/* Wallpaper / Background */}
            <div class="absolute inset-0 opacity-20">
                <div class="w-full h-full" style={{
                    "background-image": `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
                    "background-size": '50px 50px'
                }}/>
            </div>

            {/* Circuit Pattern Overlay */}
            <div class="absolute inset-0 opacity-10">
                <svg class="w-full h-full" viewBox="0 0 100 100" proserve-aspect-ratio="none">
                    <defs>
                        <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M0 10 L20 10 M10 0 L10 20" stroke="rgba(59, 130, 246, 0.3)" stroke-width="0.5"
                                  fill="none"/>
                            <circle cx="10" cy="10" r="1" fill="rgba(59, 130, 246, 0.5)"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit)"/>
                </svg>
            </div>
            <div class="">

                {/* Main Desktop Area */}
                <div class="relative z-10 w-screen h-screen">


                    {/* Desktop Icons could go here */}

                    {/* Widgets would go here */}

                    {/* Windows */}
                    <WindowManager
                        windows={state.windows}
                        onWindowClose={closeWindow}
                        onWindowFocus={focusWindow}
                        onWindowMinimize={toggleMinimize}
                        onWindowMaximize={toggleMaximize}
                        onWindowMove={(id, pos) => {/* Handle move */
                        }}
                        onWindowResize={(id, size) => {/* Handle resize */
                        }}
                    />

                    {/* Taskbar */}
                    <Taskbar
                        items={state.windows.map(w => ({
                            id: w.id,
                            title: w.title,
                            icon: w.icon || '📱',
                            isActive: state.activeWindowId === w.id,
                            isMinimized: w.isMinimized,
                            onClick: () => focusWindow(w.id)
                        }))}
                        onItemClick={(item) => focusWindow(item.id)}
                        onStartMenuClick={() => setIsStartMenuOpen(!isStartMenuOpen())}
                        currentTime={currentTime}
                    />
                    {/* Start Menu */}
                    <StartMenu
                        username={"Erik Smith"}
                        isOpen={isStartMenuOpen()}
                        onClose={() => setIsStartMenuOpen(false)}
                        onAppLaunch={openWindow}
                    />
                </div>
            </div>
        </div>
    )
}
