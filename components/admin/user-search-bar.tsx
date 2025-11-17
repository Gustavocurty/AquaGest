import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function UserSearchBar({ value, onChange }) {
  return (
    <div className="mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
        <Input
          placeholder="Buscar por nome, CPF, e-mail..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-12 py-3 text-base"
        />
      </div>
    </div>
  )
}
