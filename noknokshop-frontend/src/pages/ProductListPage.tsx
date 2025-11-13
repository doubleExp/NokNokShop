import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Product = {
  id: number
  name: string
  price: number
}

export const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div>
      <h2>상품 목록</h2>
      {products.length === 0 && <p>상품이 없습니다.</p>}
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>
              {p.name} - {p.price.toLocaleString()}원
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
