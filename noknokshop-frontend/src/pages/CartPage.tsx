import React from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useAddress } from "../context/AddressContext"

export const CartPage: React.FC = () => {
  const { items, addItem } = useCart()  // 👈 장바구니 목록 가져오기
  const { selectedAddress } = useAddress()  // 👈 주소 목록 가져오기

  const handleAddDummyItem = () => {
    addItem({
      id: 1,
      name: "테스트 상품 1",
      price: 12000,
      quantity: 1,
      imageUrl: undefined,
    })
  }

  // 🟥 장바구니가 비었을 때 화면
  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-14 text-center">
        <h1 className="text-2xl font-bold mb-4">장바구니</h1>

        <div className="inline-block px-6 py-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
          <p className="text-base font-medium text-gray-700 mb-1">
            장바구니에 담긴 상품이 없습니다.
          </p>
          <p className="text-sm text-gray-400 mb-5">
            마음에 드는 상품을 담고 주문을 시작해보세요 ✨
          </p>

          <div className="flex justify-center gap-3 text-sm">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
            >
              홈으로
            </Link>
            <Link
              to="/products"
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              상품 보러가기
            </Link>
          </div>

        {/* 🔧 개발용: 나중에 지워도 되는 테스트 버튼 */}
        <button
          type="button"
          onClick={handleAddDummyItem}
          className="mt-4 text-xs text-gray-400 hover:text-gray-600"
        >
          (임시) 테스트 상품 장바구니에 담기
        </button>

        </div>
      </div>
    )
  }

  // 🟦 장바구니에 상품이 있을 때 기본 화면 (임시 구조)
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">장바구니</h1>

      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        {/* 왼쪽: 장바구니 상품 리스트 (나중에 구현) */}
        <div className="border border-dashed border-gray-300 rounded-xl p-6 text-sm text-gray-500">
          <p className="mb-2 font-medium text-gray-700">
            장바구니에 담긴 상품 목록
          </p>
          <p>이 영역에 담긴 상품들이 카드 형태로 표시될 예정입니다.</p>
          <p className="mt-1 text-xs text-gray-400">
            (상품 추가 기능 구현 후 실제 데이터가 들어옵니다.)
          </p>
        </div>

        {/* 오른쪽: 배송지 박스 */}
<div className="border border-gray-200 rounded-xl p-4 bg-white">
  <div className="flex items-center justify-between mb-2">
    <h2 className="font-semibold text-sm">배송지</h2>
    <button
      type="button"
      className="text-xs text-blue-500 hover:text-blue-600"
      // TODO: 나중에 여기서 팝업(모달) 열어서 배송지 선택
    >
      변경
    </button>
  </div>

          {
            selectedAddress ? (
            // ✅ 선택된 배송지가 있을 때
            <div className="text-xs text-gray-700 mb-3">
              <p className="font-medium">
                {selectedAddress.receiver}{" "}
                <span className="text-[11px] text-gray-500">
                  ({selectedAddress.name})
                </span>
              </p>
              <p className="mt-1">
                {selectedAddress.address1} {selectedAddress.address2}
              </p>
              <p className="mt-1 text-gray-500">{selectedAddress.phone}</p>
            </div>
            ) : (
              // ❌ 아직 선택된 배송지가 없을 때
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-1">
                  아직 선택된 배송지가 없습니다.
                </p>
                <p className="text-[11px] text-gray-400">
                  마이페이지에서 배송지를 등록해 두고, 이 화면에서는
                  선택만 할 수 있도록 만들 예정입니다.
                </p>
              </div>
            )
          }

          <button
            type="button"
            className="w-full py-2 rounded-lg border border-gray-300 text-xs text-gray-600 hover:bg-gray-50"
          >
            배송지 설정하기 (예시)
          </button>
        </div>

      </div>
    </div>
  )

}
