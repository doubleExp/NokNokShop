import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Product = {
  id: number
  name: string
  price: number
  description?: string
}

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    if (!id) return
    fetch(`http://localhost:8080/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err))
  }, [id])

  if (!product) {
    return <p>상품 정보를 불러오는 중입니다...</p>
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>가격: {product.price.toLocaleString()}원</p>
      {product.description && <p>{product.description}</p>}
    </div>
  )
}
