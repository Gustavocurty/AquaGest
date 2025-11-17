import { ChevronLeft, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function RewardsHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">Recompensas e Pontos</h1>
        </div>
        <Button variant="ghost" size="icon">
          <RefreshCw className="w-5 h-5" />
        </Button>
      </div>
    </header>
  )
}
