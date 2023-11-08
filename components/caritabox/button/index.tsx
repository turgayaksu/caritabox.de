"use client";

import classNames from "classnames";
import { IconType } from "react-icons/lib";

type ButtonProps = {
  label: string;
  type: "button" | "submit" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
};

const Button = ({
  label,
  type = "button",
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      title={label}
      className={classNames(
        "animation flex w-full flex-row items-center  justify-center gap-3 rounded-lg border-[1px] border-slate-300 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70 dark:border-slate-800",
        {
          "text-caritabox-700 bg-white dark:bg-slate-700 dark:text-white":
            outline,
          "bg-caritabox-500 text-white": !outline,
          "px-1 py-1 text-sm font-light": small,
          "text-md px-3 py-4 font-semibold": !small,
        },
      )}
    >
      {Icon ? (
        <>
          <Icon size={!small ? 24 : 20} />
          {label}
        </>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
