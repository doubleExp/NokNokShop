// src/context/AddressContext.tsx
import React, { createContext, useContext, useMemo, useState } from "react"

// 📌 배송지 타입 정의 (나중에 백엔드 연동할 때도 이 형태 기준으로 사용)
export interface Address {
  id: number
  name: string        // 집, 회사, 부모님집 같은 라벨
  receiver: string    // 수령인
  phone: string       // 연락처
  postcode: string
  address1: string    // 기본 주소
  address2?: string   // 상세 주소
  isDefault?: boolean // 기본 배송지 여부
}

// 📌 Context 안에서 사용할 값 타입
interface AddressContextValue {
  addresses: Address[]
  selectedAddressId: number | null
  selectedAddress: Address | null
  setAddresses: React.Dispatch<React.SetStateAction<Address[]>>
  setSelectedAddressId: (id: number | null) => void
}

// undefined 허용해서, 훅에서 예쁘게 에러 처리
const AddressContext = createContext<AddressContextValue | undefined>(
  undefined
)

// 📌 Provider 컴포넌트
export const AddressProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // 일단은 빈 배열로 시작 (나중에 마이페이지/백엔드 연동하면서 채움)
  const [addresses, setAddresses] = useState<Address[]>([])
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(
    null
  )

  const selectedAddress = useMemo(
    () => addresses.find((a) => a.id === selectedAddressId) ?? null,
    [addresses, selectedAddressId]
  )

  const value: AddressContextValue = {
    addresses,
    selectedAddressId,
    selectedAddress,
    setAddresses,
    setSelectedAddressId,
  }

  return (
    <AddressContext.Provider value={value}>{children}</AddressContext.Provider>
  )
}

// 📌 편하게 쓰기 위한 커스텀 훅
export const useAddress = (): AddressContextValue => {
  const ctx = useContext(AddressContext)
  if (!ctx) {
    throw new Error("useAddress must be used within AddressProvider")
  }
  return ctx
}
