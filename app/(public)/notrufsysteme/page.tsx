import {
  BgSection,
  ContactSection,
  GradientSection,
  LogoSection,
  PageHeader,
  Testimonials,
} from "@/app/components";

const NotrufsystemePage = () => {
  return (
    <>
      <PageHeader
        subtitle="Ab 0,00 € bei vorliegendem Pflegegrad"
        title="Notrufsysteme für mehr Selbstbestimmung und Sicherheit."
        linkText="Jetzt telefonisch beraten lassen"
        linkHref={`tel:${process.env.SERVICE_PHONE}`}
      >
        <p className="mt-8">
          Ab 0,00 €. Für Zuhause und Unterwegs. Mit und ohne Pflegegrad.
        </p>
      </PageHeader>

      <LogoSection />

      <BgSection
        subtitle="Für Zuhause: Luna Basic"
        title="Selbstbestimmt und sicher Zuhause. Modernes und sicheres
                Notrufsystem."
        linkHref="/notrufsysteme/luna"
        linkText="Mehr Infos zu Luna Basic"
        image="/img/luna.png"
        width={640}
        height={280}
        position="right"
      >
        <p className="mt-10 text-lg">
          Hilfe ist nur ein Knopfdruck entfernt. Mit unserem Notrufsystem sind
          Sie mit unserer erstklassigen 24-Stunden-Hausnotrufzentrale verbunden,
          die im Notfall auf Sie zugeschnittene Hilfsmaßnahmen einleitet. Ganz
          egal um welchen Notfall es sich handelt - mit uns haben Sie die
          Gewissheit, dass schnelle Hilfe unterwegs ist.
        </p>
        <p className="mt-10 text-lg text-red-500">
          mtl. 0,00 € bei vorliegendem Pflegegrad
        </p>
      </BgSection>

      <GradientSection
        subtitle="Für Zuhause und unterwegs: Mobile"
        title="Mit Sicherheit aktiv leben. Ihr Notruf für unterwegs."
        linkHref="/notrufsysteme/mobil"
        linkText="Mehr Infos zum mobilen System"
        image="/img/mobile-pro.png"
        width={400}
        height={243}
        position="left"
      >
        <p className="mt-10 text-lg">
          Notfälle entstehen oft auch außerhalb der eigenen vier Wände. Für
          Spaziergänge im Freien bietet unser mobiles Notrufsystem im Notfall
          präzise Ortungen kombiniert mit einer erstklassigen
          24-Stunden-Notrufzentrale, die auf Sie zugeschnittene Hilfsmaßnahmen
          einleitet.
        </p>
        <p className="mt-10 text-lg text-red-500">
          mtl. 19,61 € bei vorliegendem Pflegegrad.
        </p>
      </GradientSection>

      <GradientSection
        subtitle="Für Zuhause und unterwegs: Luna Mobile"
        title="Günstig und trotzdem erstklassig."
        linkHref="/notrufsysteme/luna-mobile"
        linkText="Mehr Infos zu Luna Mobile"
        image="/img/luna-mobile.png"
        width={248}
        height={380}
        position="right"
      >
        <p className="mt-10 text-lg">
          Für Personen ohne Pflegegrad haben wir ein kostengünstiges, handliches
          Notrufsystem im Angebot. Mit präziser Ortung, langer Akkulaufzeit und
          24-Stunden-Notrufzentrale. Sicherheit muss nicht teuer sein.
        </p>
        <p className="mt-10 text-lg text-red-500">
          mtl. 34,95 € ohne Pflegegrad.
        </p>
      </GradientSection>

      <BgSection
        subtitle="Über uns"
        title="Wir sind selbst Pfleger..."
        image="/img/grunder.png"
        position="left"
        width={682}
        height={550}
        padding={false}
      >
        <p className="mt-10 text-lg">
          und haben uns im Jahr 2014 das Ziel gesetzt Pflegebeteiligte mit
          einfachen Seviceleistungen und Angebote zu entlasten. Da uns immer
          wieder pflegende Angehörige auf die Probleme mit der regelmäßigen
          Beschaffung von Pflegehilfsmitteln aufmerksam gemacht haben, wurde die
          Caritabox gegründet. Heute bieten wir außerdem hochmoderne und
          intelligente Notrufsysteme sowie die Versorgung mit
          Inkontinenzartikeln an. Schließen Sie sich fast 1.000 zufriedenen
          Kunden an, die ihre Pflege durch uns ein Stück erleichtert haben.
        </p>
        <h5 className="mt-14 text-lg text-red-500">
          Sibel Ceylan, Geschäftsführer
        </h5>
      </BgSection>

      <Testimonials />

      <ContactSection />
    </>
  );
};

export default NotrufsystemePage;
