"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MetaverseHeader } from "@/components/metaverse/metaverse-header"
import { VRMiningInterface } from "@/components/metaverse/vr-mining-interface"
import { ARVisualization } from "@/components/metaverse/ar-visualization"
import { VirtualSpaces } from "@/components/metaverse/virtual-spaces"
import { CrossRealityFeatures } from "@/components/metaverse/cross-reality-features"
import { Cable as Cube, Headphones, Smartphone, Monitor, Zap, Users } from "lucide-react"

export default function MetaversePage() {
  const [vrSupported, setVrSupported] = useState(false)
  const [arSupported, setArSupported] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // Check WebXR support
    if (typeof navigator !== "undefined") {
      setVrSupported("xr" in navigator && "isSessionSupported" in navigator.xr!)
      setArSupported("xr" in navigator && "isSessionSupported" in navigator.xr!)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <MetaverseHeader />

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Device Compatibility Status */}
        <Card className="border-emerald-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cube className="h-5 w-5 text-emerald-600" />
              Device Compatibility
            </CardTitle>
            <CardDescription>
              Check your device&apos;s AR/VR capabilities for BitnunEco metaverse experiences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Headphones className="h-5 w-5 text-emerald-600" />
                  <span className="font-medium">VR Headset</span>
                </div>
                <Badge variant={vrSupported ? "default" : "secondary"}>
                  {vrSupported ? "Supported" : "Not Detected"}
                </Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-teal-600" />
                  <span className="font-medium">AR Mobile</span>
                </div>
                <Badge variant={arSupported ? "default" : "secondary"}>{arSupported ? "Supported" : "Limited"}</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Monitor className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Desktop</span>
                </div>
                <Badge variant="default">Always Supported</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Metaverse Interface */}
        <Tabs defaultValue="vr-mining" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="vr-mining">VR Mining</TabsTrigger>
            <TabsTrigger value="ar-viz">AR Visualization</TabsTrigger>
            <TabsTrigger value="virtual-spaces">Virtual Spaces</TabsTrigger>
            <TabsTrigger value="cross-reality">Cross-Reality</TabsTrigger>
          </TabsList>

          <TabsContent value="vr-mining">
            <VRMiningInterface isConnected={isConnected} setIsConnected={setIsConnected} />
          </TabsContent>

          <TabsContent value="ar-viz">
            <ARVisualization />
          </TabsContent>

          <TabsContent value="virtual-spaces">
            <VirtualSpaces />
          </TabsContent>

          <TabsContent value="cross-reality">
            <CrossRealityFeatures />
          </TabsContent>
        </Tabs>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active VR Miners</p>
                  <p className="text-2xl font-bold text-emerald-600">1,247</p>
                </div>
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-teal-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">AR Sessions Today</p>
                  <p className="text-2xl font-bold text-teal-600">3,892</p>
                </div>
                <Smartphone className="h-8 w-8 text-teal-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Virtual Spaces</p>
                  <p className="text-2xl font-bold text-blue-600">156</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
