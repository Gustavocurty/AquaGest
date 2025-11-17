import { AlertCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function DeleteUserModal({ user, onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md border-destructive">
        <div className="p-6 border-b border-destructive flex items-center justify-between bg-red-50">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-destructive" />
            <h2 className="text-lg font-bold text-destructive">Ação Crítica</h2>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-foreground">
            Tem certeza que deseja excluir o usuário <strong>{user.name}</strong>?
          </p>
          <p className="text-sm text-muted-foreground">
            Esta ação é irreversível e todos os dados associados ao usuário serão permanentemente removidos.
          </p>
        </div>
        <div className="p-6 border-t border-border flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>Cancelar</Button>
          <Button variant="destructive" onClick={onConfirm}>Excluir</Button>
        </div>
      </Card>
    </div>
  )
}
