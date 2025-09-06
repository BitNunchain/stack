"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Leaf, Zap, Users, ShoppingBag } from "lucide-react"
import styles from "./achievements.module.css"

export function Achievements() {
  const [filter, setFilter] = useState("all")

  const achievements = [
    {
      id: "first-mine",
      title: "First Steps",
      description: "Complete your first mining session",
      icon: Zap,
      category: "mining",
      rarity: "common",
      points: 50,
      unlocked: true,
      unlockedAt: "2024-01-15",
      reward: "5 BTN",
    },
    {
      id: "eco-warrior",
      title: "Eco Warrior",
      description: "Complete 50 eco-friendly actions",
      icon: Leaf,
      category: "eco",
      rarity: "epic",
      points: 500,
      unlocked: true,
      unlockedAt: "2024-01-20",
      reward: "50 BTN + Badge",
    },
    {
      id: "nft-collector",
      title: "NFT Collector",
      description: "Own 10 different eco-themed NFTs",
      icon: ShoppingBag,
      category: "nft",
      rarity: "rare",
      points: 200,
      unlocked: true,
      unlockedAt: "2024-01-18",
      reward: "20 BTN",
    },
    {
      id: "community-leader",
      title: "Community Leader",
      description: "Refer 5 new users to the platform",
      icon: Users,
      category: "social",
      rarity: "rare",
      points: 300,
      unlocked: false,
      progress: 3,
      target: 5,
      reward: "100 BTN",
    },
    {
      id: "mining-master",
      title: "Mining Master",
      description: "Mine 1000 BTN tokens",
      icon: Zap,
      category: "mining",
      rarity: "legendary",
      points: 1000,
      unlocked: false,
      progress: 647,
      target: 1000,
      reward: "200 BTN + Exclusive NFT",
    },
    {
      id: "carbon-neutral",
      title: "Carbon Neutral",
      description: "Offset 100kg of CO2 through platform actions",
      icon: Leaf,
      category: "eco",
      rarity: "epic",
      points: 750,
      unlocked: false,
      progress: 67,
      target: 100,
      reward: "150 BTN + Certificate",
    },
  ]

  const categories = [
    { id: "all", label: "All", count: achievements.length },
    { id: "mining", label: "Mining", count: achievements.filter((a) => a.category === "mining").length },
    { id: "eco", label: "Eco Actions", count: achievements.filter((a) => a.category === "eco").length },
    { id: "nft", label: "NFT", count: achievements.filter((a) => a.category === "nft").length },
    { id: "social", label: "Social", count: achievements.filter((a) => a.category === "social").length },
  ]

  const rarityColors: { [key: string]: string } = {
    common: "bg-gray-500",
    uncommon: "bg-green-500",
    rare: "bg-blue-500",
    epic: "bg-purple-500",
    legendary: "bg-yellow-500",
  }

  const filteredAchievements =
    filter === "all" ? achievements : achievements.filter((achievement) => achievement.category === filter)

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span>Achievements</span>
          </CardTitle>
          <Badge variant="secondary">
            {achievements.filter((a) => a.unlocked).length} / {achievements.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category.id)}
              className="text-xs"
            >
              {category.label} ({category.count})
            </Button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`border border-border rounded-lg p-4 ${
                achievement.unlocked ? "bg-card" : "bg-muted/50 opacity-75"
              }`}
            >
              <div className="flex items-start space-x-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    achievement.unlocked ? rarityColors[achievement.rarity] : "bg-gray-400"
                  }`}
                >
                  <achievement.icon className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-foreground truncate">{achievement.title}</h4>
                    <Badge variant="outline" className={`text-xs ${achievement.unlocked ? "" : "opacity-50"}`}>
                      {achievement.rarity}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>

                  {achievement.unlocked ? (
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        +{achievement.points} XP
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        Unlocked {achievement.unlockedAt ? new Date(achievement.unlockedAt).toLocaleDateString() : "N/A"}
                      </span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {achievement.progress !== undefined && achievement.target !== undefined && (
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="text-foreground">
                              {achievement.progress} / {achievement.target}
                            </span>
                          </div>
                          <div
                            className={`bg-primary h-1.5 rounded-full transition-all`}
                            data-progress={achievement.progress && achievement.target ? (achievement.progress / achievement.target) * 100 : 0}
                          />
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs opacity-50">
                          +{achievement.points} XP
                        </Badge>
                        <span className="text-xs text-muted-foreground">Reward: {achievement.reward}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
