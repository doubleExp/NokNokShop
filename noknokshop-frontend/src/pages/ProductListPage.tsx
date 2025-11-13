import React, { useEffect, useState } from "react"
import { ProductCard } from "../ui/components/ProductCard"

type Product = {
  id: number
  name: string
  price: number
  thumbnailUrl?: string
}

export const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // 백엔드 준비 전까지 임시 데이터로 UI 테스트
    setProducts([
      { id: 1, name: "테스트 상품 A", price: 12000 },
      { id: 2, name: "테스트 상품 B", price: 15000 },
      { id: 3, name: "테스트 상품 C", price: 9000 },
    ])
  }, [])

  return (
    <div>
      <h2>상품 목록</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            thumbnailUrl={p.thumbnailUrl}
          />
        ))}
      </div>
    </div>
  )
}
