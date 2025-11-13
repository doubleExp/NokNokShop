import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage: React.FC = () => {
  return (
    <div>
      <h2>Welcome to NokNokShop</h2>
      <p>간단한 쇼핑몰 프론트엔드 뼈대입니다.</p>
      <Link to="/products">상품 보러가기</Link>
    </div>
  )
}
