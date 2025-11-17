'use client'

import { ChevronDown } from 'lucide-react'

export default function OccurrenceFilters({
  selectedStatus,
  selectedType,
  onStatusChange,
  onTypeChange
}) {
  const statuses = ['Todos', 'Novo', 'Em Andamento', 'Resolvido']
  const types = ['Todos', 'Vazamento', 'Falta de Água', 'Pressão Baixa']

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {/* Status Filter */}
      <div className="relative inline-block">
        <select
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value)}
          className="appearance-none px-4 py-2 pr-8 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {statuses.map(status => (
            <option key={status} value={status}>
              {status === 'Todos' ? '▼ Status' : `▼ Status: ${status}`}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-700" />
      </div>

      {/* Type Filter */}
      <div className="relative inline-block">
        <select
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="appearance-none px-4 py-2 pr-8 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {types.map(type => (
            <option key={type} value={type}>
              {type === 'Todos' ? '▼ Tipo de Problema' : `▼ ${type}`}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-700" />
      </div>
    </div>
  )
}
