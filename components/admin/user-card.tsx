import { Eye, Edit2, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function UserCard({ user, onView, onEdit, onDelete }) {
  const statusColor = user.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'

  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* User Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-bold text-foreground">{user.name}</h3>
            <Badge className={statusColor}>
              <span className="w-2 h-2 rounded-full mr-2 inline-block bg-current"></span>
              {user.status}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">CPF: {user.cpf}</p>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onView(user)}
            className="flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            Ver
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(user)}
            className="flex items-center gap-2"
          >
            <Edit2 className="w-4 h-4" />
            Editar
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(user)}
            className="flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Excluir
          </Button>
        </div>
      </div>
    </Card>
  )
}
