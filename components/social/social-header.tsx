"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, TrendingUp, Star, Zap, Plus } from "lucide-react"

interface SocialHeaderProps {
  activeTab: "feed" | "traders" | "creators" | "signals"
  onTabChange: (tab: "feed" | "traders" | "creators" | "signals") => void
}

export function SocialHeader({ activeTab, onTabChange }: SocialHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Social Trading</h1>
          <p className="text-gray-600 dark:text-gray-300">Connect, learn, and earn with the community</p>
        </div>

        <Badge
          variant="secondary"
          className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
        >
          <Users className="w-3 h-3 mr-1" />
          12.5K Active
        </Badge>
      </div>

      <div className="flex items-center gap-4">
  <Tabs value={activeTab} onValueChange={value => onTabChange(value as "feed" | "traders" | "creators" | "signals") }>
          <TabsList>
            <TabsTrigger value="feed">
              <Zap className="w-4 h-4 mr-2" />
              Feed
            </TabsTrigger>
            <TabsTrigger value="traders">
              <TrendingUp className="w-4 h-4 mr-2" />
              Traders
            </TabsTrigger>
            <TabsTrigger value="creators">
              <Star className="w-4 h-4 mr-2" />
              Creators
            </TabsTrigger>
            <TabsTrigger value="signals">
              <Zap className="w-4 h-4 mr-2" />
              Signals
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Button className="bg-emerald-500 hover:bg-emerald-600">
          <Plus className="w-4 h-4 mr-2" />
          Create Post
        </Button>
      </div>
    </div>
  )
}
