'use client'

import { LucideIcon } from 'lucide-react'

interface TaskCardProps {
  icon: React.ElementType;  // For component icons
  title: string;
  description: string;
  reward: number;
  onStart: () => void;
}

/**
 * TaskCard Component
 * 
 * Displays an individual task with its icon, details, and reward information.
 * Used in the Earn page to show available tasks that users can complete.
 * 
 * @prop {React.ElementType} icon - Icon component to display
 * @prop {string} title - Task title
 * @prop {string} description - Task description
 * @prop {number} reward - PAWS points reward for completing the task
 * @prop {() => void} onStart - Callback function when Start button is clicked
 */
function TaskCard({ icon: Icon, title, description, reward, onStart }: TaskCardProps) {
  return (
    <div className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/15 transition-colors">
      {/* Task Icon */}
      <div className="bg-blue-600 p-3 rounded-lg mr-4">
        <Icon className="w-6 h-6" />
      </div>
      
      {/* Task Details */}
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      
      {/* Reward and Action Button */}
      <div className="flex flex-col items-end">
        <span className="text-sm text-gray-400 mb-2">{reward} PAWS</span>
        <button 
          onClick={onStart}
          className="px-4 py-1 bg-white text-black rounded-full text-sm hover:bg-gray-200 transition-colors"
        >
          Start
        </button>
      </div>
    </div>
  )
}

export default TaskCard 