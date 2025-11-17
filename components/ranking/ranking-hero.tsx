"use client";

import { Flame, TrendingDown, Medal, Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function RankingHero() {
  const userPosition = 15;
  const savedPercentage = 5;
  const pointsToNext = 150;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-blue-100 via-blue-50 to-green-50 border border-blue-200 p-6 space-y-4">
        {/* Avatar in top right */}
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-xs text-gray-600 font-medium">Sua posição</p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-gray-900">
                {userPosition}º
              </span>
              <span className="text-xl font-semibold text-gray-900">Lugar</span>
            </div>
            <div className="flex items-center gap-1 text-sm mt-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-medium text-yellow-600">
                Insígnia de Economia
              </span>
            </div>
          </div>

          <Avatar className="w-20 h-20 border-4 border-white shadow-md">
            <AvatarImage src="/woman-avatar-1.png" alt="User" />
            <AvatarFallback className="bg-blue-400 text-white text-sm font-bold">
              AC
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-3 space-y-1">
            <p className="text-xs text-gray-600">Economia</p>
            <p className="text-2xl font-bold text-gray-900">
              {savedPercentage}%
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 space-y-1">
            <p className="text-xs text-gray-600">Distintivo</p>
            <p className="text-sm font-bold text-gray-900">Economia</p>
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-r from-green-100 to-green-50 border border-green-300 p-4 space-y-1">
          <div className="flex items-start gap-2">
            <Flame className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-gray-900">
                Faltam {pointsToNext} pontos para o próximo nível!
              </p>
              <p className="text-xs text-green-700 mt-1">
                Economize 10% de água este mês para conseguir
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
