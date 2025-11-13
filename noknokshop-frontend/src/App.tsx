import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProductListPage } from './pages/ProductListPage'
import { ProductDetailPage } from './pages/ProductDetailPage'

const App: React.FC = () => {
  return (
    <div>
      <header style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
        <h1>NokNokShop</h1>
        <nav style={{ display: 'flex', gap: '8px' }}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>
      <main style={{ padding: '16px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
