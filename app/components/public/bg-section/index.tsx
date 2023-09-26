import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

type BgSectionProps = {
  subtitle?: string;
  title: string;
  children: React.ReactNode;
  linkText?: string;
  linkHref?: string;
  image: string;
  position: string;
  width: number;
  height: number;
  padding?: boolean;
};

const BgSection = ({
  subtitle,
  title,
  children,
  linkText,
  linkHref,
  image,
  position,
  width,
  height,
  padding = true,
}: BgSectionProps) => {
  return (
    <section className="bg-section">
      <div
        className={classNames("py-20", {
          "lg:py-40": padding,
          "lg:py-0 lg:pt-20": !padding,
        })}
      >
        <div className="container mx-auto flex flex-col justify-between gap-x-24 px-4 align-top lg:flex-row lg:px-12 xl:px-44">
          {position === "left" && (
            <div className="flex basis-1/2 items-start justify-center text-center lg:mt-0">
              <Image src={image} width={width} height={height} alt="banner" />
            </div>
          )}
          <div className="flex basis-1/2 flex-col">
            {subtitle && (
              <p className="mt-8 text-xs text-red-500">{subtitle}</p>
            )}
            <h3 className="mt-4 text-3xl font-medium tracking-tight">
              {title}
            </h3>
            {children}
            {linkText && linkHref && (
              <Link
                href={linkHref}
                className="mt-14 inline-block rounded-md bg-primary-500 py-3 text-center text-white"
              >
                {linkText}
              </Link>
            )}
          </div>
          {position === "right" && (
            <div className="order-first flex basis-1/2 items-start justify-center text-center lg:order-last lg:mt-0">
              <Image src={image} width={width} height={height} alt="banner" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BgSection;
