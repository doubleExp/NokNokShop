import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const HomePage: React.FC = () => {
  const banners = [
    {
      id: 1,
      image: "https://via.placeholder.com/1200x400/ff6f61/ffffff?text=Banner+1",
      alt: "배너1",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/1200x400/ffc107/ffffff?text=Banner+2",
      alt: "배너2",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/1200x400/4caf50/ffffff?text=Banner+3",
      alt: "배너3",
    },
  ]

  const products = [
    { id: 1, name: "상품명 1", price: 15000, img: "https://via.placeholder.com/300x300" },
    { id: 2, name: "상품명 2", price: 22000, img: "https://via.placeholder.com/300x300" },
    { id: 3, name: "상품명 3", price: 19000, img: "https://via.placeholder.com/300x300" },
    { id: 4, name: "상품명 4", price: 12000, img: "https://via.placeholder.com/300x300" },
  ]

  const [current, setCurrent] = useState(0)

  // 3초마다 자동 슬라이드
  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => window.clearInterval(id)
  }, [banners.length])

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % banners.length)
  }

  const handleDotClick = (index: number) => {
    setCurrent(index)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      {/* 메인 배너 슬라이더 */}
      <section className="relative">
        <div className="overflow-hidden rounded-2xl shadow-md">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {banners.map((banner) => (
              <img
                key={banner.id}
                src={banner.image}
                alt={banner.alt}
                className="w-full h-[220px] sm:h-[320px] object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* 좌우 이동 버튼 */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-8 h-8 rounded-full items-center justify-center hover:bg-black/60 transition"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-8 h-8 rounded-full items-center justify-center hover:bg-black/60 transition"
        >
          ›
        </button>

        {/* 아래 점 네비게이션 */}
        <div className="flex justify-center gap-2 mt-3">
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              onClick={() => handleDotClick(index)}
              className={
                "w-2.5 h-2.5 rounded-full transition " +
                (index === current ? "bg-blue-500" : "bg-gray-300")
              }
            />
          ))}
        </div>
      </section>

      {/* 안내 문구 */}
      <section className="bg-gray-100 rounded-2xl px-6 py-5 text-sm text-gray-700">
        <p>
          <span className="font-semibold">NokNokShop</span> 에서 오늘의 신상품을 확인해보세요.
          <br className="hidden sm:block" />
          마음에 드는 상품을 클릭하면 상세 페이지로 이동합니다.
        </p>
      </section>

      {/* NEW 상품 리스트 */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">NEW</h2>
          <Link
            to="/products"
            className="text-sm text-blue-500 hover:text-blue-600"
          >
            전체 상품 보러가기 →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="border border-gray-200 rounded-xl p-4 text-center hover:shadow-md hover:-translate-y-1 transition"
            >
              <Link to={`/products/${p.id}`} className="block">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="text-sm font-semibold mb-1 truncate">
                  {p.name}
                </h3>
                <p className="text-orange-500 font-bold">
                  ₩{p.price.toLocaleString()}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
