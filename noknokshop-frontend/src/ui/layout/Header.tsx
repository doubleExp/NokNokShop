import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* 로고 */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/iclogo.png" alt="로고" className="w-10 h-10 object-contain" />
          <span className="text-xl font-extrabold text-blue-600">NokNokShop</span>
        </Link>

        {/* 우측 아이콘 */}
        <div className="flex items-center gap-4 text-sm">
          <Link to="/login" className="hover:text-blue-600 transition">
            👤 LOGIN
          </Link>
          <Link to="/mypage" className="hover:text-blue-600 transition">
            📁 MYPAGE
          </Link>
          <Link to="/cart" className="relative hover:text-blue-600 transition">
            🛒
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] px-1 rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* 카테고리 네비 */}
      <nav className="bg-black">
        <ul className="max-w-6xl mx-auto flex text-sm text-white">
          <li className="px-4 py-2 hover:bg-indigo-600 transition">
            <Link to="/order-custom">주문제작</Link>
          </li>
          <li className="px-4 py-2 hover:bg-indigo-600 transition">
            <Link to="/stamps">꒰스탬프꒱</Link>
          </li>
          <li className="px-4 py-2 hover:bg-indigo-600 transition">
            <Link to="/stationery">문구ミ✭엽서</Link>
          </li>
          <li className="px-4 py-2 hover:bg-indigo-600 transition">
            <Link to="/props">⋰˚소품⋰˚</Link>
          </li>
          <li className="px-4 py-2 hover:bg-indigo-600 transition">
            <Link to="/review">REVIEW</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
