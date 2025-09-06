"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react"

// Mock data for analytics
const mockData = {
  userGrowth: [
    { month: "Jan", users: 1200 },
    { month: "Feb", users: 1900 },
    { month: "Mar", users: 3000 },
    { month: "Apr", users: 5000 },
    { month: "May", users: 7500 },
    { month: "Jun", users: 10000 },
  ],
  revenue: [
    { month: "Jan", revenue: 15000 },
    { month: "Feb", revenue: 28000 },
    { month: "Mar", revenue: 45000 },
    { month: "Apr", revenue: 72000 },
    { month: "May", revenue: 95000 },
    { month: "Jun", revenue: 125000 },
  ],
  tokenDistribution: [
    { name: "Staking", value: 40, color: "#0ea5e9" },
    { name: "Trading", value: 30, color: "#06b6d4" },
    { name: "Mining", value: 20, color: "#0891b2" },
    { name: "Other", value: 10, color: "#0e7490" },
  ],
}

export default function AnalyticsContent() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalRevenue: 0,
    activeNodes: 0,
    growthRate: 0,
  })

  useEffect(() => {
    // Simulate loading analytics data
    const timer = setTimeout(() => {
      setStats({
        totalUsers: 10000,
        totalRevenue: 125000,
        activeNodes: 250,
        growthRate: 15.3,
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Analytics Dashboard</h1>
          <p className="text-cyan-200 text-lg">Comprehensive insights into platform performance and user engagement</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 border-cyan-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-cyan-200">Total Users</CardTitle>
              <Users className="h-4 w-4 text-cyan-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-cyan-300">+{stats.growthRate}% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-cyan-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-cyan-200">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-cyan-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-cyan-300">+31% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-cyan-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-cyan-200">Active Nodes</CardTitle>
              <Activity className="h-4 w-4 text-cyan-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.activeNodes}</div>
              <p className="text-xs text-cyan-300">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-cyan-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-cyan-200">Growth Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-cyan-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.growthRate}%</div>
              <p className="text-xs text-cyan-300">Monthly growth rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
            <TabsTrigger value="users" className="data-[state=active]:bg-cyan-600">
              User Growth
            </TabsTrigger>
            <TabsTrigger value="revenue" className="data-[state=active]:bg-cyan-600">
              Revenue
            </TabsTrigger>
            <TabsTrigger value="distribution" className="data-[state=active]:bg-cyan-600">
              Token Distribution
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <Card className="bg-slate-800/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="text-white">User Growth Over Time</CardTitle>
                <CardDescription className="text-cyan-200">Monthly active users on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={mockData.userGrowth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1e293b",
                        border: "1px solid #06b6d4",
                        borderRadius: "8px",
                      }}
                    />
                    <Line type="monotone" dataKey="users" stroke="#06b6d4" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-4">
            <Card className="bg-slate-800/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="text-white">Revenue Growth</CardTitle>
                <CardDescription className="text-cyan-200">
                  Monthly revenue generated from platform activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mockData.revenue}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1e293b",
                        border: "1px solid #06b6d4",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="revenue" fill="#06b6d4" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="distribution" className="space-y-4">
            <Card className="bg-slate-800/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="text-white">Token Distribution</CardTitle>
                <CardDescription className="text-cyan-200">
                  How tokens are being used across different activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={mockData.tokenDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${percent !== undefined ? (percent * 100).toFixed(0) : "0"}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {mockData.tokenDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1e293b",
                        border: "1px solid #06b6d4",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
