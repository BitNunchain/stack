"use client"

import { useState } from "react"
import { PoolsHeader } from "@/components/trading/pools-header"
import { LiquidityPools } from "@/components/trading/liquidity-pools"
import { YieldFarming } from "@/components/trading/yield-farming"
import { PoolAnalytics } from "@/components/trading/pool-analytics"
import { AddLiquidityModal } from "@/components/trading/add-liquidity-modal"

export default function PoolsPage() {
  const [activeTab, setActiveTab] = useState<"pools" | "farming" | "analytics">("pools")
  const [showAddLiquidity, setShowAddLiquidity] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-900/20">
      <div className="container mx-auto px-4 py-6">
        <PoolsHeader
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onAddLiquidity={() => setShowAddLiquidity(true)}
        />

        <div className="mt-6">
          {activeTab === "pools" && <LiquidityPools />}
          {activeTab === "farming" && <YieldFarming />}
          {activeTab === "analytics" && <PoolAnalytics />}
        </div>

  {showAddLiquidity && <AddLiquidityModal isOpen={showAddLiquidity} onClose={() => setShowAddLiquidity(false)} />}
      </div>
    </div>
  )
}
