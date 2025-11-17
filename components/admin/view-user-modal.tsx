import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function ViewUserModal({ user, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-lg font-bold">Detalhes do Usuário</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Nome</p>
            <p className="font-semibold text-foreground">{user.name}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">CPF</p>
            <p className="font-semibold text-foreground">{user.cpf}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">E-mail</p>
            <p className="font-semibold text-foreground">{user.email}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <p className={`font-semibold ${user.status === 'Ativo' ? 'text-green-600' : 'text-gray-600'}`}>
              {user.status}
            </p>
          </div>
        </div>
        <div className="p-6 border-t border-border flex justify-end">
          <Button onClick={onClose}>Fechar</Button>
        </div>
      </Card>
    </div>
  )
}
