'use client'

interface StatusTabsProps {
  activeTab: 'in-progress' | 'completed'
  onTabChange: (tab: 'in-progress' | 'completed') => void
  completedCount: number
}

function StatusTabs({ activeTab, onTabChange, completedCount }: StatusTabsProps) {
  return (
    <div className="flex space-x-2 bg-gray-900 p-1 rounded-lg">
      <button
        onClick={() => onTabChange('in-progress')}
        className={`flex-1 py-2 px-4 rounded-md transition-colors ${
          activeTab === 'in-progress' 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        In Progress
      </button>
      <button
        onClick={() => onTabChange('completed')}
        className={`flex-1 py-2 px-4 rounded-md transition-colors ${
          activeTab === 'completed' 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Completed ({completedCount})
      </button>
    </div>
  )
}

export default StatusTabs 