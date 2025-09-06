"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Star, TrendingUp, TrendingDown } from "lucide-react"

export interface Token {
  symbol: string
  name: string
  price: number
  change24h: number
  volume24h: number
  balance: number
  logo: string
  popular: boolean
}

interface TokenSelectorProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (token: Token) => void
  selectedToken?: Token
}

export function TokenSelector({ isOpen, onClose, onSelect, selectedToken }: TokenSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState<"all" | "popular" | "my-tokens">("all")

  const tokens: Token[] = [
    {
      symbol: "BTN",
      name: "BitnunEco Token",
      price: 5.35,
      change24h: 5.2,
      volume24h: 2400000,
      balance: 15000,
      logo: "/placeholder.svg?height=32&width=32",
      popular: true,
    },
    {
      symbol: "USDT",
      name: "Tether USD",
      price: 1.0,
      change24h: 0.01,
      volume24h: 8500000,
      balance: 50000,
      logo: "/placeholder.svg?height=32&width=32",
      popular: true,
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: 2650.0,
      change24h: -2.1,
      volume24h: 1200000,
      balance: 5.5,
      logo: "/placeholder.svg?height=32&width=32",
      popular: true,
    },
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: 43250.0,
      change24h: 3.8,
      volume24h: 950000,
      balance: 0.25,
      logo: "/placeholder.svg?height=32&width=32",
      popular: true,
    },
    {
      symbol: "USDC",
      name: "USD Coin",
      price: 1.0,
      change24h: 0.0,
      volume24h: 650000,
      balance: 25000,
      logo: "/placeholder.svg?height=32&width=32",
      popular: false,
    },
    {
      symbol: "BNB",
      name: "BNB",
      price: 315.5,
      change24h: 1.5,
      volume24h: 420000,
      balance: 12.8,
      logo: "/placeholder.svg?height=32&width=32",
      popular: false,
    },
  ]

  const filteredTokens = tokens.filter((token) => {
    const matchesSearch =
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.name.toLowerCase().includes(searchQuery.toLowerCase())

    switch (filter) {
      case "popular":
        return matchesSearch && token.popular
      case "my-tokens":
        return matchesSearch && token.balance > 0
      default:
        return matchesSearch
    }
  })

  const handleTokenSelect = (token: Token) => {
    onSelect(token)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">Select Token</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search tokens..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            {[
              { key: "all", label: "All" },
              { key: "popular", label: "Popular" },
              { key: "my-tokens", label: "My Tokens" },
            ].map(({ key, label }) => (
              <Button
                key={key}
                variant={filter === key ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(key as any)}
                className={filter === key ? "bg-emerald-600 hover:bg-emerald-700" : "border-gray-700"}
              >
                {label}
              </Button>
            ))}
          </div>

          {/* Popular Tokens */}
          {filter === "all" && (
            <div className="space-y-2">
              <p className="text-sm text-gray-400 font-medium">Popular Tokens</p>
              <div className="flex flex-wrap gap-2">
                {tokens
                  .filter((t) => t.popular)
                  .map((token) => (
                    <Badge
                      key={token.symbol}
                      variant="outline"
                      className="cursor-pointer border-gray-700 hover:border-emerald-500 hover:text-emerald-400"
                      onClick={() => handleTokenSelect(token)}
                    >
                      {token.symbol}
                    </Badge>
                  ))}
              </div>
            </div>
          )}

          {/* Token List */}
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {filteredTokens.map((token) => (
              <div
                key={token.symbol}
                className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                  selectedToken?.symbol === token.symbol
                    ? "bg-emerald-500/10 border-emerald-500/30"
                    : "bg-gray-800/50 border-gray-700 hover:border-emerald-500/30 hover:bg-gray-800"
                }`}
                onClick={() => handleTokenSelect(token)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={token.logo || "/placeholder.svg"} alt={token.symbol} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{token.symbol}</span>
                        {token.popular && <Star className="w-3 h-3 text-yellow-400 fill-current" />}
                      </div>
                      <p className="text-sm text-gray-400">{token.name}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold text-white">${token.price.toLocaleString()}</p>
                    <div className="flex items-center gap-1">
                      {token.change24h > 0 ? (
                        <TrendingUp className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-red-400" />
                      )}
                      <span className={`text-sm ${token.change24h > 0 ? "text-emerald-400" : "text-red-400"}`}>
                        {token.change24h > 0 ? "+" : ""}
                        {token.change24h}%
                      </span>
                    </div>
                  </div>
                </div>

                {token.balance > 0 && (
                  <div className="mt-2 pt-2 border-t border-gray-700">
                    <p className="text-sm text-gray-400">
                      Balance: <span className="text-white font-medium">{token.balance.toLocaleString()}</span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredTokens.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-400">No tokens found</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
