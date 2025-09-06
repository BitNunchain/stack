"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import {
  Bot,
  Play,
  Pause,
  Square,
  Settings,
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  Zap,
  ShoppingBag,
  MessageSquare,
  Eye,
} from "lucide-react"
import { botManager, type Bot as BotType } from "@/lib/bots/bot-manager"

export function BotDashboard() {
  const [bots, setBots] = useState<BotType[]>([])
  const [botStats, setBotStats] = useState({
    totalBots: 0,
    activeBots: 0,
    inactiveBots: 0,
    pausedBots: 0,
    totalRuns: 0,
    totalRewards: 0,
  })

  useEffect(() => {
    const updateBotData = () => {
      if (botManager) {
        setBots(botManager.getAllBots())
        setBotStats(botManager.getBotStats())
      }
    }

    updateBotData()
    const interval = setInterval(updateBotData, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const getBotIcon = (type: string) => {
    const icons = {
      mining: Zap,
      trading: TrendingUp,
      nft: ShoppingBag,
      social: Users,
      analytics: BarChart3,
      security: Shield,
      engagement: MessageSquare,
      moderation: Eye,
    }
    return icons[type as keyof typeof icons] || Bot
  }

  const getBotColor = (type: string) => {
    const colors = {
      mining: "from-yellow-400 to-orange-500",
      trading: "from-blue-400 to-cyan-500",
      nft: "from-purple-400 to-pink-500",
      social: "from-green-400 to-emerald-500",
      analytics: "from-indigo-400 to-blue-500",
      security: "from-red-400 to-pink-500",
      engagement: "from-teal-400 to-cyan-500",
      moderation: "from-gray-400 to-slate-500",
    }
    return colors[type as keyof typeof colors] || "from-primary to-accent"
  }

  const toggleBot = (botId: string, currentStatus: string) => {
    if (!botManager) return;
    if (currentStatus === "active") {
      botManager.pauseBot(botId)
    } else {
      botManager.startBot(botId)
    }
  }

  return (
    <div className="space-y-6">
      {/* Bot Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-effect border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Bots</p>
                <p className="text-2xl font-bold text-foreground">{botStats.totalBots}</p>
              </div>
              <Bot className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-green-500/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Bots</p>
                <p className="text-2xl font-bold text-green-500">{botStats.activeBots}</p>
              </div>
              <Play className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-yellow-500/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Runs</p>
                <p className="text-2xl font-bold text-yellow-500">{botStats.totalRuns}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-accent/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Bot Rewards</p>
                <p className="text-2xl font-bold text-accent">{botStats.totalRewards.toFixed(2)} BTN</p>
              </div>
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bot Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bots.map((bot) => {
          const IconComponent = getBotIcon(bot.type)
          const colorClass = getBotColor(bot.type)
          const successRate = bot.stats.totalRuns > 0 ? (bot.stats.successfulRuns / bot.stats.totalRuns) * 100 : 0

          return (
            <Card
              key={bot.id}
              className="glass-effect futuristic-border group hover:glow-primary transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${colorClass} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold">{bot.name}</CardTitle>
                      <p className="text-sm text-muted-foreground capitalize">{bot.type} Bot</p>
                    </div>
                  </div>
                  <Badge
                    variant={bot.status === "active" ? "default" : bot.status === "paused" ? "secondary" : "outline"}
                    className={`${bot.status === "active" ? "gradient-primary animate-pulse" : ""}`}
                  >
                    {bot.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Bot Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch checked={bot.status === "active"} onCheckedChange={() => toggleBot(bot.id, bot.status)} />
                    <span className="text-sm text-muted-foreground">Auto-run</span>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>

                {/* Success Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Success Rate</span>
                    <span className="font-medium">{successRate.toFixed(1)}%</span>
                  </div>
                  <Progress value={successRate} className="h-2" />
                </div>

                {/* Bot Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Total Runs</p>
                    <p className="font-semibold">{bot.stats.totalRuns}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Rewards</p>
                    <p className="font-semibold">{bot.stats.totalRewards.toFixed(2)} BTN</p>
                  </div>
                </div>

                {/* Next Run */}
                {bot.nextRun && (
                  <div className="text-xs text-muted-foreground">
                    Next run: {new Date(bot.nextRun).toLocaleTimeString()}
                  </div>
                )}

                {/* Bot Actions */}
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 hover:bg-green-500/10 hover:border-green-500/30 bg-transparent"
                    onClick={() => botManager && botManager.startBot(bot.id)}
                    disabled={bot.status === "active"}
                  >
                    <Play className="w-3 h-3 mr-1" />
                    Start
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 hover:bg-yellow-500/10 hover:border-yellow-500/30 bg-transparent"
                    onClick={() => botManager && botManager.pauseBot(bot.id)}
                    disabled={bot.status !== "active"}
                  >
                    <Pause className="w-3 h-3 mr-1" />
                    Pause
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 hover:bg-red-500/10 hover:border-red-500/30 bg-transparent"
                    onClick={() => botManager && botManager.stopBot(bot.id)}
                    disabled={bot.status === "inactive"}
                  >
                    <Square className="w-3 h-3 mr-1" />
                    Stop
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
