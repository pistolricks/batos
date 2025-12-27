import {createEffect, createSignal, onCleanup, onMount} from 'solid-js'
import {cn} from '~/lib/utils'
import {Taskbar} from '~/components/taskbar/taskbar'
import {WindowManager} from '~/components/windows/window-manager'
import {StartMenu} from '~/components/start-menu/start-menu'
import {createDesktopStore} from '~/stores/desktop-store'
import {useTheme} from '~/contexts/theme-context'
import {NotificationCenter} from "~/components/start-menu/notifications/notification-center";
import {DesktopApp} from "~/types/desktop";

export function Desktop() {
    const {getThemeClass} = useTheme()
    const {state, setState, openWindow, closeWindow, focusWindow, toggleMinimize, toggleMaximize, dismissNotification} = createDesktopStore()

    const [currentTime, setCurrentTime] = createSignal(new Date())
    const [isStartMenuOpen, setIsStartMenuOpen] = createSignal(false)

    onMount(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000)
        onCleanup(() => clearInterval(timer))
    })

    createEffect(() => {
        console.log(getThemeClass())
    })

    const [systemMenuState, setSystemMenuState] = createSignal({
        isOpen: false
    })

    const [widgetVisibility, setWidgetVisibility] = createSignal<Record<string, boolean>>({
        'clock-widget': false,
        'calendar-widget': false,
        'cpu-widget': false,
        'user-stats-widget': false,
        'bruce-wayne-widget': false,
        'console-widget': false,
        'map-widget': false,
        'weather-widget': false,
        'alert-widget': false
    })

    const [contextMenu, setContextMenu] = createSignal<{
        isOpen: boolean
        x: number
        y: number
    }>({
        isOpen: false,
        x: 0,
        y: 0
    })
    const [contextMenuSections, setContextMenuSections] = createSignal({
        themes: false,
        widgets: false
    })

    return (
        <div class={cn("h-screen w-screen overflow-hidden flex flex-col relative bg-background")}>
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
                        currentTime={() => currentTime()}
                    />

                    {/* Notification Center */}
                    <NotificationCenter
                        notifications={state.notifications}
                        onNotificationDismiss={dismissNotification}
                    />



                    {/* Start Menu */}
                    <StartMenu
                        username={"Erik Smith"}
                        isOpen={isStartMenuOpen()}
                        onClose={() => setIsStartMenuOpen(false)}
                        onAppLaunch={openWindow}
                    />

                    {/*
                    <SystemMenu
                        isOpen={systemMenuState().isOpen}
                        onClose={handleSystemMenuClose}
                    onAppLaunch={(appy: DesktopApp) => {
                    if (appy.id === 'terminal' || appy.id === 'file-manager') {
                        // Handle through start menu launch
                        const app = applications.find(a => a.id === appy.id)
                        if (app) {
                            handleStartMenuAppLaunch(app)
                        }
                    } else {
                        // Handle other apps
                        switch (appId) {
                            case 'system-info':
                                openWindow({
                                    id: 'system-info',
                                    name: 'System Info',
                                    icon: 'monitor',
                                    description: 'System monitoring and diagnostics',
                                    category: 'system',
                                    executable: () => <SystemInfoApp />
                                })
                                break
                            case 'settings':
                                openWindow({
                                    id: 'settings',
                                    name: 'Settings',
                                    icon: 'settings',
                                    description: 'System preferences and configuration',
                                    category: 'system',
                                    executable: () => <div>Settings App</div>
                                })
                                break
                        }
                    }
                }}
                    systemInfo={{
                    os: 'BatOS',
                    version: '978.0.06.51',
                    cpu: 'WayneTech Quantum Core',
                    memory: '64GB RAM',
                    storage: '2TB SSD',
                    uptime: '47 days, 12 hours',
                    battery: 87
                }}
                    />
            */}


                </div>
            </div>
        </div>
    )
}
