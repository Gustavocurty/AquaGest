'use client'

import { useState, useMemo } from 'react'
import { ChevronLeft, Bell, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import OccurrenceFilters from '@/components/company/occurrence-filters'
import OccurrenceList from '@/components/company/occurrence-list'

export default function OccurrencesPage() {
  const [selectedStatus, setSelectedStatus] = useState('Todos')
  const [selectedType, setSelectedType] = useState('Todos')

  // Mock data for occurrences
  const mockOccurrences = [
    {
      id: 'OS-12345',
      type: 'Vazamento',
      address: 'Av. Paulista, 1578 - São Paulo, SP',
      status: 'Novo',
      date: '24/01/2025',
      time: '08:30',
      priority: 'high',
      description: 'Vazamento na rede principal'
    },
    {
      id: 'OS-12342',
      type: 'Falta de Água',
      address: 'Rua da Consolação, 930 - São Paulo, SP',
      status: 'Em Andamento',
      date: '23/01/2025',
      time: '14:15',
      priority: 'medium',
      description: 'Falta de água no bairro'
    },
    {
      id: 'OS-12339',
      type: 'Pressão Baixa',
      address: 'Rua do Ouvidor, 95 - Rio de Janeiro, RJ',
      status: 'Resolvido',
      date: '22/01/2025',
      time: '10:00',
      priority: 'low',
      description: 'Pressão baixa na rede'
    },
    {
      id: 'OS-12341',
      type: 'Vazamento',
      address: 'Rua Augusta, 2540 - São Paulo, SP',
      status: 'Novo',
      date: '24/01/2025',
      time: '09:45',
      priority: 'high',
      description: 'Vazamento em tubo de distribuição'
    },
    {
      id: 'OS-12340',
      type: 'Falta de Água',
      address: 'Av. Ipiranga, 200 - São Paulo, SP',
      status: 'Em Andamento',
      date: '23/01/2025',
      time: '16:20',
      priority: 'medium',
      description: 'Interrupção no fornecimento'
    }
  ]

  // Filter occurrences based on selected filters
  const filteredOccurrences = useMemo(() => {
    return mockOccurrences.filter(occ => {
      const statusMatch = selectedStatus === 'Todos' || occ.status === selectedStatus
      const typeMatch = selectedType === 'Todos' || occ.type === selectedType
      return statusMatch && typeMatch
    })
  }, [selectedStatus, selectedType])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard">
                <ChevronLeft className="w-5 h-5" />
              </Link>
            </Button>
            <h1 className="text-xl font-bold text-gray-900">Monitor de Ocorrências</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Filters */}
        <OccurrenceFilters
          selectedStatus={selectedStatus}
          selectedType={selectedType}
          onStatusChange={setSelectedStatus}
          onTypeChange={setSelectedType}
        />

        <div className="mt-6">
          <OccurrenceList occurrences={filteredOccurrences} />
        </div>
      </main>
    </div>
  )
}
