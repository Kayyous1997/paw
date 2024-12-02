'use client'

import { Home, Trophy, Vote, Users, Coins } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const pathname = usePathname()
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Trophy, label: 'Leaders', path: '/leaders' },
    { icon: Vote, label: 'Vote', path: '/vote' },
    { icon: Users, label: 'Friends', path: '/friends' },
    { icon: Coins, label: 'Earn', path: '/earn' },
  ]

  return (
    <nav className="fixed bottom-0 w-full h-[60px] bg-black border-t border-gray-800">
      <div className="grid grid-cols-5 h-full">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.path
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center justify-center ${
                isActive ? 'text-white' : 'text-gray-500'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
} 