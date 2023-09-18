interface BoardButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
}

const BoardButton: React.FC<BoardButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
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
    w-10
    text-sm
    ${outline ? "bg-rose-500" : "bg-orange-500"}
    ${outline ? "border-black" : "bg-orange-500"}
    text-white
  `}
    >
      {label}
    </button>
  );
};
export default BoardButton;
