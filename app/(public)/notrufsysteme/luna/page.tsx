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

const LunaPage = () => {
  return (
    <>
      <PageHeader
        title="Wir unterstützen Sie in der häuslichen Pflege."
        linkText="Jetzt Beratungsgespräch vereinbaren"
        linkHref={`tel:${process.env.SERVICE_PHONE}`}
        bglogo
      >
        <p className="mt-8">Für Zuhause. 0,00 € bei vorliegendem Pflegegrad.</p>
        <Image src="/img/luna.png" width={640} height={280} alt="luna" />
      </PageHeader>

      <IconCards
        card1={{
          icon: BiSolidLock,
          title: "Mehr Sicherheit",
          text: "Gerade dann, wenn sich ein pflegebedürftiger Zuhause allein befindet, bietet unser System die Gewissheit, dass Hilfe nur ein Knopfdruck entfernt ist.",
        }}
        card2={{
          icon: BiEuro,
          title: "Vollständige Kostenübernahme",
          text: "Die Kosten für unser Basis-System übernimmt Ihre Pflegekasse für Sie. Wir verzichten auf jegliche Extra-Kosten wie z.B. eine Anschlussgebühr. Sie suchen einen Haken? Den gibt es nicht.",
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
          text: "Unsere modernen Notrufsysteme sind sofort einsatzbereit. Ein Anschluss an die Telefondose ist nicht notwendig. Einfach in die Steckdose stecken und wir sind für Sie da.",
        }}
      />

      <GradientSection
        title="Fügt sich nahtlos in Ihre Wohnung ein."
        linkHref={`tel:${process.env.SERVICE_PHONE}`}
        linkText="Jetzt Beratungsgespräch vereinbaren"
        image="/img/luna-tablebasse.jpg"
        width={525}
        height={670}
        position="left"
      >
        <p className="mt-10 text-lg">
          Das moderne Notrufsystem passt zu Ihnen und Ihrer Wohnung. Denn
          Sicherheit sollte nicht an Schönheit scheitern.
        </p>
        <p className="mt-10 text-lg">
          Im Notfall drücken Sie auf den Sender, den Sie am Arm oder um den Hals
          tragen können. Daraufhin meldet sich die Notrufzentrale, die Ihre
          Stammdaten bereits vorliegen hat, über einen lauten Lautsprecher, der
          in der Basis-Station integriert ist. Über das eingebaute Mikrofon
          können Sie schildern, was geschehen ist. Die Notrufzentrale leitet
          dann notwendige Maßnahmen ein um Ihnen schnellstmöglich zu helfen.
        </p>
      </GradientSection>

      <LogoSection />

      <Testimonials />

      <ContactSection />
    </>
  );
};

export default LunaPage;
