import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="pt-10">
      <div className="container mx-auto mb-10 flex flex-col gap-x-24 px-4 align-top lg:px-44">
        <div className="flex basis-full flex-col items-center justify-center gap-8 rounded-2xl bg-primary-500 py-20 text-center text-slate-50 lg:basis-3/5">
          <h3 className="mt-4 text-center text-3xl font-medium tracking-tight">
            Lassen Sie sich jetzt beraten.
          </h3>
          <p>Rufen Sie uns gern an oder schreiben Sie uns eine E-Mail.</p>
          <Link
            className="mt-4 block text-2xl font-semibold hover:text-primary-100"
            href={`tel:${process.env.SERVICE_PHONE}`}
          >
            Service-Telefon {`${process.env.SERVICE_PHONE}`}
          </Link>
          <Link
            className="block text-2xl font-semibold hover:text-primary-100"
            href="mailto:info@caritabox.de"
          >
            info@caritabox.de
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
