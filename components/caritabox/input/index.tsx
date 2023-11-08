"use client";

import classNames from "classnames";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

type InputProps = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  value?: string;
};

const Input = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  register,
  errors,
  value,
}: InputProps) => {
  return (
    <div className="relative w-full">
      {formatPrice && (
        <BiDollar
          size={22}
          className="absolute left-2 top-4 text-slate-400 dark:text-slate-500"
        />
      )}
      <input
        id={id}
        type={type}
        disabled={disabled}
        required={required}
        {...register(id, { required })}
        placeholder=" "
        value={value}
        className={classNames(
          "animation group/input peer w-full rounded-md border-2 bg-white p-4  font-medium  outline-none disabled:cursor-not-allowed disabled:opacity-70 dark:bg-slate-800/60",
          {
            "pl-8 ": formatPrice,
            "pl-4": !formatPrice,
            "focus:border-caritabox-500 border-rose-500": errors[id],
            "border-slate-300 focus:border-slate-500 dark:border-slate-800 dark:focus:border-slate-950":
              !errors[id],
          },
        )}
      />
      <label
        className={classNames(
          "text-md absolute top-5 origin-[0] -translate-y-4 transform duration-150 hover:-translate-y-4 hover:scale-75 group-hover/input:-translate-y-4 group-hover/input:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-hover:-translate-y-4 peer-hover:scale-75 peer-focus:-translate-y-4 peer-focus:scale-75",
          {
            "left-9 ": formatPrice,
            "left-4": !formatPrice,
            "text-rose-500": errors[id],
            "text-slate-400 dark:text-slate-500": !errors[id],
          },
        )}
      >
        {label}
      </label>
      {errors[id] && (
        <div className="mt-1 text-sm italic text-rose-500">
          {`${errors[id]?.message}`}
        </div>
      )}
    </div>
  );
};

export default Input;
