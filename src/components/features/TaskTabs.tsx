'use client'

interface TaskTabsProps {
  activeTab: 'limited' | 'in-game' | 'partners';
  onTabChange: (tab: 'limited' | 'in-game' | 'partners') => void;
  inGameCount: number;
}

/**
 * TaskTabs Component
 * 
 * Navigation tabs for filtering different categories of tasks
 * 
 * @prop {('limited' | 'in-game' | 'partners')} activeTab - Currently selected tab
 * @prop {(tab: 'limited' | 'in-game' | 'partners') => void} onTabChange - Callback when tab is changed
 * @prop {number} inGameCount - Number of available in-game tasks
 */
function TaskTabs({ activeTab, onTabChange, inGameCount }: TaskTabsProps) {
  return (
    <div className="flex space-x-2 bg-gray-900 p-1 rounded-lg">
      {/* Limited Time Tasks Tab */}
      <button
        onClick={() => onTabChange('limited')}
        className={`flex-1 py-2 px-4 rounded-md text-sm transition-colors ${
          activeTab === 'limited' ? 'bg-blue-600' : 'hover:bg-white/10'
        }`}
      >
        Limited Time
      </button>

      {/* In-Game Tasks Tab */}
      <button
        onClick={() => onTabChange('in-game')}
        className={`flex-1 py-2 px-4 rounded-md text-sm transition-colors ${
          activeTab === 'in-game' ? 'bg-blue-600' : 'hover:bg-white/10'
        }`}
      >
        In-Game ({inGameCount})
      </button>

      {/* Partner Tasks Tab */}
      <button
        onClick={() => onTabChange('partners')}
        className={`flex-1 py-2 px-4 rounded-md text-sm transition-colors ${
          activeTab === 'partners' ? 'bg-blue-600' : 'hover:bg-white/10'
        }`}
      >
        Partners
      </button>
    </div>
  )
}

export default TaskTabs 