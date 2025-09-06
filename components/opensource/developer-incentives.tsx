"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Gift, Code, Trophy, Star, Coins, Users } from "lucide-react"

export function DeveloperIncentives() {
  const incentivePrograms = [
    {
      title: "Bug Bounty Program",
      description: "Find and report security vulnerabilities to earn BTN rewards",
      reward: "Up to 10,000 BTN",
      participants: 1250,
      icon: Trophy,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Feature Development Grants",
      description: "Build new features and integrations for the BitnunEco ecosystem",
      reward: "5,000 - 50,000 BTN",
      participants: 340,
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Documentation Rewards",
      description: "Create tutorials, guides, and documentation for the community",
      reward: "100 - 1,000 BTN",
      participants: 890,
      icon: Star,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Community Contributions",
      description: "Help other developers, answer questions, and moderate forums",
      reward: "50 - 500 BTN",
      participants: 2100,
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
  ]

  const leaderboard = [
    { rank: 1, name: "alex_dev", contributions: 45, earned: "12,500 BTN", badge: "🥇" },
    { rank: 2, name: "crypto_builder", contributions: 38, earned: "9,800 BTN", badge: "🥈" },
    { rank: 3, name: "blockchain_ninja", contributions: 32, earned: "8,200 BTN", badge: "🥉" },
    { rank: 4, name: "code_master", contributions: 28, earned: "7,100 BTN", badge: "⭐" },
    { rank: 5, name: "dev_wizard", contributions: 25, earned: "6,500 BTN", badge: "⭐" },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Developer Incentive Programs
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Earn BTN tokens by contributing to the BitnunEco ecosystem through code, documentation, and community support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {incentivePrograms.map((program) => (
          <Card key={program.title} className="relative overflow-hidden hover:border-emerald-500/50 transition-colors">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${program.color}`} />
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${program.color} bg-opacity-10`}>
                  <program.icon className="h-5 w-5 text-white" />
                </div>
                {program.title}
              </CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Coins className="h-4 w-4 text-emerald-500" />
                  <span className="font-semibold text-emerald-500">{program.reward}</span>
                </div>
                <Badge variant="secondary">{program.participants} participants</Badge>
              </div>
              <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">
                <Gift className="h-4 w-4 mr-2" />
                Join Program
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-emerald-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Top Contributors Leaderboard
          </CardTitle>
          <CardDescription>Recognize the most active contributors in our community</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaderboard.map((contributor) => (
              <div key={contributor.rank} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{contributor.badge}</span>
                  <div>
                    <p className="font-semibold">{contributor.name}</p>
                    <p className="text-sm text-muted-foreground">{contributor.contributions} contributions</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-emerald-500">{contributor.earned}</p>
                  <p className="text-sm text-muted-foreground">Total earned</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Challenge</CardTitle>
          <CardDescription>Complete this month&apos;s challenge to earn bonus rewards</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Build a DeFi Integration</span>
              <span className="text-sm text-muted-foreground">Progress: 65%</span>
            </div>
            <Progress value={65} className="h-2" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Coins className="h-4 w-4 text-emerald-500" />
              <span className="font-semibold">Bonus: 5,000 BTN</span>
            </div>
            <Badge>15 days left</Badge>
          </div>
          <Button className="w-full bg-transparent" variant="outline">
            View Challenge Details
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
