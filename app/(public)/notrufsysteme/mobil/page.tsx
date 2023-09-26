import Image from "next/image";
import { FaForward, FaHeadset, FaWater } from "react-icons/fa6";
import { BiEuro, BiSolidHeart, BiSolidLock } from "react-icons/bi";

import {
  ContactSection,
  GradientSection,
  IconCards,
  LogoSection,
  PageHeader,
  Testimonials,
} from "@/app/components";

const MobilPage = () => {
  return (
    <>
      <PageHeader
        title='Notrufsystem "Mobile" mit GPS-Ortung und 24h
              Notrufzentrale.'
        linkText="Jetzt Beratungsgespräch vereinbaren"
        linkHref={`tel:${process.env.SERVICE_PHONE}`}
        bglogo
      >
        <p className="mt-8">
          Für Zuhause und Unterwegs. Nur 19,61 € bei vorliegendem Pflegegrad.
        </p>
        <Image src="/img/mobile-pro.png" width={400} height={243} alt="luna" />
      </PageHeader>

      <IconCards
        card1={{
          icon: BiSolidLock,
          title: "Mehr Sicherheit",
          text: "Hilfe ist nur ein Knopfdruck entfernt. Egal, wo Sie sich befinden. Nur im Notfall wird Ihr Standort an unsere Hausnotrufzentrale übermittelt, damit die Hilfe dort ankommt, wo sie benötigt wird.",
        }}
        card2={{
          icon: BiEuro,
          title: "Mit Zuschuss Ihrer Pflegekasse",
          text: "Die Kosten für unser mobiles Notrufsystem übernimmt zum Großteil Ihre Pflegekasse. Mit einem Eigenanteil von nur 19,61 € kaufen Sie sich Sicherheit und Gewissheit, dass immer jemand da ist. Wir verzichten auf jegliche Extra-Kosten wie z.B. eine Anschlussgebühr. Sie suchen einen Haken? Den gibt es nicht.",
        }}
        card3={{
          icon: BiSolidHeart,
          title: "Kein Gedankenkreisen mehr",
          text: "Für pflegende Angehörige ist der ständige Gedanke ob es der pflegebedürftigen Person grade gut geht eine Qual. Das gehört ab sofort der Vergangenheit an.",
        }}
        card4={{
          icon: FaHeadset,
          title: "24h-Notrufzentrale",
          text: "Unsere erstklassige Notrufzentrale ist für Sie 24 Stunden an 365 Tagen erreichbar. Geschulte Personen kümmern sich für Sie um zügige Hilfe.",
        }}
        card5={{
          icon: FaWater,
          title: "Wasserdichter Sender",
          text: "Der Sender kann wahlweise als Halskordel oder Armband sogar in der Dusche getragen werden. Der Sender ist 100% wasserdicht.",
        }}
        card6={{
          icon: FaForward,
          title: "Sofort einsatzbereit",
          text: "Unsere modernen Notrufsysteme sind sofort einsatzbereit. Ein Anschluss an die Telefondose ist nicht notwendig. Einfach einschalten und wir sind für Sie da.",
        }}
      />

      <GradientSection
        title="Immer griffbereit: Sicherheit für unterwegs."
        linkHref={`tel:${process.env.SERVICE_PHONE}`}
        linkText="Jetzt Beratungsgespräch vereinbaren"
        image="/img/climax-mobile-table.jpg"
        width={650}
        height={434}
        position="left"
      >
        <p className="mt-10 text-lg">
          Das handliche Mobilteil passt in jede Tasche. Der Notruf kann
          zusätzlich über einen Sender erfolgen, der als Armband oder mit einer
          Halskordel getragen wird.
        </p>
        <p className="mt-10 text-lg">
          Im Notfall drücken Sie auf den Knopf. Daraufhin meldet sich die
          Notrufzentrale über das Mobilteil, die Ihre Stammdaten bereits
          vorliegen hat. Über das eingebaute Mikrofon können Sie schildern, was
          geschehen ist. Die Notrufzentrale leitet dann notwendige Maßnahmen ein
          um Ihnen schnellstmöglich zu helfen. Durch die präzise Ortungstechnik
          weiß die Zentrale, wo genau die Hilfe benötigt wird.
        </p>
      </GradientSection>

      <LogoSection />

      <Testimonials />

      <ContactSection />
    </>
  );
};

export default MobilPage;
