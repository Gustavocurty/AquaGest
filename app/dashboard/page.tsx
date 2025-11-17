"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  getTodayConsumption, 
  getWeeklyConsumption 
} from "@/lib/mockData/consumption";
import { MOCK_GOALS } from "@/lib/mockData/goals";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts";
import { useState } from "react";

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<"day" | "week" | "month">("day");
  const todayConsumption = getTodayConsumption();
  const weeklyData = getWeeklyConsumption();
  const activeGoal = MOCK_GOALS.find(g => g.status === "Ativa");

  const goalProgress = activeGoal ? (todayConsumption.amount / activeGoal.targetAmount) * 100 : 0;
  const isOverGoal = todayConsumption.amount > (activeGoal?.targetAmount || 150);
  
  const dayLabels = ['S', 'T', 'Q', 'Q', 'S', 'S', 'H'];
  const chartData = weeklyData.slice(-7).map((record, index) => ({
    day: dayLabels[index],
    value: record.amount
  }));

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Meu Consumo</h1>
      </div>

      {/* Period Tabs */}
      <div className="flex gap-6 border-b border-gray-200">
        <button
          onClick={() => setSelectedPeriod("day")}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            selectedPeriod === "day"
              ? "text-cyan-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Diário
          {selectedPeriod === "day" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600" />
          )}
        </button>
        <button
          onClick={() => setSelectedPeriod("week")}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            selectedPeriod === "week"
              ? "text-cyan-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Semanal
          {selectedPeriod === "week" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600" />
          )}
        </button>
        <button
          onClick={() => setSelectedPeriod("month")}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            selectedPeriod === "month"
              ? "text-cyan-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Mensal
          {selectedPeriod === "month" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600" />
          )}
        </button>
      </div>

      {/* Consumption Card */}
      <Card className="p-6">
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">Consumo de Água</p>
          <div className="flex items-baseline gap-3">
            <p className="text-5xl font-bold text-gray-900">{todayConsumption.amount}L</p>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              Hoje
              <span className="text-green-600">5%</span>
              vs ontem
            </span>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="h-40 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                style={{ fontSize: '12px', fill: '#9ca3af' }}
              />
              <YAxis hide />
              <Bar 
                dataKey="value" 
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
                maxBarSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Goal Progress */}
        {activeGoal && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-900">Meta Diária</p>
              <p className="text-sm font-bold text-gray-900">
                {todayConsumption.amount}L/{activeGoal.targetAmount}L
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all"
                style={{ width: `${Math.min(goalProgress, 100)}%` }}
              />
            </div>
          </div>
        )}
      </Card>

      {/* Alerts */}
      {isOverGoal && (
        <Card className="p-4 bg-orange-50 border-orange-200">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-orange-900">Alerta: Consumo elevado!</p>
              <p className="text-xs text-orange-700 mt-1">
                Seu consumo hoje está 20% acima da meta estabelecida.
              </p>
            </div>
          </div>
        </Card>
      )}

      <Card className="p-4 bg-red-50 border-red-200">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-red-900">Possível Vazamento Detectado</p>
            <p className="text-xs text-red-700 mt-1">
              Consumo anormal detectado às 3h da madrugada.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
