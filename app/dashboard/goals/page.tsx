"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MOCK_GOALS, Goal } from "@/lib/mockData/goals";
import { storage } from "@/lib/storage";

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<"daily" | "weekly" | "monthly">("daily");
  const [dailyGoal, setDailyGoal] = useState(150);

  useEffect(() => {
    const savedGoals = storage.getGoals();
    setGoals(savedGoals || MOCK_GOALS);
  }, []);

  const activeGoals = {
    daily: goals.find(g => g.title.includes("Diária")),
    weekly: goals.find(g => g.title.includes("Semanal")),
  };

  const currentDailyProgress = 75; // Mock current consumption
  const currentWeeklyProgress = 350; // Mock current consumption

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Definir Minhas Metas</h1>
      </div>

      {/* Period Tabs */}
      <div className="flex gap-6 border-b border-gray-200">
        <button
          onClick={() => setSelectedPeriod("daily")}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            selectedPeriod === "daily"
              ? "text-cyan-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Diária
          {selectedPeriod === "daily" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600" />
          )}
        </button>
        <button
          onClick={() => setSelectedPeriod("weekly")}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            selectedPeriod === "weekly"
              ? "text-cyan-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Semanal
          {selectedPeriod === "weekly" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600" />
          )}
        </button>
        <button
          onClick={() => setSelectedPeriod("monthly")}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            selectedPeriod === "monthly"
              ? "text-cyan-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Mensal
          {selectedPeriod === "monthly" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600" />
          )}
        </button>
      </div>

      {/* Goal Setting Card */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Meta Diária</h3>
        
        {/* Goal Value Selector */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <button
            onClick={() => setDailyGoal(Math.max(50, dailyGoal - 10))}
            className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          
          <div className="text-center">
            <div className="text-6xl font-bold text-gray-900">{dailyGoal}</div>
            <div className="text-sm text-gray-500 mt-1">em litros</div>
          </div>

          <button
            onClick={() => setDailyGoal(dailyGoal + 10)}
            className="w-12 h-12 flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </Card>

      {/* Active Goals */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Metas Ativas</h3>
        
        <div className="space-y-3">
          {/* Daily Goal */}
          <Card className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Meta Diária</p>
                  <p className="text-sm text-gray-500">{currentDailyProgress}L consumidos hoje</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">{dailyGoal} Litros</span>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all"
                style={{ width: `${(currentDailyProgress / dailyGoal) * 100}%` }}
              />
            </div>
          </Card>

          {/* Weekly Goal */}
          <Card className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Meta Semanal</p>
                  <p className="text-sm text-gray-500">{currentWeeklyProgress}L consumidos esta semana</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">1050 Litros</span>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all"
                style={{ width: `${(currentWeeklyProgress / 1050) * 100}%` }}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
