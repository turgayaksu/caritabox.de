"use client";

import classNames from "classnames";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";

import { useMenu } from "@/hooks";
import { navLinks } from "@/mock";

export default function Menu() {
  const menu = useMenu();
  const pathname = usePathname();

  useEffect(() => {
    menu.onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <HiMenuAlt3
        onClick={menu.onToggle}
        size={40}
        className="block cursor-pointer rounded bg-slate-100 px-1.5 dark:bg-slate-800 lg:hidden"
      />
      <nav
        id="main-menu"
        className={classNames(
          "absolute flex w-52 flex-col gap-8 bg-transparent transition-all lg:relative lg:w-full lg:flex-row",
          {
            "right-0 top-20 mr-6 rounded-md !bg-slate-50 p-6 shadow-lg dark:!bg-slate-800":
              menu.isOpen,
            "-right-full top-0 lg:right-0": !menu.isOpen,
          },
        )}
      >
        {navLinks.map((link, key) => {
          const isActive = pathname === link.href;
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
              href={link.href}
              key={key}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
