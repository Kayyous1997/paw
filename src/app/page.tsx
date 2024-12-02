'use client'

import Header from '@/components/layout/Header'
import BottomNav from '@/components/layout/BottomNav'
import PawCounter from '@/components/features/PawCounter'
import ActionButtons from '@/components/features/ActionButtons'

const Home = () => {
  const handleJoinCommunity = () => {
    // Implement join community logic
    console.log('Joining community...')
  }

  const handleCheckRewards = () => {
    // Implement rewards check logic
    console.log('Checking rewards...')
  }

  const actionButtons = [
    {
      label: 'Join our community',
      onClick: handleJoinCommunity,
    },
    {
      label: 'Check your rewards',
      onClick: handleCheckRewards,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-[60px] pb-[60px]">
      <Header />
      
      <div className="flex flex-col items-center justify-center flex-1 px-4 w-full max-w-md mx-auto">
        <PawCounter points={46173} rank="Legend Rank" />
        <ActionButtons buttons={actionButtons} />
      </div>
      
      <BottomNav />
    </main>
  )
}

export default Home
