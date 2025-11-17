'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import RankingHero from '@/components/ranking/ranking-hero'
import RankingLeaderboard from '@/components/ranking/ranking-leaderboard'
import ParticipationModal from '@/components/ranking/participation-modal'
import ParticipationToggle from '@/components/ranking/participation-toggle'

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState<'Amigos' | 'Vizinhança'>('Amigos')
  const [showParticipationModal, setShowParticipationModal] = useState(false)
  const [isParticipating, setIsParticipating] = useState(false)

  useEffect(() => {
    const participationStatus = localStorage.getItem('userParticipatingInRanking')
    const isUserParticipating = participationStatus === 'true'
    setIsParticipating(isUserParticipating)
    
    if (!isUserParticipating) {
      setShowParticipationModal(true)
    }
  }, [])

  const handleConfirmParticipation = () => {
    setIsParticipating(true)
    setShowParticipationModal(false)
    localStorage.setItem('userParticipatingInRanking', 'true')
  }

  const handleDenyParticipation = () => {
    setShowParticipationModal(false)
    // Note: User can still change their mind through the toggle below
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background border-b border-border/20">
        <div className="flex items-center gap-3 px-4 py-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard">
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </Button>
          <h1 className="text-lg font-semibold">Ranking Sustentável</h1>
        </div>
      </header>

      <main className="px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <RankingHero />
            
            {/* Top 3 Amigos */}
            {isParticipating && (
              <div className="bg-white border border-border/10 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">TOP 3 AMIGOS</h3>
                <div className="space-y-2">
                  {[
                    { position: '1º', name: 'Ana Clara', consumption: '120 L', badge: '⭐' },
                    { position: '2º', name: 'Bruno Silva', consumption: '125 L', badge: '🥈' },
                    { position: '3º', name: 'Carla Souza', consumption: '128 L', badge: '🥉' },
                  ].map((friend, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-primary">{friend.position}</span>
                        <span className="text-sm font-medium">{friend.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{friend.consumption}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-4">
            {/* Tabs */}
            <div className="flex gap-4 bg-muted/50 p-3 rounded-lg w-fit">
              {['Amigos', 'Vizinhança'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as 'Amigos' | 'Vizinhança')}
                  className={`px-3 py-1 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Leaderboard */}
            {isParticipating && (
              <RankingLeaderboard activeTab={activeTab} />
            )}
          </div>
        </div>

        {/* Participation Toggle */}
        <div className="mt-8 max-w-6xl mx-auto">
          <ParticipationToggle
            isParticipating={isParticipating}
            onToggle={(value) => {
              setIsParticipating(value)
              localStorage.setItem('userParticipatingInRanking', value ? 'true' : 'false')
            }}
          />
        </div>
      </main>

      {showParticipationModal && (
        <ParticipationModal
          onConfirm={handleConfirmParticipation}
          onCancel={handleDenyParticipation}
        />
      )}
    </div>
  )
}
