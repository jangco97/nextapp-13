import { IconType } from "react-icons";
import React from "react";
interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: IconType;
  bgColor?: string;
  textColor?: string;
  size?: string;
  hover?: string;
  rounded?: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  icon: Icon,
  bgColor = "bg-indigo-500",
  hover = "hover:bg-indigo-600",
  textColor = "text-white",
  size = "medium",
  rounded,
  width = "w-full",
}) => {
  const sizeClasses = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-3 text-md",
    large: "py-3 px-4 text-lg",
  }[size];

  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className={`
    relative
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-lg
    transition
    ${bgColor}
    ${hover}
    ${width}
    ${textColor}
    ${sizeClasses}
    ${rounded}
  `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};
export default Button;
