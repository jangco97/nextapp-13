import React from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
}) => {
  return (
    <div className="relative w-full">
      {formatPrice && (
        <span className="absolute text-neutral-700 top-5 left-2">￦</span>
      )}
      {label === "Description" ? <textarea
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        name="description"
        rows={10}
        cols={40}
        className={`w-full border-2 p-4 pt-6 font-light bg-white rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
        ${ formatPrice ? "pl-9" : "pl-4"}
        ${errors[id] ? "border-rose-500" : "border-neutral-300"} 
        ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      /> :
      <input
      id={id}
      disabled={disabled}
      {...register(id, { required })}
      placeholder=""
      type={type}
      className={`w-full border-2 p-4 pt-6 font-light bg-white rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
      ${ formatPrice ? "pl-9" : "pl-4"}
      ${errors[id] ? "border-rose-500" : "border-neutral-300"} 
      ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
      `}
    />
      }
      
      <label className={`
        absolute
        text-md
        duration-150
        transform
        -translate-y-3
        top-5
        z-10
        origin-[0]
        ${formatPrice ? 'left-9':'left-4'}
        peer-placeholder-shown:scale-100
        peer-placeholder-show:tramslate-y-0
        peer-focus:sacle-75
        peer-focus:-translte-y-4
        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
      `}>
        {label}
      </label>
    </div>
  );
};

export default Input;
