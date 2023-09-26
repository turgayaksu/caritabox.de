import Image from "next/image";
import Link from "next/link";
import DhlLogo from "./dhl-logo";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto flex h-12 flex-col items-center justify-between px-4 py-2 text-sm lg:flex-row lg:px-0">
        <nav className="flex gap-4">
          <Link className="hover:text-primary-500" href="/impressum">
            Impressum
          </Link>
          <Link className="hover:text-primary-500" href="/datenschutz">
            Datenschutz
          </Link>
          <Link
            className="hover:text-primary-500"
            href={`tel:${process.env.SERVICE_PHONE}`}
          >
            Service-Telefon {`${process.env.SERVICE_PHONE}`}
          </Link>
        </nav>
        <div className="mt-4 flex gap-1 lg:mt-0">
          Wir versenden mit <DhlLogo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
