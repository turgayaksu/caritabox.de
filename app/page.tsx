import {
  BgSection,
  ContactSection,
  GradientSection,
  LogoSection,
  PageHeader,
  Testimonials,
} from "./components";

const HomePage = () => {
  return (
    <>
      <PageHeader
        title="Wir unterstützen Sie in der häuslichen Pflege."
        linkText="Jetzt telefonisch beraten lassen"
        linkHref={`tel:${process.env.SERVICE_PHONE}`}
      >
        <p className="mt-8">
          Mit kostenlosen, bundesweiten Services wie Notrufgeräte,
          Pflegehilfsmittel und Inkontinenzartikel.
        </p>
      </PageHeader>

      <LogoSection />

      <BgSection
        subtitle="Notrufgeräte"
        title="Selbstbestimmt und sicher Zuhause. Mit unserer Hilfe auf Knopfdruck."
        linkHref="/notrufsysteme"
        linkText="Weitere Informationen"
        image="/img/luna.png"
        position="right"
        width={640}
        height={280}
      >
        <p className="mt-10 text-lg">
          So lang wie möglich in den eigenen vier Wänden leben - und im Notfall
          ist Hilfe nur ein Knopfdruck entfernt. Das ist möglich mit unseren
          innovativen und modernen Notrufgeräten für Zuhause und Unterwegs. Die
          Kosten für unsere Geräte werden vollständig oder zum Teil von Ihrer
          Pflegekasse übernommen.
        </p>
      </BgSection>

      <GradientSection
        subtitle="Pflegehilfsmittel"
        title="Die zeitsparende und kostenlose Lösung für die Versorgung mit Hilfsmitteln"
        linkHref="/pflegehilfsmittel"
        linkText="Weitere Informationen"
        image="/img/open-box.png"
        width={525}
        height={670}
        position="left"
      >
        <p className="mt-10 text-lg">
          Ihnen stehen bei vorliegendem Pflegegrad jeden Monat 40 € für
          Pflegehilfsmittel zum Verbrauch zur Verfügung. Dazu gehören
          Einmalhandschuhe, Desinfektionsmittel, Mundschutzmasken,
          Bettschutzeinlagen und Schutzschürzen. Mit unserem ausgeklügelten
          System erhalten Sie regelmäßig und nach Ihrem Wunsch die
          Pflegehilfsmittel direkt nach Hause geschickt, die Sie brauchen. In
          Ihrem eigenen Kundenkonto können Sie die Versorgung unkompliziert
          anpassen.
        </p>
      </GradientSection>

      <BgSection
        subtitle="Über uns"
        title="Wir sind selbst Pfleger..."
        image="/img/grunder.png"
        position="right"
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

export default HomePage;
