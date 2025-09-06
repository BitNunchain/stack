import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, TrendingUp, Zap, Shield } from "lucide-react"

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg">
              <CreditCard className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                BitnunCloud Billing
              </h1>
              <p className="text-slate-400 text-lg">Blockchain-Native Resource Management</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="bg-slate-800/50 border-emerald-500/20 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">Current Bill</p>
                    <p className="text-2xl font-bold text-emerald-400">247.8 BTN</p>
                  </div>
                  <CreditCard className="h-8 w-8 text-emerald-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">Cost Savings</p>
                    <p className="text-2xl font-bold text-blue-400">78%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">Resources Used</p>
                    <p className="text-2xl font-bold text-purple-400">67%</p>
                  </div>
                  <Zap className="h-8 w-8 text-purple-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-orange-500/20 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">Security Score</p>
                    <p className="text-2xl font-bold text-orange-400">A+</p>
                  </div>
                  <Shield className="h-8 w-8 text-orange-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-slate-800/50 border border-slate-700">
            <TabsTrigger value="overview" className="data-[state=active]:bg-emerald-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="usage" className="data-[state=active]:bg-blue-600">
              Usage
            </TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-purple-600">
              Resources
            </TabsTrigger>
            <TabsTrigger value="payments" className="data-[state=active]:bg-orange-600">
              Payments
            </TabsTrigger>
            <TabsTrigger value="optimization" className="data-[state=active]:bg-pink-600">
              Optimization
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-emerald-400">Current Usage Summary</CardTitle>
                  <CardDescription>Real-time resource consumption</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                      <div>
                        <p className="font-medium text-white">Database Operations</p>
                        <p className="text-sm text-slate-400">PostgreSQL + Redis</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-emerald-400">89.4 BTN</p>
                        <p className="text-xs text-slate-500">36% of bill</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                      <div>
                        <p className="font-medium text-white">Compute Resources</p>
                        <p className="text-sm text-slate-400">Serverless + Containers</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-400">67.2 BTN</p>
                        <p className="text-xs text-slate-500">27% of bill</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                      <div>
                        <p className="font-medium text-white">Storage & CDN</p>
                        <p className="text-sm text-slate-400">Object Storage + Bandwidth</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-purple-400">45.8 BTN</p>
                        <p className="text-xs text-slate-500">18% of bill</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                      <div>
                        <p className="font-medium text-white">AI/ML Services</p>
                        <p className="text-sm text-slate-400">Model Training + Inference</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-orange-400">45.4 BTN</p>
                        <p className="text-xs text-slate-500">19% of bill</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-400">Cost Comparison</CardTitle>
                  <CardDescription>BitnunCloud vs Traditional Providers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-slate-400">AWS Equivalent Cost</span>
                        <span className="text-sm text-red-400">$1,247.80</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-slate-400">Google Cloud Equivalent</span>
                        <span className="text-sm text-orange-400">$1,156.40</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: "93%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-slate-400">BitnunCloud Cost</span>
                        <span className="text-sm text-emerald-400">$274.58 (247.8 BTN)</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "22%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                    <p className="text-emerald-400 font-medium">You&apos;re saving $973.22 (78%) this month!</p>
                    <p className="text-sm text-slate-400 mt-1">Powered by decentralized infrastructure</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-400">Resource Utilization</CardTitle>
                  <CardDescription>Current resource allocation and usage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-slate-400">CPU Usage</span>
                        <span className="text-sm text-blue-400">67% (2.4 vCPU)</span>
                      </div>
                      <Progress value={67} className="h-2 bg-slate-700" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-slate-400">Memory Usage</span>
                        <span className="text-sm text-green-400">45% (3.6 GB)</span>
                      </div>
                      <Progress value={45} className="h-2 bg-slate-700" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-slate-400">Storage Usage</span>
                        <span className="text-sm text-purple-400">78% (156 GB)</span>
                      </div>
                      <Progress value={78} className="h-2 bg-slate-700" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-slate-400">Bandwidth Usage</span>
                        <span className="text-sm text-orange-400">34% (340 GB)</span>
                      </div>
                      <Progress value={34} className="h-2 bg-slate-700" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-purple-400">Usage Trends</CardTitle>
                  <CardDescription>30-day usage patterns</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <p className="text-2xl font-bold text-green-400">+23%</p>
                      <p className="text-sm text-slate-400">Compute Growth</p>
                    </div>
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-400">-12%</p>
                      <p className="text-sm text-slate-400">Storage Optimized</p>
                    </div>
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-400">+45%</p>
                      <p className="text-sm text-slate-400">API Requests</p>
                    </div>
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <p className="text-2xl font-bold text-orange-400">+67%</p>
                      <p className="text-sm text-slate-400">ML Inference</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-purple-400">Resource Quotas</CardTitle>
                  <CardDescription>Current limits and allocations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-white">Database Connections</p>
                        <Badge className="bg-green-600">Normal</Badge>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-slate-400">Used: 847 / 1,000</span>
                        <span className="text-sm text-green-400">84.7%</span>
                      </div>
                      <Progress value={84.7} className="h-2 bg-slate-700" />
                    </div>
                    <div className="p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-white">API Rate Limit</p>
                        <Badge className="bg-blue-600">Healthy</Badge>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-slate-400">Used: 45.2K / 100K req/min</span>
                        <span className="text-sm text-blue-400">45.2%</span>
                      </div>
                      <Progress value={45.2} className="h-2 bg-slate-700" />
                    </div>
                    <div className="p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-white">Storage Quota</p>
                        <Badge className="bg-orange-600">Warning</Badge>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-slate-400">Used: 890 GB / 1 TB</span>
                        <span className="text-sm text-orange-400">89%</span>
                      </div>
                      <Progress value={89} className="h-2 bg-slate-700" />
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Upgrade Limits
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-orange-400">Auto-Scaling Settings</CardTitle>
                  <CardDescription>Intelligent resource management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-white">Compute Auto-Scale</p>
                        <Badge className="bg-green-600">Enabled</Badge>
                      </div>
                      <p className="text-sm text-slate-400 mb-2">Scale up at 80% CPU, down at 30%</p>
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Min: 2 instances</span>
                        <span>Max: 20 instances</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-white">Storage Auto-Expand</p>
                        <Badge className="bg-blue-600">Enabled</Badge>
                      </div>
                      <p className="text-sm text-slate-400 mb-2">Expand at 90% usage, 100GB increments</p>
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Current: 1TB</span>
                        <span>Max: 10TB</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-orange-400">Payment Methods</CardTitle>
                  <CardDescription>Blockchain-native billing options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-700/50 rounded-lg border-l-4 border-emerald-500">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-white">BTN Wallet</p>
                        <Badge className="bg-emerald-600">Primary</Badge>
                      </div>
                      <p className="text-sm text-slate-400 mb-2">Balance: 1,247.8 BTN ($1,382.58)</p>
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Auto-pay enabled</span>
                        <span>0x1234...5678</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-white">Credit Card</p>
                        <Badge className="bg-blue-600">Backup</Badge>
                      </div>
                      <p className="text-sm text-slate-400 mb-2">Visa ending in 4242</p>
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Expires 12/25</span>
                        <span>For BTN purchases</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-pink-400">Billing History</CardTitle>
                  <CardDescription>Recent transactions and invoices</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-white">December 2024</p>
                        <Badge className="bg-green-600">Paid</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">247.8 BTN</span>
                        <span className="text-green-400">$274.58</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Paid on Dec 1, 2024</p>
                    </div>
                    <div className="p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-white">November 2024</p>
                        <Badge className="bg-green-600">Paid</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">189.4 BTN</span>
                        <span className="text-green-400">$203.37</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Paid on Nov 1, 2024</p>
                    </div>
                    <div className="p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-white">October 2024</p>
                        <Badge className="bg-green-600">Paid</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">156.7 BTN</span>
                        <span className="text-green-400">$172.37</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Paid on Oct 1, 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="optimization" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-pink-400">Cost Optimization</CardTitle>
                  <CardDescription>AI-powered recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-700/50 rounded-lg border-l-4 border-green-500">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-white">Optimize Storage</p>
                        <Badge className="bg-green-600">Save 23 BTN</Badge>
                      </div>
                      <p className="text-sm text-slate-400 mb-2">Enable compression for 45GB of unused data</p>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Apply Now
                      </Button>
                    </div>
                    <div className="p-3 bg-slate-700/50 rounded-lg border-l-4 border-blue-500">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-white">Right-size Compute</p>
                        <Badge className="bg-blue-600">Save 15 BTN</Badge>
                      </div>
                      <p className="text-sm text-slate-400 mb-2">Reduce instance size during low-traffic hours</p>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Configure
                      </Button>
                    </div>
                    <div className="p-3 bg-slate-700/50 rounded-lg border-l-4 border-purple-500">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-white">Cache Optimization</p>
                        <Badge className="bg-purple-600">Save 8 BTN</Badge>
                      </div>
                      <p className="text-sm text-slate-400 mb-2">Increase cache hit rate for API responses</p>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Enable
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-400">Savings Potential</CardTitle>
                  <CardDescription>Monthly optimization opportunities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <p className="text-2xl font-bold text-green-400">46 BTN</p>
                      <p className="text-sm text-slate-400">Potential Savings</p>
                    </div>
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-400">18.5%</p>
                      <p className="text-sm text-slate-400">Cost Reduction</p>
                    </div>
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-400">$50.60</p>
                      <p className="text-sm text-slate-400">USD Equivalent</p>
                    </div>
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <p className="text-2xl font-bold text-orange-400">3</p>
                      <p className="text-sm text-slate-400">Recommendations</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                    Apply All Optimizations
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
