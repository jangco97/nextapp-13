import { IconType } from "react-icons";
interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
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
    hover:opacity-90
    transition
    w-full
    ${outline ? "bg-white" : "bg-indigo-500"}
    ${outline ? "border-black" : "bg-indigo-500"}
    ${outline ? "text-black" : "text-white"}
    ${
      small
        ? "py-1 text-sm font-light border-[1px]"
        : "py-3 text-md font-semibold border-2"
    }
  `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top3" />}
      {label}
    </button>
  );
};
export default Button;
