import React from "react"

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm">
        {/* 윗줄: 좌/우 영역 */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          {/* 왼쪽: 로고 + 한 줄 소개 */}
          <div>
            <div className="text-lg font-bold text-white">NokNokShop</div>
            <p className="text-xs text-gray-400 mt-1">
              작은 설렘을 문 두드리듯, 노크하면 찾아오는 쇼핑몰입니다.
            </p>
          </div>

          {/* 오른쪽: 정보들 */}
          <div className="space-y-1 text-xs sm:text-right">
            <div>사업자명: 노크노크샵</div>
            <div>사업자등록번호: 123-45-67890</div>
            <div>주소: 서울특별시 어딘가 123</div>
            <div>고객센터: 1588-0000 (평일 10:00 ~ 17:00)</div>
          </div>
        </div>

        {/* 아랫줄: 카피라이트 + 약관 링크 */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] text-gray-500">
          <div>© {new Date().getFullYear()} NokNokShop. All rights reserved.</div>
          <div className="flex gap-4">
            <button className="hover:text-gray-300 transition">이용약관</button>
            <button className="hover:text-gray-300 transition">개인정보처리방침</button>
            <button className="hover:text-gray-300 transition">고객센터</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
