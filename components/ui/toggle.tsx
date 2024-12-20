'use client'

interface ToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full
        transition-colors duration-300 ease-in-out
        border-2 border-black
        ${checked ? 'bg-green-400' : 'bg-white'}
        shadow-[2px_2px_0_0_rgba(0,0,0,1)]
        hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)]
      `}
    >
      <span
        className={`
          inline-block h-4 w-4 rounded-full
          transform transition-transform duration-300 ease-in-out
          bg-white border-2 border-black
          ${checked ? 'translate-x-5' : 'translate-x-1'}
        `}
      />
    </button>
  )
} 