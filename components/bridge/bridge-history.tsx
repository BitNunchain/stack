"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Clock, AlertCircle, ExternalLink, Search } from "lucide-react"

interface BridgeTransaction {
  id: string
  fromNetwork: string
  toNetwork: string
  token: string
  amount: number
  status: "completed" | "pending" | "failed"
  timestamp: string
  txHash: string
  fee: number
}

export function BridgeHistory() {
  const [transactions, setTransactions] = useState<BridgeTransaction[]>([])
  const [filter, setFilter] = useState<"all" | "completed" | "pending" | "failed">("all")
  const handleFilterChange = (value: string) => {
    setFilter(value as "all" | "completed" | "pending" | "failed")
  }
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const mockTransactions: BridgeTransaction[] = [
      {
        id: "1",
        fromNetwork: "Ethereum",
        toNetwork: "Polygon",
        token: "BTN",
        amount: 1000,
        status: "completed",
        timestamp: "2024-01-15T14:30:00Z",
        txHash: "0x1234...5678",
        fee: 25.5,
      },
      {
        id: "2",
        fromNetwork: "Polygon",
        toNetwork: "BSC",
        token: "USDT",
        amount: 500,
        status: "pending",
        timestamp: "2024-01-15T13:45:00Z",
        txHash: "0x9876...4321",
        fee: 0.1,
      },
      {
        id: "3",
        fromNetwork: "BSC",
        toNetwork: "Arbitrum",
        token: "BTN",
        amount: 2500,
        status: "completed",
        timestamp: "2024-01-15T12:20:00Z",
        txHash: "0x5555...7777",
        fee: 0.5,
      },
      {
        id: "4",
        fromNetwork: "Ethereum",
        toNetwork: "Optimism",
        token: "ETH",
        amount: 0.5,
        status: "failed",
        timestamp: "2024-01-15T11:10:00Z",
        txHash: "0x3333...9999",
        fee: 28.2,
      },
    ]

    setTransactions(mockTransactions)
  }, [])

  const filteredTransactions = transactions.filter((tx) => {
    const matchesFilter = filter === "all" || tx.status === filter
    const matchesSearch =
      searchTerm === "" ||
      tx.txHash.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.token.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-emerald-500" />
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />
      case "failed":
        return <AlertCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500"
      case "pending":
        return "bg-yellow-500"
      case "failed":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Filters and Search */}
      <Card className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-emerald-200 dark:border-emerald-800">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search by transaction hash or token..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={filter} onValueChange={handleFilterChange}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Transactions</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Transaction List */}
      <div className="space-y-4">
        {filteredTransactions.length === 0 ? (
          <Card className="p-8 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-emerald-200 dark:border-emerald-800">
            <p className="text-gray-500 dark:text-gray-400">No transactions found</p>
          </Card>
        ) : (
          filteredTransactions.map((tx) => (
            <Card
              key={tx.id}
              className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-emerald-200 dark:border-emerald-800"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Transaction Info */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {tx.fromNetwork[0]}
                    </div>
                    <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {tx.toNetwork[0]}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {tx.amount.toLocaleString()} {tx.token}
                      </span>
                      <Badge variant="secondary" className={`${getStatusColor(tx.status)} text-white`}>
                        {getStatusIcon(tx.status)}
                        <span className="ml-1">{tx.status.toUpperCase()}</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {tx.fromNetwork} → {tx.toNetwork}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(tx.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Transaction Details */}
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Fee: ${tx.fee.toFixed(2)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">{tx.txHash}</p>
                  </div>

                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
