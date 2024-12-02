'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import StatusTabs from './StatusTabs'

const EmptyState = dynamic(() => import('./EmptyState'), {
  ssr: false
})

function VotingSection() {
  const [activeTab, setActiveTab] = useState<'in-progress' | 'completed'>('in-progress')
  const completedCount = 2 // This would come from your data source

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">VOTES</h1>
        <p className="text-sm text-gray-400">
          CHOOSE THE NEXT APP TO MAKE AN IMPACT
        </p>
      </div>

      <StatusTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        completedCount={completedCount}
      />

      <div className="mt-6">
        {activeTab === 'in-progress' ? (
          <EmptyState />
        ) : (
          <div className="text-gray-400 text-center py-8">
            Previous voting results will appear here
          </div>
        )}
      </div>
    </div>
  )
}

export default VotingSection 