import React from "react"
import { Link } from "react-router-dom"

type ProductCardProps = {
  id: number
  name: string
  price: number
  thumbnailUrl?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  thumbnailUrl
}) => {
  return (
    <Link
      to={`/products/${id}`}
      style={{
        display: "block",
        border: "1px solid #eee",
        borderRadius: "12px",
        padding: "12px",
        textDecoration: "none",
        color: "inherit",
        transition: "0.2s",
      }}
    >
      <img
        src={thumbnailUrl || "/placeholder.png"}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "10px"
        }}
      />
      <h3 style={{ margin: "0 0 6px 0", fontSize: "1rem" }}>{name}</h3>
      <p style={{ margin: 0, fontWeight: 600, color: "#333" }}>
        {price.toLocaleString()}원
      </p>
    </Link>
  )
}
