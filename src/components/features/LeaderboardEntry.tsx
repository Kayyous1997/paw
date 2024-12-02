'use client'

import Image from 'next/image'
import { Medal } from 'lucide-react'

interface LeaderboardEntryProps {
  rank: number
  username: string
  pawScore: number
  avatarUrl: string
  achievement?: 'gold' | 'silver' | 'bronze'
}

const LeaderboardEntry = ({ rank, username, pawScore, avatarUrl, achievement }: LeaderboardEntryProps) => {
  const achievementColors = {
    gold: 'text-yellow-400',
    silver: 'text-gray-400',
    bronze: 'text-orange-400'
  }

  return (
    <div className="flex items-center p-4 bg-white/10 rounded-lg mb-2 hover:bg-white/15 transition-colors">
      <span className="text-lg font-bold w-8">{rank}</span>
      
      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-4">
        <Image
          src={avatarUrl}
          alt={username}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium">{username}</h3>
        <p className="text-sm text-gray-400">{pawScore.toLocaleString()} PAWS</p>
      </div>
      
      {achievement && (
        <Medal className={`w-6 h-6 ${achievementColors[achievement]}`} />
      )}
    </div>
  )
}

export default LeaderboardEntry 