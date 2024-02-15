import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  disabled?: boolean;
  onClick: () => void;
}
const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ icon: Icon, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full justify-center rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-black ring-1 ring-inset hover:bg-indigo-700 focus:outline-offset-0 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-200 "
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
