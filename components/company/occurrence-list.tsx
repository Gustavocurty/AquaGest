"use client";

import { Eye, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OccurrenceList({ occurrences }) {
  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "Novo":
        return "bg-red-100 text-red-800";
      case "Em Andamento":
        return "bg-yellow-100 text-yellow-800";
      case "Resolvido":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusBadgeIcon = (status) => {
    switch (status) {
      case "Novo":
        return "●";
      case "Em Andamento":
        return "◆";
      case "Resolvido":
        return "✓";
      default:
        return "○";
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-gray-900">Ocorrências</h2>

      <div className="space-y-3">
        {occurrences.length === 0 ? (
          <div className="text-center py-8">
            <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 text-sm">
              Nenhuma ocorrência encontrada
            </p>
          </div>
        ) : (
          occurrences.map((occ) => (
            <div
              key={occ.id}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
            >
              {/* OS Code and Status */}
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-900">#{occ.id}</h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(
                    occ.status
                  )}`}
                >
                  {getStatusBadgeIcon(occ.status)} {occ.status}
                </span>
              </div>

              {/* Type */}
              <p className="text-sm font-medium text-gray-700 mb-1">
                {occ.type}
              </p>

              {/* Address */}
              <p className="text-sm text-gray-600 mb-3">{occ.address}</p>

              {/* Date and Time */}
              <p className="text-xs text-gray-500 mb-3">
                {occ.date} · {occ.time}
              </p>

              <Button
                size="sm"
                variant="ghost"
                className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                asChild
              >
                <Link href={`/dashboard/company/occurrences/teste`}>
                  <Eye className="w-4 h-4 mr-2" />
                  Ver Detalhes
                </Link>
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
