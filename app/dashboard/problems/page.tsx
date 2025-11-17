"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MOCK_PROBLEMS, Problem } from "@/lib/mockData/problems";
import { storage } from "@/lib/storage";

export default function ProblemsPage() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showRequestsView, setShowRequestsView] = useState(false);
  const [newProblem, setNewProblem] = useState({
    title: "",
    description: "",
    type: "Vazamento",
    location: "",
    image: null as string | null
  });

  useEffect(() => {
    const savedProblems = storage.getProblems();
    setProblems(savedProblems || MOCK_PROBLEMS);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProblem({ ...newProblem, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateProblem = () => {
    if (!newProblem.title || !newProblem.description) return;

    const problem: Problem = {
      id: `prob-${Date.now()}`,
      title: newProblem.title,
      description: newProblem.description,
      type: newProblem.type,
      status: "Pendente",
      date: new Date().toISOString(),
      userId: "user-1",
      userName: "Gustavo Curty",
      location: newProblem.location,
      image: newProblem.image || undefined
    };

    const updatedProblems = [problem, ...problems];
    setProblems(updatedProblems);
    storage.setProblems(updatedProblems);
    
    setNewProblem({ title: "", description: "", type: "Vazamento", location: "", image: null });
    setShowReportModal(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pendente":
        return { bg: "bg-blue-100", text: "text-blue-800", dot: "bg-blue-500" };
      case "Em Análise":
        return { bg: "bg-orange-100", text: "text-orange-800", dot: "bg-orange-500" };
      case "Resolvido":
        return { bg: "bg-green-100", text: "text-green-800", dot: "bg-green-500" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-800", dot: "bg-gray-500" };
    }
  };

  if (showRequestsView) {
    // My Requests View (PDF Interface 16)
    return (
      <div className="space-y-6 pb-6">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowRequestsView(false)}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Minhas Solicitações</h1>
        </div>

        <div className="space-y-3">
          {problems.map((problem) => {
            const statusStyle = getStatusColor(problem.status);
            const statusMap: Record<string, string> = {
              "Pendente": "Aberto",
              "Em Análise": "Em Análise",
              "Resolvido": "Resolvido"
            };

            return (
              <Card key={problem.id} className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-2 h-2 rounded-full mt-1.5 ${statusStyle.dot}`} />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <p className={`text-xs font-medium ${statusStyle.text}`}>
                        {statusMap[problem.status] || problem.status}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(problem.date).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{problem.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{problem.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  if (showReportModal) {
    // Report Problem Form (PDF Interface 11)
    return (
      <div className="space-y-6 pb-6 max-w-2xl">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowReportModal(false)}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Relatar um Problema</h1>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Qual o tipo de problema?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {["Vazamento", "Falta de Água", "Qualidade da Água", "Outro"].map((type) => (
                <button
                  key={type}
                  onClick={() => setNewProblem({ ...newProblem, type })}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    newProblem.type === type
                      ? "bg-cyan-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Descreva o que está acontecendo
            </label>
            <textarea
              value={newProblem.description}
              onChange={(e) => setNewProblem({ ...newProblem, description: e.target.value })}
              placeholder="Ex: Vazamento na calçada em frente ao número 123, jorrando água limpa."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-50"
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Onde fica o problema?
            </label>
            <Input
              value={newProblem.location}
              onChange={(e) => setNewProblem({ ...newProblem, location: e.target.value })}
              placeholder="Digite o endereço"
              className="h-12 bg-gray-50 border-gray-300"
            />
            <button className="flex items-center gap-2 text-sm text-cyan-600 mt-2 font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Usar minha localização atual
            </button>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Adicionar foto (opcional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-cyan-500 transition-colors cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                {newProblem.image ? (
                  <img src={newProblem.image || "/placeholder.svg"} alt="Preview" className="max-h-48 mx-auto rounded-lg" />
                ) : (
                  <div>
                    <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-gray-600">Clique para adicionar foto</p>
                  </div>
                )}
              </label>
            </div>
          </div>

          <Button
            onClick={handleCreateProblem}
            className="w-full h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-xl"
            disabled={!newProblem.description}
          >
            Enviar Relato
          </Button>
        </div>
      </div>
    );
  }

  // Main Problems List View
  return (
    <div className="space-y-6 pb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Problemas</h1>
        <div className="flex gap-2">
          <Button
            onClick={() => setShowRequestsView(true)}
            variant="outline"
            className="h-10"
          >
            Minhas Solicitações
          </Button>
          <Button
            onClick={() => setShowReportModal(true)}
            className="h-10 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Reportar
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {problems.map((problem) => {
          const statusStyle = getStatusColor(problem.status);
          return (
            <Card key={problem.id} className="p-5 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                {problem.image && (
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={problem.image || "/placeholder.svg"} 
                      alt={problem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{problem.title}</h3>
                      <p className="text-sm text-gray-500">
                        Por {problem.userName} • {new Date(problem.date).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle.bg} ${statusStyle.text}`}>
                      {problem.status}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-3">{problem.description}</p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                      {problem.type}
                    </span>
                    {problem.location && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {problem.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
