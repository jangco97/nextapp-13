import React from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  label: string;
  disabled?: boolean;
  register: any;
  type?: string;
}

const RegisterInput: React.FC<InputProps> = ({ label, disabled, register, type }) => {
  return (
    <div className="relative w-full">
      <>
        <input
          disabled={disabled}
          {...register}
          className={`w-full border-2 p-4 pt-6 font-light bg-white rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-4`}
          type={type}
        />
        <label
          className={`
        absolute
        text-md
        duration-150
        transform
        -translate-y-3
        top-5
        left-4
        z-10
        origin-[0]
        peer-placeholder-shown:scale-100
        peer-placeholder-show:tramslate-y-0
        peer-focus:sacle-75
        peer-focus:-translte-y-4

      `}
        >
          {label}
        </label>
      </>
    </div>
  );
};

export default RegisterInput;
