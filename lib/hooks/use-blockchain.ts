"use client"

import { useState, useEffect, useCallback } from "react"
import { createClient } from "@/lib/supabase/client"

let enhancedBlockchainNode: any = null

const getBlockchainNode = async () => {
  if (typeof window === "undefined") return null

  if (!enhancedBlockchainNode) {
    try {
  const wasmModule = await import("../blockchain/enhanced-wasm-node")
  enhancedBlockchainNode = wasmModule.getEnhancedBlockchainNode()
    } catch (error) {
      console.error("[v0] Failed to load blockchain node:", error)
      return null
    }
  }
  return enhancedBlockchainNode
}

export function useBlockchain() {
  const [stats, setStats] = useState({
    nodeId: "node_" + Math.random().toString(36).substr(2, 9),
    peersConnected: 0,
    blocksInChain: 0,
    pendingTransactions: 0,
    miningActive: false,
    actionRewards: 0,
    totalBalance: 0,
  })

  const [isConnected, setIsConnected] = useState(false)
  const [transactions, setTransactions] = useState<any[]>([])
  const [user, setUser] = useState<any>(null)

  const supabase = createClient()

  useEffect(() => {
    if (typeof window === "undefined") return

    const initializeUser = async () => {
      try {
        const {
          data: { user: authUser },
        } = await supabase.auth.getUser()
        if (authUser) {
          setUser(authUser)

          // Sync user profile with blockchain stats
          const { data: profile } = await supabase.from("profiles").select("*").eq("id", authUser.id).single()

          if (profile) {
            // Initialize blockchain node with user data
            const node = await getBlockchainNode()
            if (node) {
              node.setUserId(authUser.id)
              node.setWalletAddress(profile.wallet_address)
            }
          }
        }
      } catch (error) {
        console.error("[v0] User initialization failed:", error)
      }
    }

    initializeUser()
  }, [supabase])

  useEffect(() => {
    if (typeof window === "undefined") return

    const updateStats = async () => {
      try {
        const node = await getBlockchainNode()
        if (!node) return

        const networkStats = node.getNetworkStats()
        setStats(networkStats)
        setIsConnected(true)

        if (user && networkStats.miningActive) {
          await supabase.from("mining_sessions").upsert(
            {
              user_id: user.id,
              session_start: new Date().toISOString(),
              blocks_mined: networkStats.blocksInChain,
              btn_earned: networkStats.actionRewards,
              hash_rate: networkStats.hashRate || 0,
              mining_power: 1,
              session_type: "action_mining",
            },
            {
              onConflict: "user_id,session_start",
            },
          )
        }

        if (user) {
          await supabase
            .from("profiles")
            .update({
              total_earnings: networkStats.totalBalance,
              mining_power: networkStats.miningActive ? 1 : 0,
              last_mining_session: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            })
            .eq("id", user.id)
        }
      } catch (error) {
        console.error("[v0] Stats update failed:", error)
      }
    }

    const interval = setInterval(updateStats, 2000)
    updateStats()

    return () => clearInterval(interval)
  }, [user, supabase])

  const recordAction = useCallback(
    async (actionType: string, metadata: any = {}) => {
      if (typeof window === "undefined") return { reward: 0, multiplier: 1 }

      try {
        const node = await getBlockchainNode()
        if (!node) {
          const fallbackReward = Math.random() * 5
          console.log(`[v0] Fallback action recorded: ${actionType} with reward: ${fallbackReward}`)
          return { reward: fallbackReward, multiplier: 1 }
        }

        const actionResult = node.recordAction(actionType, metadata)

        if (user) {
          await supabase.from("action_mining_events").insert({
            user_id: user.id,
            action_type: actionType,
            action_data: metadata,
            reward_multiplier: actionResult.multiplier || 1.0,
            btn_reward: actionResult.reward || 0,
            timestamp: new Date().toISOString(),
          })
        }

        console.log(`[v0] Recorded action: ${actionType} with reward: ${actionResult.reward}`)
        return actionResult
      } catch (error) {
        console.error("[v0] Action recording failed:", error)
        return { reward: 0, multiplier: 1 }
      }
    },
    [user, supabase],
  )

  const startMining = useCallback(async () => {
    if (typeof window === "undefined") return

    try {
      const node = await getBlockchainNode()
      if (node) {
        node.startMining()
      }

      setStats((prev) => ({ ...prev, miningActive: true }))

      if (user) {
        await supabase.from("mining_sessions").insert({
          user_id: user.id,
          session_start: new Date().toISOString(),
          session_type: "browser_mining",
          mining_power: 1,
        })
      }

      console.log("[v0] Mining started")
    } catch (error) {
      console.error("[v0] Mining start failed:", error)
    }
  }, [user, supabase])

  const stopMining = useCallback(async () => {
    if (typeof window === "undefined") return

    try {
      const node = await getBlockchainNode()
      if (node) {
        node.stopMining()
      }

      setStats((prev) => ({ ...prev, miningActive: false }))

      if (user) {
        await supabase
          .from("mining_sessions")
          .update({
            session_end: new Date().toISOString(),
            btn_earned: stats.actionRewards,
          })
          .eq("user_id", user.id)
          .is("session_end", null)
      }

      console.log("[v0] Mining stopped")
    } catch (error) {
      console.error("[v0] Mining stop failed:", error)
    }
  }, [user, stats.actionRewards, supabase])

  const createTransaction = useCallback(
    async (to: string, amount: number, type: "BTN" | "NFT" = "BTN") => {
      if (typeof window === "undefined") return

      try {
        const node = await getBlockchainNode()
        if (!node) return

        const transaction = await node.createTransaction(to, amount, type)

        if (user) {
          await supabase.from("transactions").insert({
            tx_hash: transaction.hash,
            from_address: transaction.from,
            to_address: to,
            amount: amount,
            transaction_type: type.toLowerCase(),
            status: "pending",
            data: transaction.metadata || {},
            created_at: new Date().toISOString(),
          })
        }

        setTransactions((prev) => [transaction, ...prev])
        console.log(`[v0] Transaction created: ${transaction.hash}`)
        return transaction
      } catch (error) {
        console.error("[v0] Transaction creation failed:", error)
        throw error
      }
    },
    [user, supabase],
  )

  const getBalance = useCallback(async () => {
    if (typeof window === "undefined") return 0

    try {
      const node = await getBlockchainNode()
      if (!node) return 0

      const blockchainBalance = node.getBalance()

      if (user) {
        await supabase
          .from("profiles")
          .update({
            total_earnings: blockchainBalance,
            updated_at: new Date().toISOString(),
          })
          .eq("id", user.id)
      }

      return blockchainBalance
    } catch (error) {
      console.error("[v0] Balance fetch failed:", error)
      return 0
    }
  }, [user, supabase])

  useEffect(() => {
    if (!user) return

    const channel = supabase
      .channel("transactions")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "transactions",
          filter: `from_address=eq.${stats.nodeId}`,
        },
        (payload) => {
          console.log("[v0] Real-time transaction update:", payload)
          // Update local transaction state
          if (payload.eventType === "INSERT") {
            setTransactions((prev) => [payload.new, ...prev])
          }
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [user, stats.nodeId, supabase])

  useEffect(() => {
    if (!user) return

    const channel = supabase
      .channel("mining_sessions")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "mining_sessions",
          filter: `user_id=eq.${user.id}`,
        },
        (payload) => {
          console.log("[v0] Real-time mining session update:", payload)
          // Update mining stats based on database changes
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [user, supabase])

  return {
    stats,
    isConnected,
    transactions,
    user,
    recordAction,
    startMining,
    stopMining,
    createTransaction,
    getBalance,
  }
}
