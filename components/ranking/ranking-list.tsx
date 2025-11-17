'use client'

import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Trophy, Award, Medal } from 'lucide-react'

interface RankingListProps {
  activeTab: 'Amigos' | 'Vizinhança'
}

export default function RankingList({ activeTab }: RankingListProps) {
  // Mock data
  const friendsRanking = [
    {
      position: 1,
      name: 'Ana Clara',
      consumption: '120 L',
      badge: 'ouro',
      avatar: '/woman-avatar-1.png',
      initials: 'AC'
    },
    {
      position: 2,
      name: 'Bruno Silva',
      consumption: '125 L',
      badge: 'prata',
      avatar: '/man-avatar-2.png',
      initials: 'BS'
    },
    {
      position: 3,
      name: 'Carla Souza',
      consumption: '128 L',
      badge: 'bronze',
      avatar: '/woman-avatar-3.png',
      initials: 'CS'
    },
    {
      position: 4,
      name: 'Daniel...',
      consumption: '130 L',
      badge: null,
      avatar: '/man-avatar-4.jpg',
      initials: 'D'
    },
  ]

  const neighborhoodRanking = [
    {
      position: 1,
      name: 'João Santos',
      consumption: '110 L',
      badge: 'ouro',
      avatar: '/man-avatar-5.jpg',
      initials: 'JS'
    },
    {
      position: 2,
      name: 'Maria Oliveira',
      consumption: '115 L',
      badge: 'prata',
      avatar: '/woman-avatar-6.jpg',
      initials: 'MO'
    },
    {
      position: 3,
      name: 'Pedro Costa',
      consumption: '122 L',
      badge: 'bronze',
      avatar: '/man-avatar-7.jpg',
      initials: 'PC'
    },
    {
      position: 4,
      name: 'Lucas...',
      consumption: '128 L',
      badge: null,
      avatar: '/man-avatar-8.jpg',
      initials: 'L'
    },
  ]

  const ranking = activeTab === 'Amigos' ? friendsRanking : neighborhoodRanking

  const getBadgeIcon = (badge: string | null) => {
    switch (badge) {
      case 'ouro':
        return <Trophy className="w-5 h-5 text-yellow-500" />
      case 'prata':
        return <Medal className="w-5 h-5 text-gray-400" />
      case 'bronze':
        return <Award className="w-5 h-5 text-orange-500" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-3">
      {ranking.map((participant) => (
        <Card
          key={participant.position}
          className="p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
        >
          {/* Position */}
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-primary">{participant.position}</span>
          </div>

          {/* Avatar and Name */}
          <Avatar className="w-10 h-10 flex-shrink-0">
            <AvatarImage src={participant.avatar || "/placeholder.svg"} alt={participant.name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {participant.initials}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">
              {participant.name}
            </p>
            <p className="text-xs text-muted-foreground">
              Consumo médio
            </p>
          </div>

          {/* Consumption */}
          <div className="text-right flex-shrink-0">
            <p className="text-sm font-semibold text-foreground">
              {participant.consumption}
            </p>
          </div>

          {/* Badge */}
          {participant.badge && (
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
              {getBadgeIcon(participant.badge)}
            </div>
          )}
        </Card>
      ))}
    </div>
  )
}
