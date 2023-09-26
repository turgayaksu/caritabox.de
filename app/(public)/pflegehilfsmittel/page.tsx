import { FaTruck } from "react-icons/fa6";
import { MdWash } from "react-icons/md";
import { BiEuro, BiSolidSprayCan } from "react-icons/bi";
import { FiRepeat } from "react-icons/fi";
import { BsGiftFill } from "react-icons/bs";

import {
  BgSection,
  ContactSection,
  GradientSection,
  IconCards,
  LogoSection,
  PageHeader,
  Testimonials,
} from "@/app/components";

const PflegehilfsmittelPage = () => {
  return (
    <>
      <PageHeader
        title="Kostenfreie Pflegehilfsmittel diskret nach Hause geliefert."
        linkText="Jetzt online beantragen"
        linkHref="/bestellen"
        bglogo
      >
        <p className="mt-8 max-w-5xl">
          Ihre Pflegekasse übernimmt die Kosten für Einmalhandschuhe,
          Desinfektionsmittel, Bettschutzeinlagen, Schutzschürzen und
          Mundschutzmasken (auch FFP-2).
        </p>
      </PageHeader>

      <LogoSection />

      <BgSection
        subtitle="Zum Verbrauch bestimmte Pflegehilfsmittel"
        title="Qualitative Produkte liebevoll eingepackt."
        linkHref="/bestellen"
        linkText="Jetzt online beantragen"
        image="/img/open-box.png"
        width={523}
        height={670}
        position="right"
      >
        <p className="mt-10 text-lg">
          Sie erhalten nur Produkte, die wir in der täglichen Pflege selbst
          nutzen würden. Das beste daran: die Produkte senden wir Ihnen in Ihrem
          gewünschten Versorgungsrythmus direkt nach Hause. So entfällt der Gang
          zur Apotheke oder zum Drogeriemarkt und Sie haben immer die Produkte
          da, die in der täglichen Pflege unerlässlich sind.
        </p>
        <p className="mt-10 text-lg text-red-500">
          0,00 € bei vorliegendem Pflegegrad.
        </p>
      </BgSection>

      <IconCards
        card1={{
          icon: MdWash,
          title: "Mehr Hygiene",
          text: "Durch unsere qualitativen Produkte sichern Sie sich ein hohes Maß an Hygiene in der täglichen Pflege, ohne großen Aufwand.",
        }}
        card2={{
          icon: BiEuro,
          title: "Vollständige Kostenübernahme",
          text: "Die Kosten für die gewünschten Pflegehilfsmittel werden von Ihrer Pflegekasse vollständig übernommen. Privatversicherte erhalten eine Rechnung, die bei der Pflegekasse zur Erstattung eingereicht werden kann.",
        }}
        card3={{
          icon: FiRepeat,
          title: "Regelmäßige Lieferung",
          text: "Sie wählen selbst, wie oft Sie die gewünschte Zusammenstellung an Pflegehilfsmitteln erhalten möchten. Das Versorgungsrythmus können Sie in Ihrem Kundenkonto jederzeit einstellen. Genauso wie die Produkte, die Sie erhalten.",
        }}
        card4={{
          icon: FaTruck,
          title: "Lieferung nach Hause",
          text: "Wir liefern direkt, versandkostenfrei und klimaneutral nach Hause mit DHL und GOGREEN.",
        }}
        card5={{
          icon: BsGiftFill,
          title: "Kostenlose Zusatzprodukte",
          text: "Zu jeder Lieferung erhalten Sie von uns kostenlose Zusatzprodukte wie z.B. Handcremes, Feuchttücher o.ä. Teilen Sie uns gern Ihr Wunsch mit und wir kümmern uns darum!",
        }}
        card6={{
          icon: BiSolidSprayCan,
          title: "Gratis Sprühköpfe",
          text: "Zu unseren Desinfektionsmitteln können Sie jederzeit kostenlose Sprühköpfe erhalten, damit die Desinfektion der Flächen noch einfacher und schneller wird. Sprechen Sie uns darauf an!",
        }}
      />

      <GradientSection
        title="Einmalhandschuhe in Nitril, Latex oder Vinyl"
        image="/img/einmalhandschuhe.jpg"
        width={650}
        height={345}
        position="left"
      >
        <p className="mt-10 text-lg">
          Für alle Fälle gewappnet. Egal ob Vinyl, Latex oder Nitril, wir haben
          die passende Größe. Wählen Sie aus S, M, L oder XL die für Sie
          passende Größe aus. Sie können auch mehrere Einmalhandschuhe in
          verschiedenen Größen oder Materialarten wählen.
        </p>
        <p className="mt-10 text-lg">
          Eine Packung enthält 100 Stk. Einmalhandschuhe.
        </p>
      </GradientSection>

      <GradientSection
        title="Desinfektionsmittel für Hände und Flächen"
        image="/img/haendedesinfektion.png"
        width={400}
        height={400}
        position="right"
      >
        <p className="mt-10 text-lg">
          In der Pflege unerlässlich. Desinfektionsmittel muss täglich
          angewendet werden um Viren und Bakterien keine Chance zu geben.
        </p>
        <p className="mt-10 text-lg">
          Unser voll viruzides Desinfektionsmittel auf Ethanol-Basis ist
          rückfettend und sehr gut hautverträglich, auch bei häufiger Anwendung.
        </p>
        <p className="mt-10 text-lg">
          Eine Flasche enthält 500ml Hände- oder Flächendesinfektionsmittel.
        </p>
      </GradientSection>

      <GradientSection
        title="Bettschutzunterlagen in 60x90cm"
        image="/img/unterlage.png"
        width={600}
        height={384}
        position="left"
      >
        <p className="mt-10 text-lg">
          Bei uns erhalten Sie ausschließlich stark saugende
          Bettschutzunterlagen aus weichen Zellstoffflocken, denn nur diese
          bieten auch für den zu Pflegenden ein angenehmes, störungsfreies
          Gefühl.
        </p>
        <p className="mt-10 text-lg">
          Eine Packung enthält 25 Stk. Bettschutzunterlagen.
        </p>
      </GradientSection>

      <GradientSection
        title="Mundschutzmasken (OP und FFP-2)"
        image="/img/masken.png"
        width={400}
        height={450}
        position="right"
      >
        <p className="mt-10 text-lg">
          Seit der letzten Pandemie sind Mundschutzmasken im alltäglichen Leben
          kaum wegzudenken. Insbesondere in der Pflege bieten Mundschutzmasken
          einen verlässlichen Schutz gegen eine Tröpfcheninfektion.
        </p>
        <p className="mt-10 text-lg">
          FFP-2 Masken oder Standard OP-Masken. Für Erwachsene und für Kinder.
          Bei uns erhalten Sie die Masken, die zu Ihnen passen.
        </p>
      </GradientSection>

      <GradientSection
        title="Unsere Schutzschürzen zum Einmalgebrauch"
        image="/img/schutzschuerzen.png"
        width={400}
        height={475}
        position="left"
      >
        <p className="mt-10 text-lg">
          Schutzschürzen bieten einen guten Schutz gegen Verunreinigung der Haut
          und Kleidung und verhindern die Übertragung von Keimen.
        </p>
        <p className="mt-10 text-lg">
          Eine Packung enthält 100 Stk. Schutzschürzen.
        </p>
      </GradientSection>

      <GradientSection
        title="Wiederverwendbare Bettschutzunterlagen"
        image="/img/abrisoft-waschbar.png"
        width={500}
        height={500}
        position="right"
      >
        <p className="mt-10 text-lg">
          Zusätzlich können Sie je nach Pflegekasse bis zu 4 Stk. waschbare
          Bettschutzunterlagen pro Jahr über uns beziehen. Die Unterlagen sind
          bei 95° bis zu 300x waschbar und sind für den Trockner geeignet.
        </p>
        <p className="mt-10 text-lg">
          Sie erhalten ausschließlich Qualitätsprodukte, die ein besonders
          trockenes Gefühl hinterlassen.
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

export default PflegehilfsmittelPage;
