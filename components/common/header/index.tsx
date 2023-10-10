import { BiPhoneCall } from "react-icons/bi";

import { Logo, Menu, ThemeSwitcher } from "@/components";
import Link from "next/link";
import { getCurrentUser } from "@/libs";

const Header = async () => {
  const currentUser = await getCurrentUser();
  return (
    <header className="fixed top-0 z-[999] w-full bg-white/70 shadow-sm backdrop-blur-sm dark:bg-slate-900/80">
      <div className="bg-primary-500 px-4 lg:px-0">
        <div className="container mx-auto flex items-center justify-between py-1">
          <div className="flex items-center gap-2 text-sm text-white">
            <BiPhoneCall />
            <Link href={`tel:${process.env.SERVICE_PHONE}`}>
              Service Telefon: {`${process.env.SERVICE_PHONE}`}
            </Link>
            {currentUser?.name}
          </div>
          <ThemeSwitcher />
        </div>
      </div>
      <div className="container relative mx-auto flex items-center justify-between px-4 py-4 lg:px-0">
        <span>
          <Logo />
        </span>
        <span>
          <Menu currentUser={currentUser} />
        </span>
      </div>
    </header>
  );
};

export default Header;
