"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, Upload, CheckCircle, AlertCircle, Clock } from "lucide-react"

interface KYCVerificationProps {
  onVerificationComplete?: (level: string) => void
}

export default function KYCVerification({ onVerificationComplete }: KYCVerificationProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [verificationLevel, setVerificationLevel] = useState<"basic" | "advanced" | "premium">("basic")
  const [uploading, setUploading] = useState(false)

  const verificationLevels = [
    {
      level: "basic",
      name: "Basic Verification",
      limits: "$1,000/day",
      requirements: ["Email verification", "Phone verification"],
      icon: <Shield className="h-5 w-5 text-cyan-400" />,
    },
    {
      level: "advanced",
      name: "Advanced Verification",
      limits: "$10,000/day",
      requirements: ["Government ID", "Proof of address", "Selfie verification"],
      icon: <CheckCircle className="h-5 w-5 text-emerald-400" />,
    },
    {
      level: "premium",
      name: "Premium Verification",
      limits: "Unlimited",
      requirements: ["Enhanced due diligence", "Source of funds", "Video call verification"],
      icon: <AlertCircle className="h-5 w-5 text-yellow-400" />,
    },
  ]

  const handleFileUpload = async (file: File, documentType: string) => {
    setUploading(true)

    // Simulate file upload
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setUploading(false)
    setCurrentStep(currentStep + 1)
  }

  const handleVerificationSubmit = () => {
    onVerificationComplete?.(verificationLevel)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Verification Level Selection */}
      <Card className="bg-slate-800/50 border-cyan-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Shield className="h-5 w-5 text-cyan-400" />
            <span>KYC Verification</span>
          </CardTitle>
          <CardDescription>Choose your verification level to unlock higher limits</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {verificationLevels.map((level) => (
              <div
                key={level.level}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  verificationLevel === level.level
                    ? "border-cyan-400 bg-cyan-500/10"
                    : "border-slate-600 bg-slate-700/30 hover:border-slate-500"
                }`}
                onClick={() => setVerificationLevel(level.level as any)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  {level.icon}
                  <div>
                    <h3 className="font-medium text-white">{level.name}</h3>
                    <p className="text-sm text-emerald-400">{level.limits}</p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {level.requirements.map((req, index) => (
                    <li key={index} className="text-xs text-slate-400 flex items-center space-x-2">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Verification Progress */}
      <Card className="bg-slate-800/50 border-cyan-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Verification Progress</CardTitle>
          <CardDescription>Complete the steps below to verify your identity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300">Step {currentStep} of 4</span>
              <span className="text-cyan-400">{Math.round((currentStep / 4) * 100)}% Complete</span>
            </div>
            <Progress value={(currentStep / 4) * 100} className="h-2" />
          </div>

          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Personal Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-slate-300">
                    First Name
                  </Label>
                  <Input id="firstName" placeholder="John" className="bg-slate-700/50 border-slate-600 text-white" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-slate-300">
                    Last Name
                  </Label>
                  <Input id="lastName" placeholder="Doe" className="bg-slate-700/50 border-slate-600 text-white" />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth" className="text-slate-300">
                    Date of Birth
                  </Label>
                  <Input id="dateOfBirth" type="date" className="bg-slate-700/50 border-slate-600 text-white" />
                </div>
                <div>
                  <Label htmlFor="nationality" className="text-slate-300">
                    Nationality
                  </Label>
                  <Input
                    id="nationality"
                    placeholder="United States"
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                </div>
              </div>
              <Button
                onClick={() => setCurrentStep(2)}
                className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
              >
                Continue
              </Button>
            </div>
          )}

          {/* Step 2: Document Upload */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Document Upload</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 border-2 border-dashed border-slate-600 rounded-lg text-center hover:border-cyan-400/50 transition-colors">
                  <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-white font-medium">Government ID</p>
                  <p className="text-sm text-slate-400">Passport, Driver&apos;s License, or National ID</p>
                  <Button
                    variant="outline"
                    className="mt-3 border-cyan-500/30 hover:border-cyan-400/50 bg-transparent"
                    disabled={uploading}
                  >
                    {uploading ? "Uploading..." : "Upload Document"}
                  </Button>
                </div>
                <div className="p-6 border-2 border-dashed border-slate-600 rounded-lg text-center hover:border-cyan-400/50 transition-colors">
                  <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-white font-medium">Proof of Address</p>
                  <p className="text-sm text-slate-400">Utility bill or bank statement</p>
                  <Button
                    variant="outline"
                    className="mt-3 border-cyan-500/30 hover:border-cyan-400/50 bg-transparent"
                    disabled={uploading}
                  >
                    {uploading ? "Uploading..." : "Upload Document"}
                  </Button>
                </div>
              </div>
              <Button
                onClick={() => setCurrentStep(3)}
                className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
              >
                Continue
              </Button>
            </div>
          )}

          {/* Step 3: Selfie Verification */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Selfie Verification</h3>
              <div className="text-center p-8 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="w-32 h-32 bg-slate-600/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Upload className="h-12 w-12 text-slate-400" />
                </div>
                <p className="text-white font-medium mb-2">Take a selfie</p>
                <p className="text-sm text-slate-400 mb-4">Hold your ID next to your face</p>
                <Button
                  variant="outline"
                  className="border-cyan-500/30 hover:border-cyan-400/50 bg-transparent"
                  disabled={uploading}
                >
                  {uploading ? "Processing..." : "Take Selfie"}
                </Button>
              </div>
              <Button
                onClick={() => setCurrentStep(4)}
                className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
              >
                Continue
              </Button>
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Review & Submit</h3>
              <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Verification Level</span>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                    {verificationLevels.find((l) => l.level === verificationLevel)?.name}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Daily Limit</span>
                  <span className="text-white">
                    {verificationLevels.find((l) => l.level === verificationLevel)?.limits}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Processing Time</span>
                  <span className="text-cyan-400 flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>1-3 business days</span>
                  </span>
                </div>
              </div>
              <Button
                onClick={handleVerificationSubmit}
                className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
              >
                Submit for Verification
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
