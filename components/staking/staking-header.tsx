"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Coins, Clock, Users } from "lucide-react"

import React from "react";

type StakingHeaderProps = {
  activeTab: "pools" | "mystakes";
  onTabChange: React.Dispatch<React.SetStateAction<"pools" | "mystakes">>;
};

export function StakingHeader({ activeTab, onTabChange }: StakingHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          BTN Staking Pools
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Stake your BTN tokens and earn rewards while securing the BitnunEco network
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border-emerald-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-emerald-400 font-medium">Total Staked</p>
                <p className="text-2xl font-bold text-white">2.4M BTN</p>
                <p className="text-xs text-gray-400">$12.8M USD</p>
              </div>
              <div className="p-3 bg-emerald-500/20 rounded-full">
                <Coins className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 border-cyan-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-400 font-medium">Average APY</p>
                <p className="text-2xl font-bold text-white">18.5%</p>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  <p className="text-xs text-emerald-400">+2.3%</p>
                </div>
              </div>
              <div className="p-3 bg-cyan-500/20 rounded-full">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-400 font-medium">Active Stakers</p>
                <p className="text-2xl font-bold text-white">15,847</p>
                <p className="text-xs text-gray-400">+234 today</p>
              </div>
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-400 font-medium">Lock Period</p>
                <p className="text-2xl font-bold text-white">30-365d</p>
                <div className="flex gap-1">
                  <Badge variant="outline" className="text-xs border-purple-500/30 text-purple-400">
                    Flexible
                  </Badge>
                </div>
              </div>
              <div className="p-3 bg-purple-500/20 rounded-full">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-500/20 rounded-full">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Maximize Your Rewards</h3>
            <p className="text-gray-400">
              Longer lock periods offer higher APY rates. Choose from flexible staking or fixed-term pools for optimal
              returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
