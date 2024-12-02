'use client'

import { Users } from 'lucide-react'
import UserListItem from './UserListItem'

interface Friend {
  id: number
  username: string
  avatarUrl: string
  timestamp: string
  points: number
  status: 'received' | 'pending'
}

function InviteSection() {
  // Mock data - replace with real data fetching
  const friends: Friend[] = [
    {
      id: 1,
      username: "Sarah Wilson",
      avatarUrl: "https://picsum.photos/seed/friend1/200",
      timestamp: "2 hours ago",
      points: 1000,
      status: 'received'
    },
    {
      id: 2,
      username: "Mike Johnson",
      avatarUrl: "https://picsum.photos/seed/friend2/200",
      timestamp: "5 hours ago",
      points: 500,
      status: 'pending'
    },
    // Add more friends as needed
  ]

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">INVITE FRIENDS</h1>
        <p className="text-sm text-gray-400">
          Earn rewards for every friend that joins
        </p>
      </div>

      <button className="w-full bg-blue-600 text-white py-4 rounded-lg mb-8 hover:bg-blue-700 transition-colors">
        Invite Friends
      </button>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Users className="w-5 h-5 mr-2" />
          <span className="text-sm">Friends List</span>
        </div>
        <span className="text-sm text-gray-400">6 users</span>
      </div>

      <div className="space-y-3">
        {friends.map((friend) => (
          <UserListItem
            key={friend.id}
            username={friend.username}
            avatarUrl={friend.avatarUrl}
            timestamp={friend.timestamp}
            points={friend.points}
            status={friend.status}
          />
        ))}
      </div>
    </div>
  )
}

export default InviteSection 