'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X, Check } from 'lucide-react'

export default function RedeemModal({ reward, onClose }) {
  const [step, setStep] = useState('confirm') // confirm or success
  const currentPoints = 850

  const handleConfirm = () => {
    setStep('success')
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md shadow-xl">
        {step === 'confirm' ? (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">Confirmar Resgate</h3>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <img
                src={reward.image || "/placeholder.svg"}
                alt={reward.name}
                className="w-full h-40 object-cover rounded-lg"
              />

              <div>
                <h4 className="text-xl font-bold text-foreground">{reward.name}</h4>
                <p className="text-muted-foreground mt-1">{reward.description}</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-muted-foreground">Pontos a usar:</span>
                  <span className="text-2xl font-bold text-primary">{reward.points}</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Saldo após resgate:</span>
                  <span className="font-semibold text-foreground">{currentPoints - reward.points}</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Você receberá um código para resgate no seu email em alguns minutos.
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleConfirm}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Confirmar Resgate
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Resgate Confirmado!</h3>
            <p className="text-muted-foreground">
              Seu código de resgate foi enviado para seu email.
            </p>
          </div>
        )}
      </Card>
    </div>
  )
}
