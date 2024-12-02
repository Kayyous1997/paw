import Header from '@/components/layout/Header'
import BottomNav from '@/components/layout/BottomNav'
import InviteSection from '@/components/features/InviteSection'

export default function FriendsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center pt-[60px] pb-[60px]">
      <Header />
      
      <div className="flex flex-col items-center justify-start w-full max-w-md mx-auto px-4">
        <InviteSection />
      </div>
      
      <BottomNav />
    </div>
  )
} 