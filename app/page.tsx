"use client"

import { useState } from "react"
import LoginPage from "@/components/login-page"
import AnniversaryPage from "@/components/anniversary-page"
import Dashboard from "@/components/dashboard"

type PageView = "login" | "anniversary" | "dashboard"

export default function Home() {
  const [currentView, setCurrentView] = useState<PageView>("login")

  const handleLoginSuccess = () => {
    setCurrentView("anniversary")
  }

  const handleAnniversaryContinue = () => {
    setCurrentView("dashboard")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {currentView === "login" && <LoginPage onSuccess={handleLoginSuccess} />}
      {currentView === "anniversary" && <AnniversaryPage onContinue={handleAnniversaryContinue} />}
      {currentView === "dashboard" && <Dashboard />}
    </main>
  )
}
