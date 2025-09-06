"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FileCode, Zap, Shield, Cpu } from "lucide-react"

export function ContractHeader() {
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <FileCode className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Smart Contract Deployment</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deploy native smart contracts on BitnunEco&apos;s WASM-powered blockchain with zero gas fees and instant
            execution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Instant Deployment</h3>
              <p className="text-sm text-muted-foreground">Deploy contracts in seconds with WASM execution</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Zero Gas Fees</h3>
              <p className="text-sm text-muted-foreground">No transaction costs for contract deployment</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Cpu className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">WASM Native</h3>
              <p className="text-sm text-muted-foreground">High-performance WebAssembly execution</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <FileCode className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Template Library</h3>
              <p className="text-sm text-muted-foreground">Pre-built contracts for common use cases</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
