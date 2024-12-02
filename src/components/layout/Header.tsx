'use client'

import { Map, ChevronRight } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black h-[60px] px-4 flex items-center justify-between border-b border-gray-800">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-400">ID:</span>
        <span className="text-sm">UQDCMo...V4Eu</span>
      </div>
      <div className="flex items-center space-x-4">
        <Map className="w-5 h-5" />
        <ChevronRight className="w-5 h-5" />
      </div>
    </header>
  )
} 