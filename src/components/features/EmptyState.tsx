'use client'

import { PawPrint } from 'lucide-react'

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[...Array(3)].map((_, i) => (
          <PawPrint 
            key={i} 
            className={`w-8 h-8 text-gray-700 ${
              i === 1 ? 'translate-y-4' : ''
            }`}
          />
        ))}
      </div>
      <p className="text-gray-400 text-center">NO ACTIVE VOTING</p>
    </div>
  )
}

export default EmptyState 