import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      <Card className="bg-slate-800/50 border-cyan-500/20 backdrop-blur-xl max-w-md w-full relative z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            404
          </CardTitle>
          <p className="text-slate-300 text-lg">Page Not Found</p>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-slate-400">The page you&apos;re looking for doesn&apos;t exist in the BitnunEco ecosystem.</p>
          <div className="space-y-2">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
            >
              <Link href="/">Return to Dashboard</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
            >
              <Link href="/marketplace">Explore Marketplace</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
