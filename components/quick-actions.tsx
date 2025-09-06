import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Send, Download, Trophy, Leaf, Users } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "Buy NFT",
      description: "Browse eco-themed NFTs",
      icon: ShoppingBag,
      href: "/marketplace",
      color: "bg-blue-500",
    },
    {
      title: "Send BTN",
      description: "Transfer tokens",
      icon: Send,
      href: "/wallet",
      color: "bg-green-500",
    },
    {
      title: "Claim Rewards",
      description: "Collect achievements",
      icon: Trophy,
      href: "/gamification",
      color: "bg-yellow-500",
    },
    {
      title: "Eco Actions",
      description: "Sustainability tasks",
      icon: Leaf,
      href: "/gamification",
      color: "bg-emerald-500",
    },
    {
      title: "Join Community",
      description: "Connect with others",
      icon: Users,
      href: "/developer",
      color: "bg-purple-500",
    },
    {
      title: "Export Data",
      description: "Download your data",
      icon: Download,
      href: "/wallet",
      color: "bg-gray-500",
    },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-muted"
              asChild
            >
              <a href={action.href}>
                <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center`}>
                  <action.icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground">{action.title}</p>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
  export default QuickActions;
}
