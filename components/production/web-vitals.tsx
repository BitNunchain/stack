"use client"

import { useEffect } from "react"
import * as webVitals from "web-vitals"

interface WebVitalsMetric {
  name: string
  value: number
  rating: "good" | "needs-improvement" | "poor"
  delta: number
  id: string
}

export function WebVitals() {
  useEffect(() => {
    const sendToAnalytics = (metric: WebVitalsMetric) => {
      // Send to your analytics service
      if (process.env.NODE_ENV === "production") {
        // Example: Send to Google Analytics
        if (typeof window !== "undefined" && (window as any).gtag) {
          ;(window as any).gtag("event", metric.name, {
            event_category: "Web Vitals",
            event_label: metric.id,
            value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
            non_interaction: true,
          })
        }

        // Log for debugging in development
        console.log("[v0] Web Vitals:", {
          name: metric.name,
          value: metric.value,
          rating: metric.rating,
          delta: metric.delta,
        })
      }
    }

  // Measure Core Web Vitals
  webVitals.onCLS(sendToAnalytics)
  webVitals.onFCP(sendToAnalytics)
  webVitals.onLCP(sendToAnalytics)
  webVitals.onTTFB(sendToAnalytics)
  }, [])

  return null
}
