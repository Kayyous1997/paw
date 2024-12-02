'use client'

import { ChevronRight } from 'lucide-react'

interface ActionButton {
  label: string
  onClick: () => void
}

interface ActionButtonsProps {
  buttons: ActionButton[]
}

const ActionButtons = ({ buttons }: ActionButtonsProps) => {
  return (
    <div className="w-full space-y-4">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg flex items-center justify-between transition-colors"
        >
          <span>{button.label}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      ))}
    </div>
  )
}

export default ActionButtons 