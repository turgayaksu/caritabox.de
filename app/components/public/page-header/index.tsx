import Link from "next/link";
import Image from "next/image";

type PageHeaderProps = {
  subtitle?: string;
  title: string;
  children: React.ReactNode;
  textSecond?: string;
  linkText?: string;
  linkHref?: string;
  bglogo?: boolean;
};

const PageHeader = ({
  subtitle,
  title,
  children,
  textSecond,
  linkText,
  linkHref,
  bglogo = false,
}: PageHeaderProps) => {
  return (
    <section className="container relative mx-auto px-4 lg:px-0">
      <div className="my-16 flex flex-col items-center space-y-12 text-center">
        {subtitle && <p className="text-sm text-red-500">{subtitle}</p>}
        <h2 className="text-4xl font-medium tracking-tight">{title}</h2>
        {children}
        {textSecond && <p className="mt-8">{textSecond}</p>}
        {linkText && linkHref && (
          <Link
            href={linkHref}
            className="rounded-md  bg-primary-500 px-8 py-4  text-sm text-white"
          >
            {linkText}
          </Link>
        )}
      </div>
      {bglogo && (
        <Image
          src="/img/caritabox-logo-bg.png"
          width={300}
          height={300}
          alt="caritabox-logo"
          className="absolute -left-1/4 bottom-0 -z-10 lg:-bottom-10 lg:left-0"
        />
      )}
    </section>
  );
};

export default PageHeader;
