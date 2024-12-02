'use client'

import { PawPrint } from 'lucide-react'

interface PawCounterProps {
  points: number
  rank: string
}

const PawCounter = ({ points, rank }: PawCounterProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-900 p-8 rounded-full mb-6 hover:bg-gray-800 transition-colors">
        <PawPrint className="w-12 h-12" />
      </div>
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {points.toLocaleString()} PAWS
        </h1>
        <p className="text-gray-400">{rank}</p>
      </div>
    </div>
  )
}

export default PawCounter 