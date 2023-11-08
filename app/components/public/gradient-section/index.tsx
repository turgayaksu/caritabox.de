import Link from "next/link";
import Image from "next/image";

type GradientSectionProps = {
  subtitle?: string;
  title: string;
  children: React.ReactNode;
  linkText?: string;
  linkHref?: string;
  image: string;
  position: string;
  width: number;
  height: number;
};

const GradientSection = ({
  subtitle,
  title,
  children,
  linkText,
  linkHref,
  image,
  position,
  width,
  height,
}: GradientSectionProps) => {
  return (
    <section className="gradient-section">
      <div className="container mx-auto flex flex-col justify-between gap-x-24 px-4 pb-28 pt-16 align-top lg:flex-row lg:px-44">
        {position === "left" && (
          <div className="flex basis-1/2 items-center justify-center text-center">
            <Image
              className="rounded"
              src={image}
              width={width}
              height={height}
              alt="banner"
            />
          </div>
        )}
        <div className="flex basis-1/2 flex-col">
          {subtitle && <p className="mt-8 text-xs text-red-500">{subtitle}</p>}
          <h3 className="mt-4 text-3xl font-medium tracking-tight">{title}</h3>
          {children}
          {linkHref && linkText && (
            <Link
              href={linkHref}
              className="bg-caritabox-500 mt-14 inline-block rounded-md py-3 text-center text-white"
            >
              {linkText}
            </Link>
          )}
        </div>
        {position === "right" && (
          <div className="order-first flex basis-1/2 items-start justify-center text-center lg:order-last">
            <Image
              className="rounded"
              src={image}
              width={width}
              height={height}
              alt="banner"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GradientSection;
