import Image from "next/image";
import { FaHeadset, FaWater } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiEuro, BiSolidHeart, BiSolidLock } from "react-icons/bi";

import {
  ContactSection,
  GradientSection,
  IconCards,
  LogoSection,
  PageHeader,
  Testimonials,
} from "@/app/components";

const LunaMobilePage = () => {
  return (
    <>
      <PageHeader
        title='Notrufsystem "Luna-Mobile" mit GPS-Ortung und 24h
              Notrufzentrale.'
        linkText="Jetzt Beratungsgespräch vereinbaren"
        linkHref={`tel:${process.env.SERVICE_PHONE}`}
        bglogo
      >
        <p className="mt-8">
          Für Zuhause und Unterwegs. Nur 34,95 €. Ohne Zuschuss Ihrer
          Pflegekasse.
        </p>
        <Image
          src="/img/luna-mobile.png"
          width={248}
          height={380}
          alt="luna-mobile"
        />
      </PageHeader>

      <IconCards
        card1={{
          icon: BiSolidLock,
          title: "Mehr Sicherheit",
          text: "Hilfe ist nur ein Knopfdruck entfernt. Egal, wo Sie sich befinden. Nur im Notfall wird Ihr Standort an unsere Hausnotrufzentrale übermittelt, damit die Hilfe dort ankommt, wo sie benötigt wird.",
        }}
        card2={{
          icon: BiEuro,
          title: "Kostengünstig ohne Pflegegrad",
          text: "Für Personen ohne Pflegegrad sind herkömmliche Systeme zu teuer. Unser &quot;Luna-Mobile&quot; ist trotz seiner erstklassigen Funktion sehr günstig. Wir verzichten auf jegliche Extra-Kosten wie z.B. eine Anschlussgebühr.",
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
          icon: FaMapMarkerAlt,
          title: "Präzise Ortung",
          text: "Unsere modernen Notrufsysteme bieten im Notfall die präziseste Ortung an. Sie können sich sicher sein, dass Sie im Fall der Fälle schnell gefunden werden.",
        }}
      />

      <GradientSection
        title="Aktiv bleiben. Mit der Gewissheit, dass Hilfe dort ankommt wo Sie
              sich befinden."
        linkHref={`tel:${process.env.SERVICE_PHONE}`}
        linkText="Jetzt Beratungsgespräch vereinbaren"
        image="/img/luna-mobile-walk.jpg"
        width={600}
        height={528}
        position="left"
      >
        <p className="mt-10 text-lg">
          Unser Luna-Mobile passt in jede Tasche und ist einfach zu bedienen.
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

export default LunaMobilePage;
