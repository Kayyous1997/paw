import Header from '@/components/layout/Header'
import BottomNav from '@/components/layout/BottomNav'
import LeaderboardList from '@/components/features/LeaderboardList'
import { Trophy } from 'lucide-react'

export default function LeadersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[60px] pb-[60px]">
      <Header />
      
      <div className="flex flex-col items-center justify-start w-full max-w-md mx-auto px-4">
        <div className="bg-blue-600 p-4 rounded-full mb-6">
          <Trophy className="w-8 h-8" />
        </div>
        
        <LeaderboardList />
      </div>
      
      <BottomNav />
    </main>
  )
} 