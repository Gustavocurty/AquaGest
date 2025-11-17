"use client";

import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingDown } from "lucide-react";

const mockData = {
  currentPoints: 850,
  economyPercentage: 5,
  pointsNeededForNextReward: 150,
  nextRewardName: "Ingresso Jardim Botânico",
};

export default function PointsBalance() {
  const canRedeem = mockData.currentPoints >= 200;

  return (
    <div className="space-y-4">
      {/* Points Balance Card */}
      <Card className="bg-linear-to-br from-primary to-primary/80 text-primary-foreground p-6 shadow-lg">
        <div className="mb-4">
          <p className="text-sm opacity-90">Seu Saldo de Pontos</p>
          <h2 className="text-5xl font-bold mt-2">{mockData.currentPoints}</h2>
        </div>
        <p className="text-sm opacity-80 flex items-center gap-1">
          <TrendingDown className="w-4 h-4" />
          Baseado na sua economia de {mockData.economyPercentage}% no último mês
        </p>
      </Card>

      {/* Alert for Next Milestone */}
      <Card className="bg-accent/10 border border-accent/30 p-4">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground">
              Faltam {mockData.pointsNeededForNextReward} pontos para o{" "}
              {mockData.nextRewardName}!
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Economize 10% de água este mês para conseguir!
            </p>
          </div>
        </div>
      </Card>

      {/* Info Cards */}
      <div className="space-y-3">
        <Card className="p-4 bg-muted/50">
          <p className="text-sm font-medium text-foreground">
            Como ganho pontos?
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Você ganha pontos automaticamente conforme reduz seu consumo de água
            em relação ao mês anterior.
          </p>
        </Card>

        <Card className="p-4 bg-muted/50">
          <p className="text-sm font-medium text-foreground">
            Quanto vale cada ponto?
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            A taxa de conversão é 1% de economia = 1 ponto. Exemplo: 5% economia
            = 5 pontos.
          </p>
        </Card>
      </div>
    </div>
  );
}
