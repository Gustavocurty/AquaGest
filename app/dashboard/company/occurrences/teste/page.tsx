"use client";

import { useState } from "react";
import {
  ChevronLeft,
  
  CheckCircle2,
  Clock,
  AlertTriangle,
  CircleX,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MaintenanceDetailsPage() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Isolar a área afetada",
      status: "CONCLUÍDA",
      assignee: "João Silva",
      priority: "Alta",
    },
    {
      id: 2,
      name: "Escavação o acesso à tubulação",
      status: "EM ANDAMENTO",
      assignee: "Carlos Souza, Ana Pereira",
      priority: "Alta",
    },
    {
      id: 3,
      name: "Substituição do trecho danificado",
      status: "PENDENTE",
      assignee: "Roberto Lima",
      priority: "Normal",
    },
    {
      id: 4,
      name: "Fechamento e testes de pressão",
      status: "A FAZER",
      assignee: "Carlos Souza",
      priority: "Normal",
    },
  ]);

  const [formData, setFormData] = useState({
    description: "",
    deadline: "",
    priority: "Normal",
    assignees: [],
  });

  const employees = [
    {
      id: 1,
      name: "Maria Oliveira",
      team: "Equipe Alfa",
      avatar: "/woman-avatar-1.png",
      selected: true,
    },
    {
      id: 2,
      name: "João Silva",
      team: "Equipe Alfa",
      avatar: "/man-avatar-2.png",
    },
    {
      id: 3,
      name: "Carlos Pereira",
      team: "Equipe Beta",
      avatar: "/man-avatar-3.png",
    },
    {
      id: 4,
      name: "Ana Costa",
      team: "Equipe Gama",
      avatar: "/woman-avatar-3.png",
      selected: true,
    },
    {
      id: 5,
      name: "Pedro Martins",
      team: "Equipe Beta",
      avatar: "/man-avatar-4.jpg",
    },
  ];

  const handleAssigneeToggle = (id) => {
    setFormData((prev) => ({
      ...prev,
      assignees: prev.assignees.includes(id)
        ? prev.assignees.filter((a) => a !== id)
        : [...prev.assignees, id],
    }));
  };

  const handleAssignTask = () => {
    if (formData.description.trim() && formData.assignees.length > 0) {
      const newTask = {
        id: tasks.length + 1,
        name: formData.description,
        status: "A FAZER",
        assignee: employees
          .filter((e) => formData.assignees.includes(e.id))
          .map((e) => e.name)
          .join(", "),
        priority: formData.priority,
      };
      setTasks([...tasks, newTask]);
      setFormData({
        description: "",
        deadline: "",
        priority: "Normal",
        assignees: [],
      });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "CONCLUÍDA":
        return "bg-green-100 text-green-800";
      case "EM ANDAMENTO":
        return "bg-yellow-100 text-yellow-800";
      case "PENDENTE":
        return "bg-orange-100 text-orange-800";
      case "A FAZER":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "CONCLUÍDA":
        return <CheckCircle2 className="w-4 h-4" />;
      case "EM ANDAMENTO":
        return <Clock className="w-4 h-4" />;
      case "PENDENTE":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <CircleX className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link href="../">
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold text-foreground">
            Detalhes da Manutenção
          </h1>
        </div>
      </header>

      {/* Main Content - Grid Layout */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details (2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Problem Header */}
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Vazamento na Rede Principal
                  </h2>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    EM ANDAMENTO
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Urgência</p>
                  <p className="text-lg font-bold text-red-600">
                    Urgência Alta
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Reparo de um vazamento de grandes porte identificado na
                tubulação principal que abastece o Setor Dul da cidade.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="font-medium text-foreground">
                    Rua das Águas, 123
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Data de Início
                  </p>
                  <p className="font-medium text-foreground">26/10/2024</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Prazo</p>
                  <p className="font-medium text-foreground">30/10/2024</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-medium text-foreground">Em Andamento</p>
                </div>
              </div>
            </Card>

            {/* Allocated Employees */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Funcionários Alocados
              </h3>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-sm font-bold text-primary">
                        +{i}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  +2 colaboradores
                </span>
              </div>
            </Card>

            {/* Task List */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Lista de Tarefas
              </h3>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">{getStatusIcon(task.status)}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">
                          {task.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Funcionários: {task.assignee}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${getStatusColor(
                          task.status
                        )}`}
                      >
                        {task.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Assign Task Form */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-6">
                Atribuir Tarefa
              </h3>

              {/* Task Description */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Descrição da Tarefa
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Ex: Verificação de vazamento na Rua Principal, 123"
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                />
              </div>

              {/* Deadline */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Prazo
                </label>
                <input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) =>
                    setFormData({ ...formData, deadline: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Priority */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Prioridade
                </label>
                <select
                  value={formData.priority}
                  onChange={(e) =>
                    setFormData({ ...formData, priority: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Baixa">Baixa</option>
                  <option value="Normal">Normal</option>
                  <option value="Alta">Alta</option>
                </select>
              </div>

              {/* Assignees */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Atribuir a Funcionário(s)
                </label>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {employees.map((emp) => (
                    <button
                      key={emp.id}
                      onClick={() => handleAssigneeToggle(emp.id)}
                      className={`w-full px-3 py-2 rounded-lg border-2 transition-colors flex items-center gap-3 ${
                        formData.assignees.includes(emp.id)
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-border/50"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0" />
                      <div className="flex-1 text-left">
                        <p className="text-sm font-medium text-foreground">
                          {emp.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {emp.team}
                        </p>
                      </div>
                      <div
                        className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                          formData.assignees.includes(emp.id)
                            ? "border-primary bg-primary"
                            : "border-border"
                        }`}
                      >
                        {formData.assignees.includes(emp.id) && (
                          <span className="text-white text-xs">✓</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleAssignTask}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-lg"
              >
                Atribuir Tarefa
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
