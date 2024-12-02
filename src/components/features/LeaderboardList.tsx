'use client'

import LeaderboardEntry from './LeaderboardEntry'

interface LeaderboardUser {
  id: number
  rank: number
  username: string
  pawScore: number
  avatarUrl: string
  achievement?: 'gold' | 'silver' | 'bronze'
}

const LeaderboardList = () => {
  // Mock data - replace with real data fetching
  const users: LeaderboardUser[] = [
    {
      id: 1,
      rank: 1,
      username: "PawMaster",
      pawScore: 98432,
      avatarUrl: "https://picsum.photos/seed/user1/200",
      achievement: "gold"
    },
    {
      id: 2,
      rank: 2,
      username: "DoggoLover",
      pawScore: 87654,
      avatarUrl: "https://picsum.photos/seed/user2/200",
      achievement: "silver"
    },
    {
      id: 3,
      rank: 3,
      username: "KittyQueen",
      pawScore: 76543,
      avatarUrl: "https://picsum.photos/seed/user3/200",
      achievement: "bronze"
    },
    // Add more users as needed
  ]

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Leaderboard</h2>
        <span className="text-sm text-gray-400">52,568,931 users</span>
      </div>
      
      <div className="space-y-2">
        {users.map((user) => (
          <LeaderboardEntry
            key={user.id}
            rank={user.rank}
            username={user.username}
            pawScore={user.pawScore}
            avatarUrl={user.avatarUrl}
            achievement={user.achievement}
          />
        ))}
      </div>
    </div>
  )
}

export default LeaderboardList 