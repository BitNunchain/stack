"use client"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge as Bridge, History, Network, Zap } from "lucide-react"

interface BridgeHeaderProps {
  activeTab: "bridge" | "history" | "networks"
  onTabChange: (tab: "bridge" | "history" | "networks") => void
}

export function BridgeHeader({ activeTab, onTabChange }: BridgeHeaderProps) {
  // Cast string value to union type for onTabChange
  const handleTabChange = (value: string) => {
    onTabChange(value as "bridge" | "history" | "networks")
  }
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Cross-Chain Bridge</h1>
          <p className="text-gray-600 dark:text-gray-300">Transfer assets across multiple blockchain networks</p>
        </div>

        <Badge
          variant="secondary"
          className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
        >
          <Zap className="w-3 h-3 mr-1" />
          Multi-Chain
        </Badge>
      </div>

      <div className="flex items-center gap-4">
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList>
            <TabsTrigger value="bridge">
              <Bridge className="w-4 h-4 mr-2" />
              Bridge
            </TabsTrigger>
            <TabsTrigger value="history">
              <History className="w-4 h-4 mr-2" />
              History
            </TabsTrigger>
            <TabsTrigger value="networks">
              <Network className="w-4 h-4 mr-2" />
              Networks
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}
