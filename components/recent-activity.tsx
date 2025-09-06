import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, ShoppingBag, Trophy, Zap } from "lucide-react"
import { SocialShare } from "./social-share"

export function RecentActivity() {
  const activities = [
    {
      type: "mining",
      title: "Mining Reward",
      description: "Block #45,231 mined",
      amount: "+0.45 BTN",
      time: "2 min ago",
      icon: Zap,
      color: "text-yellow-500",
      shareable: true,
    },
    {
      type: "purchase",
      title: "NFT Purchase",
      description: "Green Forest #123",
      amount: "-15.0 BTN",
      time: "1 hour ago",
      icon: ShoppingBag,
      color: "text-blue-500",
      shareable: true,
    },
    {
      type: "reward",
      title: "Achievement Unlocked",
      description: "Eco Warrior Badge",
      amount: "+5.0 BTN",
      time: "3 hours ago",
      icon: Trophy,
      color: "text-yellow-500",
      shareable: true,
    },
    {
      type: "send",
      title: "Sent BTN",
      description: "To: 0x1234...5678",
      amount: "-10.0 BTN",
      time: "5 hours ago",
      icon: ArrowUpRight,
      color: "text-red-500",
      shareable: false,
    },
    {
      type: "receive",
      title: "Received BTN",
      description: "From: 0x9876...4321",
      amount: "+25.0 BTN",
      time: "1 day ago",
      icon: ArrowDownLeft,
      color: "text-green-500",
      shareable: false,
    },
  ]

  const getShareContent = (activity: (typeof activities)[0]) => {
    switch (activity.type) {
      case "mining":
        return {
          title: `Just mined ${activity.amount} on BitnunEco! 🚀`,
          description: "Earning BTN tokens sustainably through Action Mining on the eco-friendly blockchain!",
          hashtags: ["BitnunEco", "ActionMining", "SustainableBlockchain", "Web3"],
        }
      case "purchase":
        return {
          title: `Just bought ${activity.description} on BitnunEco NFT Marketplace! 🎨`,
          description: "Supporting eco-friendly digital art and sustainable NFTs on BitnunEco!",
          hashtags: ["BitnunEco", "EcoNFT", "SustainableArt", "Web3"],
        }
      case "reward":
        return {
          title: `Achievement Unlocked: ${activity.description}! 🏆`,
          description: `Earned ${activity.amount} for contributing to the sustainable blockchain ecosystem!`,
          hashtags: ["BitnunEco", "Achievement", "EcoWarrior", "Web3"],
        }
      default:
        return {
          title: "Check out my BitnunEco activity! 🌱",
          description: "Building the future of sustainable blockchain technology!",
          hashtags: ["BitnunEco", "Web3", "Sustainable"],
        }
    }
  }

  return (
    <Card className="glass-effect futuristic-border">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Recent Activity
        </CardTitle>
        <SocialShare
          title="Check out my BitnunEco activity! 🚀"
          description="Active in the sustainable blockchain ecosystem - mining, trading, and earning rewards!"
          hashtags={["BitnunEco", "Web3", "SustainableBlockchain", "ActionMining"]}
        />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
            >
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <activity.icon className={`w-5 h-5 ${activity.color}`} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                  {activity.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">{activity.description}</p>
              </div>

              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <Badge
                    variant={activity.amount.startsWith("+") ? "default" : "secondary"}
                    className={`text-xs font-semibold ${
                      activity.amount.startsWith("+") ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white" : ""
                    }`}
                  >
                    {activity.amount}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>

                {activity.shareable && (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <SocialShare {...getShareContent(activity)} className="scale-75" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button
            variant="outline"
            className="glass-effect border-primary/20 hover:bg-primary/10 transition-all duration-300 bg-transparent"
          >
            View All Activity
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
  export default RecentActivity;
