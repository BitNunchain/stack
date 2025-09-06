"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Droplets, TrendingUp, Plus, BarChart3 } from "lucide-react"

interface PoolsHeaderProps {
  activeTab: "pools" | "farming" | "analytics"
  onTabChange: (tab: "pools" | "farming" | "analytics") => void
  onAddLiquidity: () => void
}

export function PoolsHeader({ activeTab, onTabChange, onAddLiquidity }: PoolsHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Liquidity Pools</h1>
          <p className="text-gray-600 dark:text-gray-300">Provide liquidity and earn rewards</p>
        </div>

        <Badge
          variant="secondary"
          className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
        >
          <Droplets className="w-3 h-3 mr-1" />
          $8.9M TVL
        </Badge>
      </div>

      <div className="flex items-center gap-4">
  <Tabs value={activeTab} onValueChange={value => onTabChange(value as "pools" | "farming" | "analytics") }>
          <TabsList>
            <TabsTrigger value="pools">
              <Droplets className="w-4 h-4 mr-2" />
              Pools
            </TabsTrigger>
            <TabsTrigger value="farming">
              <TrendingUp className="w-4 h-4 mr-2" />
              Farming
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Button onClick={onAddLiquidity} className="bg-emerald-500 hover:bg-emerald-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Liquidity
        </Button>
      </div>
    </div>
  )
}
