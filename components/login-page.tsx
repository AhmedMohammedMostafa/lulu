"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface LoginPageProps {
  onSuccess: () => void
}

export default function LoginPage({ onSuccess }: LoginPageProps) {
  const [selectedDate, setSelectedDate] = useState("")
  const [error, setError] = useState("")
  const correctDate = "2025-08-27"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedDate === correctDate) {
      onSuccess()
    } else {
      setError("Wrong date! Think about when we said we liked each other... 💕")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 text-4xl floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0.3,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      <Card className="w-full max-w-md p-8 bg-white/95 backdrop-blur border-pink-200 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">Our Love Story</h1>
          <p className="text-pink-500 text-lg italic">A place just for us 💕</p>
        </div>

        <div className="mb-8 text-center">
          <p className="text-gray-700 mb-4 font-semibold">When did we say we liked each other?</p>
          <p className="text-sm text-pink-600 mb-4">(Hint: It was a special day in August 2025 ✨)</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value)
                setError("")
              }}
              className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-gray-700"
            />
          </div>

          {error && (
            <div className="p-3 bg-pink-100 border border-pink-300 rounded-lg text-pink-700 text-sm">{error}</div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Enter Our Love Story 💕
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>This space is for us only...</p>
          <p className="mt-2 text-pink-400">I LOVE YOU ♥</p>
        </div>
      </Card>
    </div>
  )
}
