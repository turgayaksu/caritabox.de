import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type LinkPorps = {
  name: string;
  href?: string;
  onClick?: () => void;
};
const NavLink = ({ name, href, onClick }: LinkPorps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  if (href) {
    return (
      <Link
        className={classNames(
          "border-b hover:text-primary-500 dark:hover:text-primary-300",
          {
            "border-primary-500 text-primary-500 dark:text-primary-400":
              isActive,
            "border-none text-slate-800 dark:text-primary-200": !isActive,
          },
        )}
        href={href}
      >
        {name}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button
        className={classNames(
          "text-start hover:text-primary-500 dark:hover:text-primary-300",
          {
            "border-primary-500 text-primary-500 dark:text-primary-400":
              isActive,
            "border-none text-slate-800 dark:text-primary-200": !isActive,
          },
        )}
        onClick={onClick}
      >
        {name}
      </button>
    );
  }
};

export default NavLink;
