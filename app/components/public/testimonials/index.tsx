import { BiSolidQuoteAltRight } from "react-icons/bi";

import { testimonials } from "@/mock";

const Testimonials = () => {
  return (
    <section className="section-gradient">
      <div className="container mx-auto flex flex-col gap-x-24 px-4 py-20 align-top lg:px-44">
        <h3 className="mt-4 text-center text-3xl font-medium tracking-tight">
          Kundenbewertungen
        </h3>
        <div className="mt-24 flex flex-col justify-between gap-16 lg:flex-row lg:gap-8">
          {testimonials.map((testimonial, key) => {
            return (
              <div
                key={key}
                className="relative mx-10 basis-0 rounded-md border border-slate-200 bg-white p-8  text-center shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:mx-0 lg:basis-1/3"
              >
                <p className="mt-6 text-sm italic leading-6">
                  {testimonial.text}
                </p>
                <h6 className="my-6 font-medium">{testimonial.name}</h6>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {testimonial.occupation}
                </p>
                <BiSolidQuoteAltRight
                  size={64}
                  className="absolute -top-7 left-1/2 -translate-x-1/2 text-primary-500"
                />
                <div className="absolute bottom-0 left-0 h-2 w-full rounded-b-lg bg-gradient-to-r from-cyan-400 to-primary-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
