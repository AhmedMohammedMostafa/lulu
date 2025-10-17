"use client"

import { useState } from "react"
import LoginPage from "@/components/login-page"
import Dashboard from "@/components/dashboard"

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {!isAuthenticated ? <LoginPage onSuccess={() => setIsAuthenticated(true)} /> : <Dashboard />}
    </main>
  )
}
