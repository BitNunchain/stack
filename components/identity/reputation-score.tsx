"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Users } from "lucide-react"

export function ReputationScore() {
  const reputationData = [
    { date: "2024-01-01", score: 650 },
    { date: "2024-01-08", score: 720 },
    { date: "2024-01-15", score: 780 },
    { date: "2024-01-22", score: 825 },
    { date: "2024-01-29", score: 847 },
  ]

  const reputationFactors = [
    { name: "Trading Performance", score: 92, weight: 30, description: "Consistent profitable trades" },
    { name: "Community Engagement", score: 88, weight: 25, description: "Active participation and helping others" },
    { name: "Platform Loyalty", score: 95, weight: 20, description: "Long-term platform usage" },
    { name: "Verification Level", score: 100, weight: 15, description: "Complete identity verification" },
    { name: "Social Proof", score: 76, weight: 10, description: "External endorsements and connections" },
  ]

  const reputationBenefits = [
    { benefit: "Lower Trading Fees", current: "0.15%", standard: "0.25%", unlocked: true },
    { benefit: "Priority Support", current: "< 1 hour", standard: "< 24 hours", unlocked: true },
    { benefit: "Exclusive Features", current: "Beta Access", standard: "Standard", unlocked: true },
    { benefit: "Higher Limits", current: "$1M", standard: "$100K", unlocked: false },
  ]

  const endorsements = [
    {
      from: "Sarah Chen",
      role: "DeFi Expert",
      message: "Excellent trader with deep market knowledge",
      date: "2 days ago",
    },
    {
      from: "Mike Rodriguez",
      role: "Community Leader",
      message: "Always helpful and professional",
      date: "1 week ago",
    },
    {
      from: "Emma Wilson",
      role: "NFT Creator",
      message: "Trustworthy and reliable in all dealings",
      date: "2 weeks ago",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Reputation Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Current Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-emerald-600">847</div>
            <p className="text-xs text-emerald-600">+22 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">Top 5%</div>
            <p className="text-xs text-gray-500">Among all users</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Trust Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">Platinum</div>
            <p className="text-xs text-gray-500">Highest tier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Endorsements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">43</div>
            <p className="text-xs text-gray-500">From verified users</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reputation Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Reputation Trend</CardTitle>
            <CardDescription>Your reputation score over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={reputationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#059669" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Reputation Factors */}
        <Card>
          <CardHeader>
            <CardTitle>Reputation Factors</CardTitle>
            <CardDescription>Components that make up your reputation score</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {reputationFactors.map((factor) => (
              <div key={factor.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{factor.name}</span>
                  <span>
                    {factor.score}/100 ({factor.weight}%)
                  </span>
                </div>
                <Progress value={factor.score} className="h-2" />
                <p className="text-xs text-gray-600">{factor.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Reputation Benefits */}
      <Card>
        <CardHeader>
          <CardTitle>Reputation Benefits</CardTitle>
          <CardDescription>Perks and privileges based on your reputation level</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reputationBenefits.map((benefit, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{benefit.benefit}</h4>
                  <Badge variant={benefit.unlocked ? "default" : "secondary"}>
                    {benefit.unlocked ? "Unlocked" : "Locked"}
                  </Badge>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Your Level:</span>
                    <span className="font-medium">{benefit.current}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Standard:</span>
                    <span>{benefit.standard}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Endorsements */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Endorsements</CardTitle>
          <CardDescription>What the community says about you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {endorsements.map((endorsement, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium">{endorsement.from}</p>
                    <p className="text-sm text-gray-600">{endorsement.role}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{endorsement.date}</span>
              </div>
              <p className="text-sm italic">&quot;{endorsement.message}&quot;</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
