"use client";

import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import RewardsHeader from "@/components/rewards/rewards-header";
import PointsBalance from "@/components/rewards/points-balance";
import RewardsGrid from "@/components/rewards/rewards-grid";
import RedeemModal from "@/components/rewards/redeem-modal";
import RedemptionHistory from "@/components/rewards/redemption-history";

export default function RewardsPage() {
  const [selectedReward, setSelectedReward] = useState(null);
  const [activeTab, setActiveTab] = useState("Todos");
  const [showRedeemModal, setShowRedeemModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <RewardsHeader />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Points Balance and Redeem */}
          <div className="lg:col-span-1 space-y-6">
            <PointsBalance />
          </div>

          {/* Right Column - Rewards Grid and History */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Troque seus pontos
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-accent hover:text-accent"
                >
                  <a href="#all">Ver todos</a>
                </Button>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {["Todos", "Serviços", "Produtos", "Descontos"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                      activeTab === tab
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <RewardsGrid
                activeTab={activeTab}
                onSelectReward={(reward: SetStateAction<null>) => {
                  setSelectedReward(reward);
                  setShowRedeemModal(true);
                }}
              />
            </div>

            <RedemptionHistory />
          </div>
        </div>
      </main>

      {showRedeemModal && selectedReward && (
        <RedeemModal
          reward={selectedReward}
          onClose={() => {
            setShowRedeemModal(false);
            setSelectedReward(null);
          }}
        />
      )}
    </div>
  );
}
