import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="header-spacer" />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
