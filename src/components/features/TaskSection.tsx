'use client'

import { useState } from 'react'
import { Gamepad2, Share2, Trophy, MessageSquare, UserPlus } from 'lucide-react'
import TaskCard from './TaskCard'
import TaskTabs from './TaskTabs'

// Define task type
interface Task {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  reward: number;
  type: 'limited' | 'in-game' | 'partners';
}

// Mock task data - replace with API call in production
const tasks: Task[] = [
  {
    id: 1,
    icon: Gamepad2,
    title: "Play Daily Challenge",
    description: "Complete today's special mission",
    reward: 500,
    type: 'limited'
  },
  {
    id: 2,
    icon: Share2,
    title: "Share with Friends",
    description: "Invite 3 friends to join",
    reward: 300,
    type: 'limited'
  },
  {
    id: 3,
    icon: Trophy,
    title: "Win 5 Matches",
    description: "Win matches in any game mode",
    reward: 1000,
    type: 'in-game'
  },
  {
    id: 4,
    icon: MessageSquare,
    title: "Send a Message",
    description: "Send your first message in the community",
    reward: 50,
    type: 'partners'
  },
  {
    id: 5,
    icon: UserPlus,
    title: "Complete Profile",
    description: "Fill out your profile information",
    reward: 75,
    type: 'partners'
  }
]

function TaskSection() {
  const [activeTab, setActiveTab] = useState<'limited' | 'in-game' | 'partners'>('limited')

  // Filter tasks based on active tab
  const filteredTasks = tasks.filter(task => task.type === activeTab)
  const inGameCount = tasks.filter(task => task.type === 'in-game').length

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">TASKS</h1>
        <p className="text-sm text-gray-400">
          GET REWARDS FOR COMPLETING QUESTS
        </p>
      </div>

      {/* Task Navigation Tabs */}
      <TaskTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        inGameCount={inGameCount}
      />

      {/* Task List */}
      <div className="mt-6 space-y-4">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            icon={task.icon}
            title={task.title}
            description={task.description}
            reward={task.reward}
            onStart={() => console.log(`Starting task: ${task.id}`)}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskSection 