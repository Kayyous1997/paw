import Header from '@/components/layout/Header'
import BottomNav from '@/components/layout/BottomNav'
import VotingSection from '@/components/features/VotingSection'

export default function VotePage() {
  return (
    <div className="flex min-h-screen flex-col items-center pt-[60px] pb-[60px]">
      <Header />
      
      <div className="flex flex-col items-center justify-start w-full max-w-md mx-auto px-4">
        <VotingSection />
      </div>
      
      <BottomNav />
    </div>
  )
} 