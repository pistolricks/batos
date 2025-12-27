

import { cn } from '~/lib/utils'
import { Notification } from '~/types/desktop'
import { Button } from '~/components/ui/button'
import { useTheme } from '~/contexts/theme-context'
import { X, Info, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-solid'
import {For, JSX} from "solid-js";

interface NotificationCenterProps {
    notifications: Notification[]
    onNotificationDismiss: (id: string) => void
}

export function NotificationCenter(props: NotificationCenterProps) {
    const {getThemeClass} = useTheme()
    const getNotificationIcon = (type: Notification['type']) => {
        switch (type) {
            case 'success':
                return <CheckCircle class="w-4 h-4 text-green-400"/>
            case 'warning':
                return <AlertTriangle class="w-4 h-4 text-yellow-400"/>
            case 'error':
                return <AlertCircle class="w-4 h-4 text-red-400"/>
            default:
                return <Info class="w-4 h-4 text-blue-400"/>
        }
    }

    const getNotificationBorderColor = (type: Notification['type']) => {
        switch (type) {
            case 'success':
                return 'border-green-400/30'
            case 'warning':
                return 'border-yellow-400/30'
            case 'error':
                return 'border-red-400/30'
            default:
                return 'border-blue-400/30'
        }
    }

    return (
        <div class="fixed top-4 right-4 z-50 space-y-2 pointer-events-none">
            <For each={props.notifications}>
                {(notification: Notification)=> (
                <div
                    class={cn(
                        `${getThemeClass()} backdrop-blur-sm text-white p-4 rounded-lg border shadow-lg`,
                        "max-w-sm pointer-events-auto",
                        "animate-in slide-in-from-right-2 duration-300",
                        getNotificationBorderColor(notification.type)
                    )}
                    >
                    <div class="flex items-start space-x-3">
                        <div class="flex shrink-0 mt-0.5">
                            {getNotificationIcon(notification.type)}
                        </div>

                        <div class="flex-1 min-w-0">
                            <div class="text-sm font-semibold text-blue-400">
                                {notification.title}
                            </div>
                            <div class="text-xs text-gray-300 mt-1">
                                {notification.message}
                            </div>

                            {notification.action && (
                                <Button
                                    variant="batcomputerOutline"
                                    size="sm"
                                    onClick={notification.action.onClick}
                                    class="mt-2 h-6 px-2 text-xs"
                                >
                                    {notification.action.label}
                                </Button>
                            )}
                        </div>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => props.onNotificationDismiss(notification.id)}
                            class="h-6 w-6 p-0 flex shrink-0 hover:bg-white/10"
                        >
                            <X class="w-3 h-3" />
                        </Button>
                    </div>
                </div>
                )}
            </For>
        </div>
    )
}