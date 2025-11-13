import React from "react"

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  color?: "primary" | "secondary"
  style?: React.CSSProperties
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = "primary",
  style
}) => {
  const base: React.CSSProperties = {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    background: color === "primary" ? "#007bff" : "#6c757d",
    color: "#fff"
  }

  return (
    <button onClick={onClick} style={{ ...base, ...style }}>
      {children}
    </button>
  )
}
