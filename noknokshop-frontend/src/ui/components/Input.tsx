import React from "react"

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  style?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = "text",
  style
}) => {
  const base: React.CSSProperties = {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "100%",
    fontSize: "14px"
  }

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ ...base, ...style }}
    />
  )
}
