"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wallet, Coins, TrendingUp, Users, Zap, Leaf } from "lucide-react"
import { SocialShare } from "./social-share"
import { useRealTimeProfile, useRealTimeMiningStats } from "@/lib/hooks/use-real-time-data"
import { useAuth } from "@/lib/hooks/use-auth"

export function DashboardStats() {
  const { user } = useAuth()
  const { profile, loading: profileLoading } = useRealTimeProfile(user?.id)
  const { stats: miningStats, loading: miningLoading } = useRealTimeMiningStats()

  const stats = [
    {
      title: "BTN Balance",
      value: profile?.total_earnings?.toFixed(2) || "0.00",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: Wallet,
      description: "Total BTN tokens",
      gradient: "from-primary to-accent",
      glow: "glow-primary",
      loading: profileLoading,
    },
    {
      title: "Mining Rate",
      value: (miningStats.hashRate / 100).toFixed(2),
      change: "+2.1%",
      changeType: "positive" as const,
      icon: Zap,
      description: "BTN per hour",
      gradient: "from-accent to-primary",
      glow: "glow-accent",
      loading: miningLoading,
    },
    {
      title: "Eco Score",
      value: profile?.reputation_score?.toString() || "0",
      change: "+15.2%",
      changeType: "positive" as const,
      icon: Leaf,
      description: "Sustainability points",
      gradient: "from-green-400 to-emerald-600",
      glow: "glow-accent",
      loading: profileLoading,
    },
    {
      title: "Mining Power",
      value: profile?.mining_power?.toString() || "0",
      change: "+3",
      changeType: "positive" as const,
      icon: TrendingUp,
      description: "Hash rate capacity",
      gradient: "from-purple-400 to-pink-600",
      glow: "glow-primary",
      loading: profileLoading,
    },
    {
      title: "Network Peers",
      value: miningStats.activePeers.toLocaleString(),
      change: "+12",
      changeType: "positive" as const,
      icon: Users,
      description: "Active network nodes",
      gradient: "from-blue-400 to-cyan-600",
      glow: "glow-accent",
      loading: miningLoading,
    },
    {
      title: "User Level",
      value: profile?.level?.toString() || "1",
      change: "+8.7%",
      changeType: "positive" as const,
      icon: Coins,
      description: "Current user level",
      gradient: "from-yellow-400 to-orange-600",
      glow: "glow-primary",
      loading: profileLoading,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Your Stats
          </h2>
          <p className="text-muted-foreground">Track your BitnunEco performance</p>
        </div>
        <SocialShare
          title="Check out my BitnunEco stats! 🚀"
          description="I'm earning BTN tokens sustainably and contributing to the eco-friendly blockchain revolution!"
          hashtags={["BitnunEco", "Web3", "SustainableBlockchain", "ActionMining"]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className={`glass-effect futuristic-border group cursor-pointer hover:scale-105 transition-all duration-300 ease-out hover:shadow-2xl hover:${stat.glow} animate-float`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {stat.title}
              </CardTitle>
              <div
                className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}
              >
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {stat.loading ? (
                <div className="animate-pulse">
                  <div className="h-8 bg-slate-700 rounded w-20 mb-2"></div>
                  <div className="h-4 bg-slate-700 rounded w-16"></div>
                </div>
              ) : (
                <>
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block`}
                  >
                    {stat.value}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {stat.description}
                    </p>
                    <Badge
                      variant={stat.changeType === "positive" ? "default" : "destructive"}
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.changeType === "positive" ? `bg-gradient-to-r ${stat.gradient} text-white shadow-lg hover:shadow-xl` : "bg-destructive text-destructive-foreground"} group-hover:scale-110 transition-all duration-300`}
                    >
                      {stat.change}
                    </Badge>
                  </div>
                </>
              )}
              <div className="w-full bg-muted rounded-full h-1 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full animate-shimmer bg-[length:200%_100%] group-hover:animate-pulse`}
                  style={{
                    width: stat.loading
                      ? "50%"
                      : `${Math.min(100, (Number.parseFloat(stat.change.replace(/[^0-9.]/g, "")) || 0) * 5)}%`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
export default DashboardStats;
}
