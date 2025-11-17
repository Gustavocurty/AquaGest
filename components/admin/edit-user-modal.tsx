'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function EditUserModal({ user, onClose, onSave }) {
  const [formData, setFormData] = useState(user)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-lg font-bold">Editar Usuário</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">Nome</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">CPF</label>
            <Input
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">E-mail</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
            >
              <option>Ativo</option>
              <option>Inativo</option>
            </select>
          </div>
        </form>
        <div className="p-6 border-t border-border flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>Cancelar</Button>
          <Button onClick={handleSubmit}>Salvar</Button>
        </div>
      </Card>
    </div>
  )
}
