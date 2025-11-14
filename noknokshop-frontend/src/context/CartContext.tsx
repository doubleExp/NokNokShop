// src/context/CartContext.tsx
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react"

// 장바구니 아이템 타입
export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  imageUrl?: string
}

// Context 안에서 사용할 값 타입
interface CartContextValue {
  items: CartItem[]
  addItem: (item: CartItem) => void
  updateQuantity: (id: number, quantity: number) => void
  removeItem: (id: number) => void
  clear: () => void
  totalCount: number
  totalPrice: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([])

  // 장바구니에 상품 추가
  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id)
      if (existing) {
        // 이미 있는 상품이면 수량만 증가
        return prev.map((p) =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        )
      }
      return [...prev, item]
    })
  }

  // 수량 변경 (0 이하면 제거)
  const updateQuantity = (id: number, quantity: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, quantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  // 상품 하나 삭제
  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  // 전체 비우기
  const clear = () => setItems([])

  // 총 개수 / 총 금액 계산
  const { totalCount, totalPrice } = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    const price = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
    return { totalCount: count, totalPrice: price }
  }, [items])

  const value: CartContextValue = {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clear,
    totalCount,
    totalPrice,
  }

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

export const useCart = (): CartContextValue => {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider")
  }
  return ctx
}
