import { createStore } from "solid-js/store";
import { DesktopState, UiWindow, DesktopApp } from "~/types/desktop";
import { generateId } from "../lib/utils";

export function createDesktopStore() {
  const [state, setState] = createStore<DesktopState>({
    windows: [],
    activeWindowId: null,
    taskbarItems: [],
    notifications: [],
    widgets: [
      {
        id: 'clock-widget',
        name: 'Clock',
        type: 'clock',
        position: { x: 20, y: 100 },
        size: { width: 200, height: 120 }
      },
      {
        id: 'calendar-widget',
        name: 'Calendar',
        type: 'calendar',
        position: { x: 240, y: 100 },
        size: { width: 200, height: 150 }
      },
      {
        id: 'cpu-widget',
        name: 'CPU Usage',
        type: 'cpu',
        position: { x: 460, y: 100 },
        size: { width: 200, height: 150 }
      },
      {
        id: 'user-stats-widget',
        name: 'User Stats',
        type: 'user-stats',
        position: { x: 680, y: 100 },
        size: { width: 200, height: 180 }
      },
      {
        id: 'bruce-wayne-widget',
        name: 'Bruce Wayne Profile',
        type: 'bruce-wayne',
        position: { x: 900, y: 100 },
        size: { width: 200, height: 200 }
      },
      {
        id: 'console-widget',
        name: 'System Console',
        type: 'console',
        position: { x: 20, y: 300 },
        size: { width: 300, height: 250 }
      },
      {
        id: 'map-widget',
        name: 'Surveillance Map',
        type: 'map',
        position: { x: 340, y: 300 },
        size: { width: 280, height: 200 }
      },
      {
        id: 'weather-widget',
        name: 'Weather & System',
        type: 'weather',
        position: { x: 640, y: 300 },
        size: { width: 280, height: 150 }
      },
      {
        id: 'alert-widget',
        name: 'Alert System',
        type: 'alert',
        position: { x: 940, y: 100 },
        size: { width: 300, height: 250 }
      }
    ],
    theme: 'batcomputer',
    wallpaper: '/batcomputer-bg.jpg'
  });

  const openWindow = (app: DesktopApp) => {
    const existingWindow = state.windows.find(w => w.id === app.id);
    if (existingWindow) {
      focusWindow(app.id);
      if (existingWindow.isMinimized) {
        toggleMinimize(app.id);
      }
      return;
    }

    const newWindow: UiWindow = {
      id: app.id,
      title: app.name,
      type: app.type || 'app',
      position: app.defaultPosition || { x: 100, y: 100 },
      size: app.defaultSize || { width: 600, height: 400 },
      isMinimized: false,
      isMaximized: true,
      isFocused: true,
      zIndex: state.windows.length + 10,
      content: app.executable(),
      icon: app.icon,
      resizable: app.resizable ?? true,
      draggable: app.draggable ?? true
    };

    setState("windows", (prev) => [...prev, newWindow]);
    setState("activeWindowId", app.id);
  };

  const closeWindow = (id: string) => {
    setState("windows", (prev) => prev.filter(w => w.id !== id));
    if (state.activeWindowId === id) {
      const remaining = state.windows;
      setState("activeWindowId", remaining.length > 0 ? remaining[remaining.length - 1].id : null);
    }
  };

  const focusWindow = (id: string) => {
    setState("activeWindowId", id);
    setState("windows", (w) => w.id === id, "isFocused", true);
    setState("windows", (w) => w.id !== id, "isFocused", false);
    
    // Update z-index
    const maxZ = Math.max(...state.windows.map(w => w.zIndex), 10);
    setState("windows", (w) => w.id === id, "zIndex", maxZ + 1);
  };

  const toggleMinimize = (id: string) => {
    setState("windows", (w) => w.id === id, "isMinimized", (prev) => !prev);
  };

  const toggleMaximize = (id: string) => {
    setState("windows", (w) => w.id === id, "isMaximized", (prev) => !prev);
  };

  const dismissNotification = (id: string) => {
    setState("notifications", (prev) => prev.filter(n => n.id !== id));
  };

  return {
    state,
    setState,
    openWindow,
    closeWindow,
    focusWindow,
    toggleMinimize,
    toggleMaximize,
    dismissNotification
  };
}
