"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Vote, Eraser as Treasury, Users, Plus } from "lucide-react"

interface GovernanceHeaderProps {
  activeTab: "proposals" | "treasury" | "voting"
  onTabChange: (tab: "proposals" | "treasury" | "voting") => void
  onCreateProposal: () => void
}

export function GovernanceHeader({ activeTab, onTabChange, onCreateProposal }: GovernanceHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">DAO Governance</h1>
          <p className="text-gray-600 dark:text-gray-300">Participate in decentralized decision-making</p>
        </div>

        <Badge
          variant="secondary"
          className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
        >
          <Vote className="w-3 h-3 mr-1" />
          Active DAO
        </Badge>
      </div>

      <div className="flex items-center gap-4">
    <Tabs value={activeTab} onValueChange={value => onTabChange(value as "proposals" | "treasury" | "voting")}>
          <TabsList>
            <TabsTrigger value="proposals">
              <Vote className="w-4 h-4 mr-2" />
              Proposals
            </TabsTrigger>
            <TabsTrigger value="treasury">
              <Treasury className="w-4 h-4 mr-2" />
              Treasury
            </TabsTrigger>
            <TabsTrigger value="voting">
              <Users className="w-4 h-4 mr-2" />
              Voting Power
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Button onClick={onCreateProposal} className="bg-emerald-500 hover:bg-emerald-600">
          <Plus className="w-4 h-4 mr-2" />
          Create Proposal
        </Button>
      </div>
    </div>
  )
}
