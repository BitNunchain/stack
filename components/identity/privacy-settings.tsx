"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, Globe, Users, AlertTriangle } from "lucide-react"

export function PrivacySettings() {
  const privacyControls = [
    {
      category: "Profile Visibility",
      settings: [
        { name: "Public Profile", description: "Make your profile visible to all users", enabled: true },
        { name: "Show Trading Stats", description: "Display your trading performance publicly", enabled: false },
        { name: "Show Reputation Score", description: "Display your reputation score on profile", enabled: true },
        { name: "Show Achievements", description: "Display earned badges and achievements", enabled: true },
      ],
    },
    {
      category: "Data Sharing",
      settings: [
        { name: "Analytics Sharing", description: "Share anonymized data for platform improvement", enabled: true },
        { name: "Marketing Communications", description: "Receive promotional emails and updates", enabled: false },
        {
          name: "Third-party Integrations",
          description: "Allow verified partners to access basic info",
          enabled: true,
        },
        { name: "Research Participation", description: "Participate in platform research studies", enabled: false },
      ],
    },
    {
      category: "Security & Access",
      settings: [
        { name: "Two-Factor Authentication", description: "Require 2FA for all account access", enabled: true },
        { name: "Biometric Login", description: "Use fingerprint/face recognition for login", enabled: true },
        { name: "Session Monitoring", description: "Monitor and alert on suspicious login activity", enabled: true },
        { name: "API Access Logging", description: "Log all third-party API access attempts", enabled: true },
      ],
    },
  ]

  const dataRetention = [
    {
      type: "Transaction History",
      retention: "7 years",
      required: true,
      description: "Required for regulatory compliance",
    },
    {
      type: "Communication Logs",
      retention: "3 years",
      required: false,
      description: "Support and dispute resolution",
    },
    { type: "Analytics Data", retention: "2 years", required: false, description: "Platform improvement and research" },
    { type: "Marketing Data", retention: "1 year", required: false, description: "Personalized communications" },
  ]

  const connectedApps = [
    { name: "Portfolio Tracker", permissions: ["Read balances", "View transactions"], lastAccess: "2 hours ago" },
    { name: "Tax Calculator", permissions: ["Read transactions", "Export data"], lastAccess: "1 day ago" },
    { name: "Social Trading App", permissions: ["Read profile", "View trades"], lastAccess: "3 days ago" },
  ]

  return (
    <div className="space-y-6">
      {/* Privacy Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Privacy Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">85%</div>
            <p className="text-xs text-emerald-600">Strong privacy</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Data Shared</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Minimal</div>
            <p className="text-xs text-gray-500">Only essential data</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Connected Apps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500">Active connections</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Security Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">High</div>
            <p className="text-xs text-gray-500">All protections enabled</p>
          </CardContent>
        </Card>
      </div>

      {/* Privacy Controls */}
      {privacyControls.map((category) => (
        <Card key={category.category}>
          <CardHeader>
            <CardTitle className="flex items-center">
              {category.category === "Profile Visibility" && <Eye className="h-5 w-5 mr-2 text-emerald-600" />}
              {category.category === "Data Sharing" && <Globe className="h-5 w-5 mr-2 text-emerald-600" />}
              {category.category === "Security & Access" && <Shield className="h-5 w-5 mr-2 text-emerald-600" />}
              {category.category}
            </CardTitle>
            <CardDescription>Control how your {category.category.toLowerCase()} is managed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {category.settings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <Label htmlFor={`${category.category}-${index}`} className="font-medium">
                      {setting.name}
                    </Label>
                    {setting.name.includes("Authentication") && <Badge variant="secondary">Recommended</Badge>}
                  </div>
                  <p className="text-sm text-gray-600">{setting.description}</p>
                </div>
                <Switch id={`${category.category}-${index}`} checked={setting.enabled} />
              </div>
            ))}
          </CardContent>
        </Card>
      ))}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Retention */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="h-5 w-5 mr-2 text-emerald-600" />
              Data Retention
            </CardTitle>
            <CardDescription>How long we keep different types of your data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {dataRetention.map((item, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{item.type}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{item.retention}</Badge>
                    {item.required && <Badge variant="secondary">Required</Badge>}
                  </div>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
                {!item.required && (
                  <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                    Modify Retention
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Connected Apps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-emerald-600" />
              Connected Applications
            </CardTitle>
            <CardDescription>Third-party apps with access to your data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {connectedApps.map((app, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{app.name}</h4>
                  <Button size="sm" variant="outline">
                    Revoke Access
                  </Button>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-600">Permissions: {app.permissions.join(", ")}</p>
                  <p className="text-gray-500">Last access: {app.lastAccess}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Privacy Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
            Privacy Recommendations
          </CardTitle>
          <CardDescription>Suggestions to improve your privacy and security</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-medium text-yellow-800 mb-2">Consider Hiding Trading Stats</h4>
            <p className="text-sm text-yellow-700 mb-3">
              Your trading performance is currently public. Consider making it private to protect your financial
              privacy.
            </p>
            <Button size="sm" variant="outline">
              Update Setting
            </Button>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Review Connected Apps</h4>
            <p className="text-sm text-blue-700 mb-3">
              Some connected apps haven&apos;t been used recently. Consider revoking access to apps you no longer use.
            </p>
            <Button size="sm" variant="outline">
              Review Apps
            </Button>
          </div>
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <h4 className="font-medium text-emerald-800 mb-2">Strong Privacy Settings</h4>
            <p className="text-sm text-emerald-700">
              Your current privacy settings provide strong protection. Keep monitoring and adjusting as needed.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
