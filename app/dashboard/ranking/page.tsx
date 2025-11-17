"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface RankingUser {
  id: string;
  name: string;
  savings: number;
  position: number;
  avatar?: string;
}

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState<"friends" | "neighborhood">("friends");

  const friendsRanking: RankingUser[] = [
    { id: "1", name: "Ana Clara", savings: 25, position: 1 },
    { id: "2", name: "Bruno Silva", savings: 22, position: 2 },
    { id: "3", name: "Carla Souza", savings: 20, position: 3 },
    { id: "4", name: "Daniel Martins", savings: 19, position: 4 },
  ];

  const userPosition = 15;
  const userSavings = 15;

  const getMedalColor = (position: number) => {
    switch (position) {
      case 1:
        return "text-yellow-500";
      case 2:
        return "text-gray-400";
      case 3:
        return "text-orange-600";
      default:
        return "text-gray-400";
    }
  };

  const getMedalIcon = (position: number) => {
    if (position <= 3) {
      return (
        <svg className={`w-6 h-6 ${getMedalColor(position)}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return <span className="text-gray-500 font-semibold">{position}</span>;
  };

  return (
    <div className="space-y-6 pb-6">
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Ranking Sustentável</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("friends")}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            activeTab === "friends"
              ? "text-cyan-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Amigos
          {activeTab === "friends" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("neighborhood")}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            activeTab === "neighborhood"
              ? "text-cyan-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Vizinhança
          {activeTab === "neighborhood" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600" />
          )}
        </button>
      </div>

      {/* User Position Card */}
      <Card className="p-5 bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-700 mb-1">Sua Posição: {userPosition}°</p>
          <p className="text-lg font-bold text-cyan-700">
            Você economizou {userSavings}% este mês!
          </p>
        </div>
      </Card>

      {/* Rankings List */}
      <div className="space-y-3">
        {friendsRanking.map((user) => (
          <Card key={user.id} className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-10 flex items-center justify-center">
                {getMedalIcon(user.position)}
              </div>

              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-semibold text-lg">
                {user.name.charAt(0)}
              </div>

              <div className="flex-1">
                <p className="font-semibold text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-600">Economia de {user.savings}%</p>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
