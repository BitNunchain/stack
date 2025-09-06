"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Upload, ImageIcon, Zap } from "lucide-react"
import Image from "next/image"

export function CreateNFTForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    rarity: "",
    price: "",
    royalty: "5",
    supply: "1",
  })

  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string>("")

  const categories = [
    "Nature & Wildlife",
    "Renewable Energy",
    "Ocean Conservation",
    "Forest Protection",
    "Climate Action",
    "Sustainable Living",
  ]

  const rarities = [
    { value: "common", label: "Common", color: "bg-gray-500" },
    { value: "uncommon", label: "Uncommon", color: "bg-green-500" },
    { value: "rare", label: "Rare", color: "bg-blue-500" },
    { value: "epic", label: "Epic", color: "bg-purple-500" },
    { value: "legendary", label: "Legendary", color: "bg-yellow-500" },
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle NFT creation logic here
    console.log("Creating NFT:", formData, uploadedFile)
  }

  const estimatedGas = 0.05
  const creationFee = 2.5

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* File Upload */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Upload Artwork</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {!previewUrl ? (
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                        <Upload className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Upload your artwork</p>
                        <p className="text-sm text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          if (typeof window !== "undefined" && typeof document !== "undefined") {
                            const fileInput = document.getElementById("file-upload") as HTMLInputElement | null;
                            if (fileInput) {
                              fileInput.click();
                            }
                          }
                        }}
                      >
                        Choose File
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <Image
                      src={previewUrl || "/placeholder.svg"}
                      alt="Preview"
                      width={800}
                      height={256}
                      className="w-full h-64 object-cover rounded-lg"
                      style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                      priority
                    />
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => {
                        setPreviewUrl("");
                        setUploadedFile(null);
                      }}
                    >
                      Change
                    </Button>
                  </div>
                )}
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  title="Upload your artwork"
                  placeholder="Choose artwork file"
                />
              </div>
            </CardContent>
          </Card>
          {/* NFT Details */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">NFT Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter NFT name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your NFT"
                />
              </div>
              <div>
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="rarity">Rarity *</Label>
                <Select
                  value={formData.rarity}
                  onValueChange={(value) => setFormData({ ...formData, rarity: value })}
                >
                  <SelectTrigger id="rarity">
                    <SelectValue placeholder="Select rarity" />
                  </SelectTrigger>
                  <SelectContent>
                    {rarities.map((r) => (
                      <SelectItem key={r.value} value={r.value}>
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${r.color}`}></span>
                        {r.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="price">Price (ETH) *</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="Enter price in ETH"
                  required
                  min="0"
                  step="0.01"
                />
              </div>
              <div>
                <Label htmlFor="royalty">Royalty (%)</Label>
                <Input
                  id="royalty"
                  type="number"
                  value={formData.royalty}
                  onChange={(e) => setFormData({ ...formData, royalty: e.target.value })}
                  placeholder="Enter royalty percentage"
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>
              <div>
                <Label htmlFor="supply">Supply</Label>
                <Input
                  id="supply"
                  type="number"
                  value={formData.supply}
                  onChange={(e) => setFormData({ ...formData, supply: e.target.value })}
                  placeholder="Number of NFTs to mint"
                  min="1"
                  step="1"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Preview */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {previewUrl ? (
                  <Image
                    src={previewUrl}
                    alt="NFT Preview"
                    width={800}
                    height={192}
                    className="w-full h-48 object-cover rounded-lg"
                    style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                    priority
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-muted rounded-lg">
                    <ImageIcon className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}
                <div>
                  <p className="font-semibold">{formData.name || "NFT Name"}</p>
                  <p className="text-sm text-muted-foreground">{formData.description || "NFT Description"}</p>
                  {formData.rarity && (
                    <Badge className="mt-2">
                      {rarities.find((r) => r.value === formData.rarity)?.label || formData.rarity}
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Cost Breakdown */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Cost Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span>Estimated Gas</span>
                <span>{estimatedGas} ETH</span>
              </div>
              <div className="flex justify-between">
                <span>Creation Fee</span>
                <span>{creationFee} USDT</span>
              </div>
            </CardContent>
          </Card>
          {/* Create Button */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={!formData.name || !formData.category || !formData.rarity || !formData.price || !uploadedFile}
          >
            <Zap className="w-4 h-4 mr-2" />
            Create NFT
          </Button>
        </div>
      </div>
    </form>
  );
}
