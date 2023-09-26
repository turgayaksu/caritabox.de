import Link from "next/link";
import {
  ContactSection,
  Faq,
  LogoSection,
  PageHeader,
  Testimonials,
} from "@/app/components";

const HilfePage = () => {
  return (
    <>
      <PageHeader title="Fragen und Antworten">
        <p className="mt-8 max-w-3xl text-sm">
          Hier finden Sie Antworten auf häufig gestellte Fragen. Gerne können
          Sie uns auch telefonisch Ihre Frage unter folgender Rufnummer stellen:
          <Link
            href={`tel:${process.env.SERVICE_PHONE}`}
          >{`${process.env.SERVICE_PHONE}`}</Link>
        </p>
      </PageHeader>

      <section className="gradient-section">
        <div className="container mx-auto px-4 py-10 lg:px-44">
          <h3 className="mb-8 text-3xl font-medium tracking-tight">
            Fragen zur Caritabox
          </h3>
          <Faq
            isOpen
            question="Was genau ist die Caritabox?"
            answer="Die Caritabox ist eine Zusammenstellung von Pflegehilfsmitteln, die zum Verbrauch bestimmt sind. Hierzu zählen folgende Pflegemittel: Einmalhandschuhe, Hände- und Flächendesinfektionsmittel, Mundschutz, Bettschutzeinlagen und Schutzschürzen. Ihre individuell zusammengestellte Caritabox erhalten Sie jeden Monat kostenfrei und ohne Zuzahlung direkt nach Hause geliefert."
          />
          <Faq
            question="Welche Pflegehilfsmittel kann ich in meiner Caritabox erhalten?"
            answer="Einmalhandschuhe, Hände- und Flächendesinfektionsmittel, Mundschutz, Bettschutzeinlagen und Schutzschürzen."
          />
          <Faq
            question="Wer kann die Caritabox beantragen?"
            answer="Die Caritabox kann jeder beantragen, der einen Pflegegrad von 1 bis 5 hat. Außerdem muss der Pflegebedürftige zu Hause, in einer Wohngemeinschaft oder in einer Einrichtung für betreutes Wohnen leben und von einer privaten Person (z.B. Angehöriger, Freund, Nachbar) betreut werden."
          />
          <Faq
            question="Ist meine Caritabox wirklich zu 100% kostenfrei?"
            answer="Ja! Ihre Caritabox erhalten Sie sogar versandkostenfrei direkt nach Hause geliefert. Die Kosten hierfür übernimmt die Pflegekasse. Wir rechnen direkt mit Ihrer Pflegekasse ab, sodass Sie nicht in Vorleistung treten müssen."
          />
          <Faq
            question="Wie lange dauert es, bis ich meine erste Caritabox erhalte?"
            answer="Die Ausstellung der Genehmigung kann bei Ihrer Pflegekasse bis zu 6 Wochen in Anspruch nehmen. Erfahrungsgemäß wird die Genehmigung durchschnittlich in 2-4 Wochen ausgestellt. Ab diesem Zeitpunkt erhalten Sie sofort jeden Monat Ihre Caritabox."
          />
          <Faq
            question="Muss ich die Caritabox jeden Monat neu beantragen?"
            answer="Nein. Sie erhalten automatisch jeden Monat eine Lieferung von uns."
          />
          <Faq
            question="Kann ich den Inhalt meiner Caritabox monatlich neu bestimmen?"
            answer="Ja. Sie können jeden Monat den Inhalt Ihrer Caritabox selbst bestimmen. Es ist wichtig, dass Sie immer die Pflegehilfsmittel da haben, die für Sie wichtig sind. Daher können Sie per E-Mail oder telefonisch die Caritabox jederzeit ändern."
          />
          <Faq
            question="Ich bin privat versichert, kann ich Ihren Service trotzdem in Anspruch nehmen?"
            answer="Auch als privat versicherter können Sie Ihre Caritabox beantragen. Sie erhalten dann monatlich eine Rechnung, die Sie wie gewohnt an Ihre Pflegekasse weiterleiten können."
          />
          <Faq
            question="Wie lange und wie oft kann ich die Caritabox beziehen?"
            answer="Sie haben jeden Monat auf unbestimmte Zeit einen Anspruch auf Ihre kostenlose Caritabox. So lange Sie sich in häuslicher Pflege befinden und einen Pflegegrad haben."
          />
          <Faq
            question="Muss ich eine Zuzahlung leisten?"
            answer="Nein. Eine Zuzahlung ist nicht zu leisten. Die Kosten werden komplett von Ihrer Pflegekasse übernommen."
          />
        </div>
      </section>

      <LogoSection />

      <section className="gradient-section">
        <div className="container mx-auto px-4 py-10 lg:px-44">
          <h3 className="mb-8 text-3xl font-medium tracking-tight">
            Fragen zur Bestellung
          </h3>
          <Faq
            question="Wie kann ich meine Caritabox beantragen?"
            answer="Sie können Ihre Caritabox ganz einfach direkt online beantragen und online unterschreiben. Ihre Daten werden sicher und verschlüsselt übertragen. Falls Sie dies nicht wünschen, können Sie uns gern anrufen!"
          />
          <Faq
            question="Ich habe den Antrag online ausgefüllt und unterschrieben. Was muss ich jetzt tun?"
            answer="Nachdem Sie den Antrag online ausgefüllt und online unterschrieben haben müssen Sie nichts weiter tun. Ab sofort kümmern wir uns um die Bewilligung Ihrer Pflegekasse und senden Ihnen Ihre erste Caritabox direkt nach der Genehmigung."
          />
          <Faq
            question="Muss ich etwas unterschreiben?"
            answer="Ja. Die Unterschrift dient zur Identifikation für Ihre Pflegekasse. Die Unterschrift können Sie auch bei der Online-Beantragung direkt am Handy, Tablet oder PC einzeichnen."
          />
          <Faq
            question="Benötige ich ein Rezept vom Arzt?"
            answer="Nein. Sie benötigen für die Caritabox kein Rezept vom Arzt."
          />
          <Faq
            question="Gehe ich irgendeine Verpflichtung ein?"
            answer="Nein. Sie können die Caritabox jederzeit ohne Kündigungsfrist wieder abbestellen."
          />
        </div>
      </section>

      <Testimonials />

      <section className="gradient-section">
        <div className="container mx-auto px-4 py-10 lg:px-44">
          <h3 className="mb-8 text-3xl font-medium tracking-tight">
            Fragen zur Lieferung
          </h3>
          <Faq
            question="Wie erhalte ich die Caritabox?"
            answer="Sie erhalten Ihre Caritabox direkt bis zur Wohnungstür geliefert. Wir beauftragen DHL oder Hermes mit der Lieferung."
          />
          <Faq
            question="Kann ich eine abweichende Lieferanschrift angeben?"
            answer="Ja. Sie können eine andere Lieferanschrift angeben."
          />
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default HilfePage;
