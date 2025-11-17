'use client'

import { Clock } from 'lucide-react'

interface ParticipationToggleProps {
  isParticipating: boolean
  onToggle: (value: boolean) => void
}

export default function ParticipationToggle({
  isParticipating,
  onToggle,
}: ParticipationToggleProps) {
  return (
    <div className="space-y-3 py-2">
      {/* Label */}
      <p className="text-sm font-semibold text-foreground">Participar do Ranking</p>

      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">Seus dados são privados por padrão</p>
        <button
          onClick={() => onToggle(!isParticipating)}
          className={`relative w-14 h-8 rounded-full transition-all ${
            isParticipating ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        >
          <div
            className={`absolute w-6 h-6 rounded-full bg-white top-1 transition-all shadow-md ${
              isParticipating ? 'translate-x-7' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* Info */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Clock className="w-4 h-4" />
        <span>Atualizado semanalmente</span>
      </div>
    </div>
  )
}
