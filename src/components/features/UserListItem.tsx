'use client'

import Image from 'next/image'
import { Clock } from 'lucide-react'

interface UserListItemProps {
  username: string
  avatarUrl: string
  timestamp: string
  points: number
  status: 'received' | 'pending'
}

function UserListItem({ username, avatarUrl, timestamp, points, status }: UserListItemProps) {
  return (
    <div className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/15 transition-colors">
      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
        <Image
          src={avatarUrl}
          alt={username}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium">{username}</h3>
        <div className="flex items-center text-sm text-gray-400">
          <Clock className="w-4 h-4 mr-1" />
          <span>{timestamp}</span>
        </div>
      </div>
      
      <div className="text-right">
        <span className={`text-sm ${status === 'received' ? 'text-green-400' : 'text-gray-400'}`}>
          {points} PAWS
        </span>
        <p className="text-xs text-gray-500 mt-1">
          {status === 'received' ? 'Received' : 'Pending'}
        </p>
      </div>
    </div>
  )
}

export default UserListItem 