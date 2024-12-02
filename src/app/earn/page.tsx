'use client'

import Header from '@/components/layout/Header'
import BottomNav from '@/components/layout/BottomNav'
import TaskSection from '@/components/features/TaskSection'

/**
 * EarnPage Component
 * 
 * Main page for the task/rewards system where users can:
 * - View available tasks
 * - Complete quests for rewards
 * - Track their progress
 * - Earn PAWS points
 */
export default function EarnPage() {
  return (
    <div className="flex min-h-screen flex-col items-center pt-[60px] pb-[60px]">
      <Header />
      
      <div className="flex flex-col items-center justify-start w-full max-w-md mx-auto px-4">
        <TaskSection />
      </div>
      
      <BottomNav />
    </div>
  )
} 