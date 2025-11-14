// src/context/AppProviders.tsx
import React from "react"
import { CartProvider } from "./CartContext"
import { AddressProvider } from "./AddressContext"

interface Props {
  children: React.ReactNode
}

export const AppProviders: React.FC<Props> = ({ children }) => {
  return (
    <AddressProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </AddressProvider>
  )
}
