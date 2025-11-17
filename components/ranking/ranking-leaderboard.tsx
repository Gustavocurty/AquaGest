'use client'

import { Trophy, Medal, Award, Star } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

interface RankingLeaderboardProps {
  activeTab: 'Amigos' | 'Vizinhança'
}

export default function RankingLeaderboard({ activeTab }: RankingLeaderboardProps) {
  const friendsRanking = [
    {
      position: 1,
      name: 'Ana Clara',
      consumption: '120 L',
      badge: 'ouro',
      avatar: '/woman-avatar-1.png',
      initials: 'AC',
    },
    {
      position: 2,
      name: 'Bruno Silva',
      consumption: '125 L',
      badge: 'prata',
      avatar: '/man-avatar-2.png',
      initials: 'BS',
    },
    {
      position: 3,
      name: 'Carla Souza',
      consumption: '128 L',
      badge: 'bronze',
      avatar: '/woman-avatar-3.png',
      initials: 'CS',
    },
    {
      position: 4,
      name: 'Daniel...',
      consumption: '130 L',
      badge: null,
      avatar: '/man-avatar-4.jpg',
      initials: 'DO',
    },
  ]

  const ranking = activeTab === 'Amigos' ? friendsRanking : friendsRanking

  const getBadgeIcon = (badge: string | null) => {
    switch (badge) {
      case 'ouro':
        return <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
      case 'prata':
        return <Star className="w-5 h-5 text-gray-400 fill-gray-400" />
      case 'bronze':
        return <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-3">
      {ranking.map((participant) => (
        <div
          key={participant.position}
          className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border/20"
        >
          {/* Position */}
          <span className="text-sm font-bold text-foreground w-6 text-center">{participant.position}</span>

          {/* Avatar */}
          <Avatar className="w-10 h-10">
            <AvatarImage src={participant.avatar || "/placeholder.svg"} alt={participant.name} />
            <AvatarFallback className="bg-primary text-white text-xs font-bold">
              {participant.initials}
            </AvatarFallback>
          </Avatar>

          {/* Name */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground">{participant.name}</p>
          </div>

          {/* Consumption */}
          <div className="text-right flex-shrink-0">
            <p className="text-sm font-semibold text-foreground">{participant.consumption}</p>
            <p className="text-xs text-muted-foreground">Consumo médio</p>
          </div>

          {/* Badge */}
          {getBadgeIcon(participant.badge) && (
            <div className="flex-shrink-0">
              {getBadgeIcon(participant.badge)}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
