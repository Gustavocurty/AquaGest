"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { MOCK_CONSUMPTION_DATA } from "@/lib/mockData/consumption";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function ConsumptionPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "week" | "month" | "year"
  >("month");

  const filteredData = MOCK_CONSUMPTION_DATA.slice(-30);
  const totalConsumption = 4500; // Mock monthly total
  const percentageChange = 12; // Mock comparison

  // Group data by week for the chart
  const weeklyData = [
    { name: "Sem 1", value: 1000 },
    { name: "Sem 2", value: 1200 },
    { name: "Sem 3", value: 1150 },
    { name: "Sem 4", value: 1150 },
  ];

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-900">
          Histórico de Consumo
        </h1>
      </div>

      {/* Period Tabs */}
      <div className="flex gap-6 border-b border-gray-200">
        <button
          onClick={() => setSelectedPeriod("week")}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            selectedPeriod === "week"
              ? "text-cyan-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Semana
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
          Mês
          {selectedPeriod === "month" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600" />
          )}
        </button>
        <button
          onClick={() => setSelectedPeriod("year")}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            selectedPeriod === "year"
              ? "text-cyan-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Ano
          {selectedPeriod === "year" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600" />
          )}
        </button>
      </div>

      {/* Total Consumption */}
      <Card className="p-6">
        <p className="text-sm text-gray-600 mb-2">Consumo no Último Mês</p>
        <div className="flex items-baseline gap-3 mb-1">
          <p className="text-4xl font-bold text-gray-900">
            {totalConsumption}L
          </p>
        </div>
        <p className="text-sm text-green-600 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          +{percentageChange}% em comparação com o mês anterior
        </p>

        {/* Line Chart */}
        <div className="h-48 mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                style={{ fontSize: "12px", fill: "#9ca3af" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                style={{ fontSize: "12px", fill: "#9ca3af" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: "#3b82f6", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Detailed Consumption */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Consumo Detalhado
        </h3>

        <div className="space-y-2">
          {filteredData.slice(0, 5).map((record) => (
            <Card key={record.id} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">
                    {new Date(record.date).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Média diária</p>
                </div>
                <p className="text-xl font-bold text-gray-900">
                  {record.amount} Litros
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
