import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Award, Badge } from 'lucide-react'

export default function UserPositionCard() {
  // Mock data - usuário está em 15º lugar
  const userPosition = 15
  const savedPercentage = 5 // percentual de economia
  const badge = 'Insígnia de Economia'

  return (
    <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Sua posição</p>
          <p className="text-3xl font-bold text-foreground">{userPosition}º Lugar</p>
        </div>

        <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
          <Award className="w-5 h-5 text-accent" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Distintivo</p>
            <p className="text-sm font-semibold text-foreground">{badge}</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          Baseado na sua economia de {savedPercentage}% no último mês.
        </p>

        {/* Goal to next position */}
        <div className="pt-4 border-t border-primary/10">
          <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
            <Badge className="w-5 h-5 text-accent flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">Faltam 150 pontos para o ingresso!</p>
              <p className="text-xs text-accent font-semibold">Economize 10% de água este mês para conseguir!</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
