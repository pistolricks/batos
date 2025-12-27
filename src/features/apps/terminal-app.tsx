import {createSignal, For, onMount, onCleanup, createEffect, Show} from 'solid-js'
import { useTheme } from '~/contexts/theme-context'

interface CommandHistory {
  command: string
  output: string[]
  timestamp: Date
}

export function TerminalApp() {
  const { getThemeClass } = useTheme()
  const [input, setInput] = createSignal('')
  const [commandHistory, setCommandHistory] = createSignal<CommandHistory[]>([
    {
      command: '',
      output: [
        '⠈⠙⠲⢶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣿⡀⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⣼⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣿⠟⠓⠉',
        '⠀⠀⠀⠀⠈⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⢀⣧⣶⣦⣇⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀⠀',
        '⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣾⣿⣿⣿⣿⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀',
        '⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀',
        '⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀',
        '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠛⠛⠛⠛⠛⠛⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠟⠛⠛⠛⠛⠛⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀',
        '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        'Batcomputer Terminal v.0.0.1',
        'Welcome, Dark Knight. All systems are operational.',
        'Type "help" for available commands.',
      ],
      timestamp: new Date()
    }
  ])
  const [currentDirectory, setCurrentDirectory] = createSignal('/batcave')
  let inputRef: HTMLInputElement | undefined
  let scrollRef: HTMLDivElement | undefined

  const commands: Record<string, () => string[]> = {
    'who am i': () => ['Dark Knight'],
    'whoami': () => ['Dark Knight'],
    'pwd': () => [currentDirectory()],
    'ls': () => [
      'batmobile/',
      'batwing/',
      'batarangs/',
      'gadgets/',
      'surveillance/',
      'evidence/',
      'case_files/',
      'wayne_tech/',
      'gotham_map/',
      'criminal_database/'
    ],
    'clear': () => {
      setCommandHistory([])
      return []
    },
    'help': () => [
      'Available commands:',
      'whoami - Print current user',
      'pwd - Print working directory',
      'ls - List directory contents',
      'cd <dir> - Change directory',
      'cat <file> - Read file contents',
      'clear - Clear terminal screen',
      'help - Show this help message',
      'exit - Close terminal session'
    ]
  }

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    let output: string[] = []

    if (commands[trimmedCmd]) {
      output = commands[trimmedCmd]()
    } else if (trimmedCmd !== '') {
      output = [`Command not found: ${trimmedCmd}. Type "help" for a list of available commands.`]
    }

    if (trimmedCmd !== 'clear') {
      setCommandHistory([...commandHistory(), {
        command: cmd,
        output: output,
        timestamp: new Date()
      }])
    }
    setInput('')
  }

  createEffect(() => {
    commandHistory()
    if (scrollRef) {
      scrollRef.scrollTop = scrollRef.scrollHeight
    }
  })

  return (
    <div 
      class={`w-full h-full p-4 font-mono text-sm overflow-hidden flex flex-col ${getThemeClass()} text-blue-400`}
      onClick={() => inputRef?.focus()}
    >
      <div class="flex-1 overflow-y-auto mb-4" ref={scrollRef}>
        <For each={commandHistory()}>
          {(entry) => (
            <div class="mb-2">
              <Show when={entry.command}>
                <div class="flex items-center space-x-2">
                  <span class="text-green-400">darkknight@batcomputer</span>
                  <span class="text-blue-300">:</span>
                  <span class="text-blue-500">{currentDirectory()}</span>
                  <span class="text-white">$</span>
                  <span>{entry.command}</span>
                </div>
              </Show>
              <For each={entry.output}>
                {(line) => <div class="whitespace-pre-wrap">{line}</div>}
              </For>
            </div>
          )}
        </For>
      </div>

      <div class="flex items-center space-x-2">
        <span class="text-green-400 whitespace-nowrap">darkknight@batcomputer</span>
        <span class="text-blue-300">:</span>
        <span class="text-blue-500 whitespace-nowrap">{currentDirectory()}</span>
        <span class="text-white">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input()}
          onInput={(e) => setInput(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleCommand(input())
            }
          }}
          class="flex-1 bg-transparent border-none outline-none text-blue-400 w-full"
          autofocus
        />
      </div>
    </div>
  )
}
