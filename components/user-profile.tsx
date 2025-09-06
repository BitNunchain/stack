"use client"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import type { User } from "@supabase/supabase-js"

interface UserProfile {
  id: string
  username: string
  full_name: string
  avatar_url: string
  reputation_score: number
  level: number
  total_earnings: number
  mining_power: number
  created_at: string
}

function UserProfile() {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
        const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()
        setProfile(profile)
      }
      setLoading(false)
    }

    getUser()
  }, [supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/auth/login")
  }

  if (loading) {
    return (
      <Card className="bg-slate-800/50 border-cyan-500/20 backdrop-blur-xl">
        <CardContent className="p-6">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-12 w-12"></div>
            <div className="flex-1 space-y-2 py-1">
              <div className="h-4 bg-slate-700 rounded w-3/4"></div>
              <div className="h-4 bg-slate-700 rounded w-1/2"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!user || !profile) {
    return (
      <Card className="bg-slate-800/50 border-cyan-500/20 backdrop-blur-xl">
        <CardContent className="p-6 text-center">
          <p className="text-slate-300 mb-4">Please log in to view your profile</p>
          <Button
            onClick={() => router.push("/auth/login")}
            className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
          >
            Login
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-slate-800/50 border-cyan-500/20 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-cyan-400">User Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16 border-2 border-cyan-500/30">
            <AvatarImage src={profile.avatar_url || "/placeholder.svg"} />
            <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-emerald-500 text-white font-bold">
              {profile.full_name?.charAt(0) || user.email?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{profile.full_name || profile.username}</h3>
            <p className="text-slate-300 text-sm">{user.email}</p>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                Level {profile.level}
              </Badge>
              <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                {profile.reputation_score} Rep
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
          <div className="text-center">
            <p className="text-2xl font-bold text-emerald-400">{profile.total_earnings.toFixed(2)}</p>
            <p className="text-sm text-slate-400">BTN Earned</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-cyan-400">{profile.mining_power}</p>
            <p className="text-sm text-slate-400">Mining Power</p>
          </div>
        </div>

        <Button
          onClick={handleSignOut}
          variant="outline"
          className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10 bg-transparent"
        >
          Sign Out
        </Button>
      </CardContent>
    </Card>
  )
}
export default UserProfile;
