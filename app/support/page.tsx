"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  AlertCircle,
  Book,
  Video,
  Search,
  Headphones,
} from "lucide-react"

export default function SupportPage() {
  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      status: "Online",
      statusColor: "bg-green-500",
      action: "Start Chat",
      available: "24/7 Support",
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      status: "Active",
      statusColor: "bg-blue-500",
      action: "Send Email",
      available: "Response within 2 hours",
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: Phone,
      status: "Available",
      statusColor: "bg-emerald-500",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM PST",
    },
    {
      title: "Video Call",
      description: "Screen sharing and video assistance",
      icon: Video,
      status: "By Appointment",
      statusColor: "bg-purple-500",
      action: "Schedule Call",
      available: "Premium Support",
    },
  ]

  const quickActions = [
    {
      title: "Submit Ticket",
      description: "Create a support ticket for complex issues",
      icon: AlertCircle,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Knowledge Base",
      description: "Browse our comprehensive documentation",
      icon: Book,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step video guides",
      icon: Video,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Community Forum",
      description: "Get help from the BitnunEco community",
      icon: MessageCircle,
      color: "from-emerald-500 to-teal-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center">
              <Headphones className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            Support Center
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Get the help you need with BitnunEco. Our expert support team is here to assist you 24/7.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              placeholder="Search for help articles, tutorials, or common issues..."
              className="pl-12 h-14 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportChannels.map((channel, index) => (
            <Card
              key={index}
              className="glass-effect futuristic-border group hover:scale-105 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">{channel.title}</CardTitle>
                <CardDescription className="text-slate-300">{channel.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${channel.statusColor}`} />
                  <span className="text-sm text-slate-300">{channel.status}</span>
                </div>
                <p className="text-xs text-slate-400">{channel.available}</p>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:shadow-lg hover:shadow-cyan-500/25">
                  {channel.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                className="glass-effect futuristic-border group hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{action.title}</h3>
                  <p className="text-slate-300 text-sm">{action.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Ticket Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="glass-effect futuristic-border">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <AlertCircle className="w-5 h-5" />
                <span>Submit Support Ticket</span>
              </CardTitle>
              <CardDescription className="text-slate-300">
                Describe your issue and we&apos;ll get back to you within 2 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <Input className="bg-slate-800/50 border-slate-700 text-white" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <Input className="bg-slate-800/50 border-slate-700 text-white" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Priority Level</label>
                <select className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none">
                  <option>Low - General question</option>
                  <option>Medium - Account issue</option>
                  <option>High - Transaction problem</option>
                  <option>Critical - Security concern</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Subject</label>
                <Input
                  className="bg-slate-800/50 border-slate-700 text-white"
                  placeholder="Brief description of your issue"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Description</label>
                <Textarea
                  className="bg-slate-800/50 border-slate-700 text-white min-h-32"
                  placeholder="Please provide detailed information about your issue..."
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:shadow-lg hover:shadow-cyan-500/25">
                Submit Ticket
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-effect futuristic-border">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Support Status</span>
              </CardTitle>
              <CardDescription className="text-slate-300">Current system status and response times</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white">Platform Status</span>
                  <Badge className="bg-green-500 text-white">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Operational
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white">Support Team</span>
                  <Badge className="bg-green-500 text-white">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Available
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white">Average Response Time</span>
                  <span className="text-emerald-400 font-semibold">&lt; 2 hours</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white">Tickets Resolved Today</span>
                  <span className="text-emerald-400 font-semibold">247</span>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-6">
                <h4 className="text-white font-semibold mb-4">Recent Updates</h4>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="text-slate-300">System Maintenance Completed</div>
                    <div className="text-slate-400">2 hours ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-slate-300">New Help Articles Added</div>
                    <div className="text-slate-400">1 day ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-slate-300">Support Team Expanded</div>
                    <div className="text-slate-400">3 days ago</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
