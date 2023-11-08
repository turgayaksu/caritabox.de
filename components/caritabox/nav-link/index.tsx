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
          "hover:text-caritabox-500 dark:hover:text-caritabox-300 border-b",
          {
            "border-caritabox-500 text-caritabox-500 dark:text-caritabox-400":
              isActive,
            "dark:text-caritabox-200 border-none text-slate-800": !isActive,
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
          "hover:text-caritabox-500 dark:hover:text-caritabox-300 text-start",
          {
            "border-caritabox-500 text-caritabox-500 dark:text-caritabox-400":
              isActive,
            "dark:text-caritabox-200 border-none text-slate-800": !isActive,
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
