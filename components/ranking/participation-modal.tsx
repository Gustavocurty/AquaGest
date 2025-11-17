"use client";

import { Button } from "@/components/ui/button";

interface ParticipationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ParticipationModal({
  onConfirm,
  onCancel,
}: ParticipationModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 space-y-6 shadow-lg">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-foreground">
            Participe do Ranking Sustentável
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Gostaria de compartilhar seu consumo de forma anônima e competir de
            forma saudável com seus amigos e vizinhança?
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Button
            onClick={onConfirm}
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-11"
          >
            Sim, participar
          </Button>
          <Button
            onClick={onCancel}
            variant="outline"
            className="w-full h-11 font-semibold"
          >
            Agora não
          </Button>
        </div>
      </div>
    </div>
  );
}
