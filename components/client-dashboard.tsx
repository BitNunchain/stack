"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

// Dynamic imports with ssr: false to prevent server-side execution
const DashboardStats = dynamic(() => import("./dashboard-stats").then(mod => mod.default), {
  ssr: false,
  loading: () => <Skeleton className="h-32 w-full" />,
})

const MiningPanel = dynamic(() => import("./mining-panel").then(mod => mod.default), {
  ssr: false,
  loading: () => <Skeleton className="h-48 w-full" />,
})

const RecentActivity = dynamic(() => import("./recent-activity").then(mod => mod.default), {
  ssr: false,
  loading: () => <Skeleton className="h-64 w-full" />,
})

const QuickActions = dynamic(() => import("./quick-actions").then(mod => mod.default), {
  ssr: false,
  loading: () => <Skeleton className="h-40 w-full" />,
})

const UserProfile = dynamic(() => import("./user-profile").then(mod => mod.default), {
  ssr: false,
  loading: () => <Skeleton className="h-24 w-full" />,
})

const SocialFeed = dynamic(() => import("./social-feed").then(mod => mod.SocialFeed), {
  ssr: false,
  loading: () => <Skeleton className="h-96 w-full" />,
})

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Suspense fallback={<Skeleton className="h-24 w-full" />}>
          <UserProfile />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-32 w-full" />}>
          <DashboardStats />
        </Suspense>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Suspense fallback={<Skeleton className="h-48 w-full" />}>
              <MiningPanel />
            </Suspense>

            <Suspense fallback={<Skeleton className="h-40 w-full" />}>
              <QuickActions />
            </Suspense>
          </div>

          <div className="space-y-8">
            <Suspense fallback={<Skeleton className="h-64 w-full" />}>
              <RecentActivity />
            </Suspense>

            <Suspense fallback={<Skeleton className="h-96 w-full" />}>
              <SocialFeed />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
