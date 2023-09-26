import Image from "next/image";

const LogoSection = () => {
  return (
    <section className="bg-primary-500 py-10">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-10 px-4 py-5 lg:px-0">
        <h3 className="text-3xl tracking-tight text-white">
          Die Caritabox ist offizieller Partner aller gesetzlichen Pflegekassen.
        </h3>
        <div className="grid grid-cols-6 items-center justify-center gap-6 lg:gap-12">
          <Image
            src="/img/aok.png"
            alt="AOK Pflegekasse"
            width={150}
            height={30}
          />
          <Image src="/img/barmer.png" width={150} height={30} alt="Barmer" />
          <Image
            src="/img/dak.png"
            width={150}
            height={30}
            alt="DAK Gesundheit"
          />
          <Image
            src="/img/ikk_classic.png"
            width={150}
            height={30}
            alt="IKK classic"
          />
          <Image
            src="/img/tk.png"
            width={150}
            height={30}
            alt="Techniker Krankenkasse"
          />
          <Image
            src="/img/knappschaft.png"
            width={150}
            height={30}
            alt="Knappschaft"
          />
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
