'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Lock } from 'lucide-react'
import Image from 'next/image'

const allRewards = [
  {
    id: 1,
    name: 'Café da Esquina',
    category: 'Serviços',
    description: '1 Café Espresso',
    points: 250,
    icon: '☕',
    image: '/steaming-coffee-cup.png',
  },
  {
    id: 2,
    name: 'Conta de Água',
    category: 'Descontos',
    description: 'R$10 de Crédito',
    points: 800,
    icon: '💧',
    image: '/water-bill.jpg',
  },
  {
    id: 3,
    name: 'Spa Relaxar',
    category: 'Serviços',
    description: '10% em massagens',
    points: 600,
    icon: '🧖',
    image: '/relaxing-spa-scene.png',
  },
  {
    id: 4,
    name: 'Mercado Orgânico',
    category: 'Produtos',
    description: 'R$15 em compras',
    points: 1200,
    icon: '🥬',
    image: '/organic-market.jpg',
  },
  {
    id: 5,
    name: 'Jardim Botânico',
    category: 'Descontos',
    description: '1 Ingresso Grátis',
    points: 1000,
    icon: '🌿',
    image: '/botanical-garden.jpg',
  },
  {
    id: 6,
    name: 'Loja X',
    category: 'Descontos',
    description: 'Desconto de 20%',
    points: 1500,
    icon: '🛍️',
    image: '/store-discount.jpg',
  },
]

export default function RewardsGrid({ activeTab, onSelectReward }) {
  const filteredRewards = activeTab === 'Todos' 
    ? allRewards 
    : allRewards.filter(r => r.category === activeTab)

  const currentPoints = 850

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredRewards.map((reward) => {
        const isAvailable = currentPoints >= reward.points
        
        return (
          <Card
            key={reward.id}
            className={`overflow-hidden transition-all hover:shadow-md ${
              isAvailable ? 'cursor-pointer hover:border-primary' : 'opacity-75'
            }`}
            onClick={() => isAvailable && onSelectReward(reward)}
          >
            <div className="relative h-40 bg-muted overflow-hidden">
              <img
                src={reward.image || "/placeholder.svg"}
                alt={reward.name}
                className="w-full h-full object-cover"
              />
              {!isAvailable && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center">
                    <Lock className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Faltam {reward.points - currentPoints} pontos</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-foreground text-lg">{reward.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{reward.description}</p>
              
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-primary">{reward.points} pontos</span>
                {isAvailable && (
                  <Button 
                    size="sm" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Resgatar
                  </Button>
                )}
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
