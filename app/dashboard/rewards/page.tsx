"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Reward {
  id: string;
  title: string;
  points: number;
  category: "service" | "product" | "discount";
  image: string;
}

export default function RewardsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "service" | "product" | "discount">("all");
  const userPoints = 1250;

  const rewards: Reward[] = [
    { id: "1", title: "Serviço de Jardinagem", points: 500, category: "service", image: "/vibrant-houseplant.png" },
    { id: "2", title: "Vale Compras", points: 1000, category: "product", image: "/diverse-people-shopping.png" },
    { id: "3", title: "10% de Desconto", points: 300, category: "discount", image: "/discount-sign.png" },
    { id: "4", title: "Manutenção Hidráulica", points: 800, category: "service", image: "/plumbing-tools.png" },
  ];

  const filteredRewards = activeFilter === "all" 
    ? rewards 
    : rewards.filter(r => r.category === activeFilter);

  const categoryLabels = {
    all: "Todos",
    service: "Serviços",
    product: "Produtos",
    discount: "Descontos"
  };

  return (
    <div className="space-y-6 pb-6">
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Recompensas</h1>
      </div>

      {/* Points Balance */}
      <Card className="p-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm opacity-90 mb-1">Seu Saldo de Pontos</p>
            <p className="text-4xl font-bold">{userPoints}</p>
            <p className="text-sm opacity-90 mt-2">Continue economizando para ganhar mais!</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </Card>

      {/* Filter Tabs */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Troque seus pontos</h3>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(["all", "service", "product", "discount"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {categoryLabels[filter]}
            </button>
          ))}
        </div>
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRewards.map((reward) => (
          <Card key={reward.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gray-100">
              <img 
                src={reward.image || "/placeholder.svg"} 
                alt={reward.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{reward.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-cyan-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold">{reward.points}</span>
                </div>
                <Button 
                  size="sm" 
                  disabled={userPoints < reward.points}
                  className="h-8"
                >
                  {userPoints >= reward.points ? "Resgatar" : "Insuficiente"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
