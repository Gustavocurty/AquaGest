'use client'

import { Card } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'

const mockHistory = [
  {
    id: 1,
    name: 'Desconto de 20% na Loja X',
    date: '15/05/2024',
    points: -500,
  },
  {
    id: 2,
    name: '1 Café Espresso',
    date: '02/04/2024',
    points: -250,
  },
]

export default function RedemptionHistory() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-4">Histórico de Resgates</h2>
      
      <div className="space-y-3">
        {mockHistory.map((item) => (
          <Card key={item.id} className="p-4 hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  🎁
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">Resgatado em {item.date}</p>
                </div>
              </div>
              <span className="text-lg font-bold text-destructive">{item.points} pontos</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
