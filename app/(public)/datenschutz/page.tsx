import Link from "next/link";
import {
  ContactSection,
  Faq,
  LogoSection,
  PageHeader,
  Testimonials,
} from "@/app/components";

const DatenschutzPage = () => {
  return (
    <>
      <PageHeader title="Datenschutzerklärung" />

      <section className="gradient-section">
        <div className="container mx-auto px-4 py-10 lg:px-44">
          <h3 className="my-6 text-3xl font-medium tracking-tight">
            Gegenstand
          </h3>
          <p className="my-3 text-sm leading-relaxed">
            Nachfolgend möchten wir Sie darüber informieren, welche
            personenbezogenen Daten wir von Ihnen bei der Nutzung unserer
            Angebote und den nachfolgend beschriebenen Vorgängen verarbeiten.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Personenbezogene Daten (nachfolgend „Daten“) sind alle Daten, die
            auf Sie persönlich beziehbar sind, z.B. Ihr Name, Ihre
            E-Mail-Adresse und Ihre Nutzung unserer Angebote.
          </p>
          <h3 className="my-6 text-3xl font-medium tracking-tight">
            Verantwortlicher
          </h3>
          <p className="my-3 text-sm leading-relaxed">
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO)
            ist Caritabox GmbH, E-Mail:{" "}
            <Link className="underline" href="mailto:info@caritabox.de">
              info@caritabox.de
            </Link>
            .
          </p>
          <h3 className="my-6 text-3xl font-medium tracking-tight">
            Browserdaten
          </h3>
          <p className="my-3 text-sm leading-relaxed">
            Sobald Sie unsere Website aufrufen, erhebt unser Webserver, auf dem
            unsere Website liegt, automatisch die folgenden von Ihrem Browser
            übermittelten Daten:
          </p>
          <ul className="my-3 ml-8 text-sm leading-relaxed">
            <li className="list-disc">IP-Adresse Ihres Endgerätes</li>
            <li className="list-disc">Datum und Uhrzeit der Anfrage</li>
            <li className="list-disc">
              Inhalt der Anforderung (konkrete Seite)
            </li>
            <li className="list-disc">
              Zugriffsstatus und übertragene Datenmenge
            </li>
            <li className="list-disc">
              Produkt- und Versionsinformationen Ihres Browsers
            </li>
            <li className="list-disc">Betriebssystem Ihres Endgerätes</li>
            <li className="list-disc">
              von welcher Website aus der Zugriff auf unsere Website erfolgte
            </li>
          </ul>
          <p className="my-3 text-sm leading-relaxed">
            Diese Daten sind für uns technisch erforderlich, um Ihnen unsere
            Website anzuzeigen und um die Stabilität und Sicherheit unserer
            Website zu gewährleisten. Empfänger ist in diesem Zusammenhang unser
            Server-Host.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Die IP-Adresse Ihres Endgerätes wird dabei nur für die Zeit Ihrer
            Nutzung der Website gespeichert und im Anschluss daran unverzüglich
            gelöscht oder durch Kürzung anonymisiert.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Die Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO, wobei sich
            unsere berechtigten Interessen aus den vorgenannten Zwecken ergeben.
          </p>
          <h3 className="my-6 text-3xl font-medium tracking-tight">
            Funktionelle Cookies
          </h3>
          <p className="my-3 text-sm leading-relaxed">
            Wir setzen Cookies ein, um die Nutzung unserer Website komfortabel
            für Sie zu gestalten.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Cookies sind kleine Textdateien, die im Rahmen Ihres Besuchs unserer
            Website von unserem Webserver an Ihren Browser gesandt und von
            diesem auf Ihrem Rechner für einen späteren Abruf vorgehalten
            werden. Die Cookies ermöglichen die Wiedererkennung Ihres
            Internetbrowsers.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Wir setzen Cookies ein, um Ihre Voreinstellungen verfügbar zu
            machen, um Ihre persönlichen Daten bei zukünftigen Interaktionen mit
            unserer Website in die Eingabemaske einzutragen zu lassen oder um
            Ihre Autorisierung sicherzustellen.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Session-Cookies werden automatisiert gelöscht, wenn Sie den Browser
            schließen. Andere Cookies werden automatisiert nach einer
            vorgegebenen Dauer gelöscht, die sich je nach Cookie unterscheiden
            kann. Die genaue Speicherdauer können Sie den Einstellungen Ihres
            Browsers entnehmen.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Sie können Ihre Browser-Einstellung entsprechend Ihren Wünschen
            konfigurieren und z. B. die Annahme von Third-Party-Cookies oder
            allen Cookies ablehnen. Wir weisen Sie darauf hin, dass Sie dann
            eventuell nicht alle Funktionen dieser Website nutzen können.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Sie können die Cookies in den Sicherheitseinstellungen Ihres
            Browsers jederzeit löschen.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Die Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO, wobei sich
            unsere berechtigten Interessen aus den vorgenannten Zwecken ergeben.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Diese Webseite verwendet Cookies. Wir verwenden Cookies, um Inhalte
            und Anzeigen zu personalisieren, Funktionen für soziale Medien
            anbieten zu können und die Zugriffe auf unsere Website zu
            analysieren. Außerdem geben wir Informationen zu Ihrer Verwendung
            unserer Website an unsere Partner für soziale Medien, Werbung und
            Analysen weiter. Unsere Partner führen diese Informationen
            möglicherweise mit weiteren Daten zusammen, die Sie ihnen
            bereitgestellt haben oder die sie im Rahmen Ihrer Nutzung der
            Dienste gesammelt haben.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Cookies sind kleine Textdateien, die von Webseiten verwendet werden,
            um die Benutzererfahrung effizienter zu gestalten.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Laut Gesetz können wir Cookies auf Ihrem Gerät speichern, wenn diese
            für den Betrieb dieser Seite unbedingt notwendig sind. Für alle
            anderen Cookie-Typen benötigen wir Ihre Erlaubnis.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Diese Seite verwendet unterschiedliche Cookie-Typen. Einige Cookies
            werden von Drittparteien platziert, die auf unseren Seiten
            erscheinen.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Sie können Ihre Einwilligung jederzeit von der Cookie-Erklärung auf
            unserer Website ändern oder widerrufen.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Erfahren Sie in unserer Datenschutzrichtlinie mehr darüber, wer wir
            sind, wie Sie uns kontaktieren können und wie wir personenbezogene
            Daten verarbeiten.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Bitte geben Sie Ihre Einwilligungs-ID und das Datum an, wenn Sie uns
            bezüglich Ihrer Einwilligung kontaktieren.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Ihre Einwilligung trifft auf die folgenden Domains zu:
            <Link href="/">caritabox.de</Link>
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Die Cookie-Erklärung wurde das letzte Mal am 12.07.2023 von{" "}
            <Link
              href="https://www.cookiebot.com"
              target="_blank"
              rel="noopener"
              title="Cookiebot"
              className="underline"
            >
              Cookiebot
            </Link>{" "}
            aktualisiert:
          </p>

          {/* <div className="border border-slate-800 p-3 dark:border-slate-300">
            <h5 className="font-medium tracking-tight">Notwendig (3)</h5>
            <p className="my-3 text-sm leading-relaxed">
              Notwendige Cookies helfen dabei, eine Webseite nutzbar zu machen,
              indem sie Grundfunktionen wie Seitennavigation und Zugriff auf
              sichere Bereiche der Webseite ermöglichen. Die Webseite kann ohne
              diese Cookies nicht richtig funktionieren.
            </p>
            <table className="my-3 table-auto text-sm leading-relaxed">
              <thead>
                <tr>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Anbieter</th>
                  <th className="p-2 text-left">Zweck</th>
                  <th className="p-2 text-left">Ablauf</th>
                  <th className="hidden p-2 text-left sm:block">Typ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800 dark:border-slate-300">
                  <td className="p-2">CookieConsent</td>
                  <td className="p-2">Cookiebot</td>
                  <td className="p-2">
                    Speichert den Zustimmungsstatus des Benutzers für Cookies
                    auf der aktuellen Domäne.
                  </td>
                  <td className="p-2">1 Jahr</td>
                  <td className="hidden p-2 sm:block">HTTP Cookie</td>
                </tr>
                <tr className="border-b border-slate-800 dark:border-slate-300">
                  <td className="p-2">caritabox_session</td>
                  <td className="p-2">caritabox.de</td>
                  <td className="p-2">Anstehend</td>
                  <td className="p-2">1 Tag</td>
                  <td className="hidden p-2 sm:block">HTTP Cookie</td>
                </tr>
                <tr>
                  <td className="p-2">XSRF-TOKEN</td>
                  <td className="p-2">caritabox.de</td>
                  <td className="p-2">
                    Gewährleistet die Sicherheit beim Browsen für Besucher durch
                    Verhinderung von Cross-Site Request Forgery. Dieser Cookie
                    ist wesentlich für die Sicherheit der Webseite und des
                    Besuchers.
                  </td>
                  <td className="p-2">1 Tag</td>
                  <td className="hidden p-2 sm:block">HTTP Cookie</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border border-slate-800 p-3 dark:border-slate-300">
            <h5 className="font-medium tracking-tight">Statistiken (4)</h5>
            <p className="my-3 text-sm leading-relaxed">
              Statistik-Cookies helfen Webseiten-Besitzern zu verstehen, wie
              Besucher mit Webseiten interagieren, indem Informationen anonym
              gesammelt und gemeldet werden.
            </p>
            <table className="my-3 table-auto text-sm leading-relaxed">
              <thead>
                <tr>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Anbieter</th>
                  <th className="p-2 text-left">Zweck</th>
                  <th className="p-2 text-left">Ablauf</th>
                  <th className="hidden p-2 text-left sm:block">Typ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800 dark:border-slate-300">
                  <td className="p-2">_ga</td>
                  <td className="p-2">Google</td>
                  <td className="p-2">
                    Registriert eine eindeutige ID, die verwendet wird, um
                    statistische Daten dazu, wie der Besucher die Website nutzt,
                    zu generieren.
                  </td>
                  <td className="p-2">2 Jahre</td>
                  <td className="hidden p-2 sm:block">HTTP Cookie</td>
                </tr>
                <tr className="border-b border-slate-800 dark:border-slate-300">
                  <td className="p-2">_ga_#</td>
                  <td className="p-2">Google</td>
                  <td className="p-2">
                    Sammelt Daten dazu, wie oft ein Benutzer eine Website
                    besucht hat, sowie Daten für den ersten und letzten Besuch.
                    Von Google Analytics verwendet.
                  </td>
                  <td className="p-2">2 Jahre</td>
                  <td className="hidden p-2 sm:block">HTTP Cookie</td>
                </tr>
                <tr>
                  <td className="p-2">_gat</td>
                  <td className="p-2">Google</td>
                  <td className="p-2">
                    Wird von Google Analytics verwendet, um die Anforderungsrate
                    einzuschränken
                  </td>
                  <td className="p-2">1 Tag</td>
                  <td className="hidden p-2 sm:block">HTTP Cookie</td>
                </tr>
                <tr>
                  <td className="p-2">_gid</td>
                  <td className="p-2">Google</td>
                  <td className="p-2">
                    Registriert eine eindeutige ID, die verwendet wird, um
                    statistische Daten dazu, wie der Besucher die Website nutzt,
                    zu generieren.
                  </td>
                  <td className="p-2">1 Tag</td>
                  <td className="hidden p-2 sm:block">HTTP Cookie</td>
                </tr>
              </tbody>
            </table>
          </div> */}
          <h3 className="my-6 text-3xl font-medium tracking-tight">
            Ihre Anfrage
          </h3>
          <p className="my-3 text-sm leading-relaxed">
            Wir bieten Ihnen verschiedene Kontaktmöglichkeiten, z.B. unsere
            Anschrift, unsere E-Mail-Adresse, unsere Telefonnummer, u.U.
            Chatsysteme, die Möglichkeit zu einer Online-Terminvereinbarung,
            Auftritte in sozialen Medien und unser Kontaktformular.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Wenn Sie mit uns Kontakt aufnehmen, nutzen wir die von Ihnen
            mitgeteilten Daten, wie z.B. Ihre E-Mail-Adresse, Ihren Namen und
            den Inhalt Ihrer Anfrage, um Ihre Anfrage zu bearbeiten.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            In Rahmen der Kommunikation setzen wir u.U. zusätzlich Messenger
            ein. Sie sind jederzeit berechtigt unsere weiteren
            Kommunikationsmittel zu nutzen. Nutzt der Messenger eine
            Ende-zu-Ende-Verschlüsselung, so kann der Messenger-Anbieter nicht
            auf den Nachrichteninhalt zugreifen. Jedoch hat der
            Messenger-Dienstleister u.U. Zugriff auf die Information, dass eine
            Kommunikation stattgefunden hat und welches Gerät genutzt wurde.
            Diese Daten werden aber durch den Messenger-Anbieter verarbeitet,
            lesen Sie hierzu dessen Datenschutzerklärung.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Die hierbei anfallenden Daten löschen wir, nachdem die Speicherung
            nicht mehr erforderlich ist, oder schränken die Verarbeitung ein,
            falls gesetzliche Aufbewahrungspflichten bestehen.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Die Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. b DSGVO.
          </p>
          <h3 className="my-6 text-3xl font-medium tracking-tight">
            Kundenkonto
          </h3>
          <p className="my-3 text-sm leading-relaxed">
            Wenn Sie auf unseren Angeboten ein Kundenkonto erstellen, um die
            damit verbundenen Funktionen nutzen zu können, z.B. um Details zu
            Ihrem Antrag einzusehen, fragen wir im Registrierungsvorgang
            bestimmte Daten ab, um Ihr Konto zu erstellen.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Notwendige Pflichtangaben sind markiert, weitere Angaben sind
            freiwillig. Wir löschen Ihre sonstigen Daten nach Ablauf der
            zivilrechtlichen Verjährungsfristen. Ebenfalls können Sie Ihr
            Kundenkonto jederzeit löschen, durch Nutzung der Funktion im Konto
            oder eine direkte Nachricht an uns.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Die Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. b DSGVO.
          </p>
          <h3 className="my-6 text-3xl font-medium tracking-tight">
            Bewerbungen
          </h3>
          <p className="my-3 text-sm leading-relaxed">
            Falls wir auf der Suche nach Mitarbeitern sind, veröffentlichen wir
            Stellenausschreibungen.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Um Ihre Bewerbung bearbeiten zu können, benötigen wir bestimmte
            Daten von Ihnen.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Neben Ihrem Namen und Ihren Kontaktdaten brauchen und verarbeiten
            wir auch Ihre sonstigen Bewerberdaten, z.B. Ihr Bewerbungsschreiben,
            Lebenslauf, Zeugnisse oder Gesprächsnotizen.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Die im Bewerbungsverfahren anfallenden Daten löschen wir, wenn die
            Daten für den Zweck der Bewerbung nicht mehr gebraucht werden. Dies
            ist nach einer Frist von höchstens sechs Monaten nach Ende des
            Bewerbungsverfahrens der Fall, sollte eine Anstellung nicht
            erfolgen. Dies gilt nicht, sofern gesetzliche Bestimmungen einer
            Löschung entgegenstehen, die Daten zum Zwecke der Beweisführung
            erforderlich sind oder Sie einer längeren Speicherdauer ausdrücklich
            zugestimmt haben.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Falls wir Sie um Einwilligung bitten, z.B. in die längere
            Speicherung Ihrer Daten, ist die Rechtsgrundlage Art. 6 Abs. 1 S. 1
            lit. a DSGVO, § 26 Abs. 2 BDSG. Ansonsten ist die Rechtsgrundlage
            Art. 6 Abs. 1 S. 1 lit. b DSGVO, § 26 BDSG.
          </p>
          <h3 className="my-6 text-3xl font-medium tracking-tight">
            Geschäftsbeziehung
          </h3>
          <p className="my-3 text-sm leading-relaxed">
            Für das Zustandekommen wie auch für die Durchführung eines Vertrags
            über die von uns oder von Ihnen angebotenen Leistungen benötigen wir
            personenbezogene Daten.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Im Rahmen der Anbahnung bzw. der Durchführung des Vertrags müssen
            Sie diejenigen personenbezogenen Daten bereitstellen, die für die
            Begründung, Durchführung und Beendigung des Vertragsverhältnisses
            und die Erfüllung der damit verbundenen vertraglichen Pflichten
            erforderlich sind. Wir verarbeiten Ihre Daten, um den Vertrag mit
            Ihnen sowie um bestehende gesetzliche Vorgaben, z.B. handels- oder
            steuerrechtlicher Natur, zu erfüllen. Dies kann eine Weitergabe von
            Daten an Subunternehmer, Zahlungsdienstleister oder Behörden
            beinhalten.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Wir sind aufgrund handels- und steuerrechtlicher Vorgaben
            verpflichtet, die Vertragsdaten für zehn Jahre zu speichern.
            Allerdings nehmen wir nach zwei Jahren eine Einschränkung der
            Verarbeitung vor, d.h. Ihre Daten werden nur zur Einhaltung der
            gesetzlichen Verpflichtungen eingesetzt.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Die Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. b DSGVO.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Wir verarbeiten Daten von Patienten, insbesondere Gesundheitsdaten,
            von der Bedarfsermittlung über den Erhalt der ärztlichen Verordnung,
            der Erstellung eines Kostenvoranschlags, dem Genehmigungsantrag bei
            der jeweiligen Krankenkasse, der Einbeziehung von
            Dienstleistern/Kooperationspartnern, der Auslieferung und der
            Unterweisung bis hin zur Abrechnung allein zum Zweck der Heil- und
            Hilfsmittelversorgung.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Wir sind aufgrund handels- und steuerrechtlicher Vorgaben
            verpflichtet, die Vertragsdaten für zehn Jahre zu speichern.
            Allerdings nehmen wir nach zwei Jahren eine Einschränkung der
            Verarbeitung vor, d.h. Ihre Daten werden nur zur Einhaltung der
            gesetzlichen Verpflichtungen eingesetzt.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Die Rechtsgrundlage ist je nach Art der Krankenversicherung
            (gesetzlich oder privat) und dem Umfang der an die Krankenkasse
            übermittelten Daten entweder das SGB V oder die Einwilligung des
            Patienten.
          </p>
          <h3 className="my-6 text-3xl font-medium tracking-tight">
            Dienste von Drittanbietern
          </h3>
          <p className="my-3 text-sm leading-relaxed">
            Wir setzen Dienste von Drittanbietern ein, um unsere Angebote zu
            optimieren.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Wenn Sie ein Angebot aufrufen, das einen solchen Dienst enthält,
            wird u.U. eine direkte Verbindung mit den Servern des Drittanbieters
            aufgebaut. Der Drittanbieter erhält daher die Information, dass Sie
            bzw. Ihre IP-Adresse die entsprechende Seite unseres Angebotes
            aufgerufen haben.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Falls Sie beim Anbieter des Dienstes eingeloggt sind, kann der
            Drittanbieter Ihren Besuch unseres Angebots Ihrem Konto zuordnen.
            Wenn Sie mit den Diensten interagieren, zum Beispiel einen Button
            betätigen, wird dies von Ihrem Endgerät direkt an den Drittanbieter
            übermittelt. Wenn Sie nicht möchten, dass ein Drittanbieter, bei dem
            Sie ein Konto unterhalten, über unser Angebote Daten über Sie
            erfasst, müssen Sie sich vor Ihrem Besuch unserer Angebote bei dem
            jeweiligen Konto ausloggen.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Teils kommen Verfahren zur Identifikation und Wiedererkennung zum
            Einsatz, die auf Ihrem Endgerät gespeichert und/oder aus automatisch
            übertragenen Informationen Ihres Endgeräts erzeugt werden. Dies
            können z.B. Cookies oder Fingerprint-Verfahren sein. Soweit
            erforderlich bieten wir Ihnen ein Tool, mit dem Sie den Einsatz
            derartiger Verfahren steuern können.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Zweck und Umfang der Erhebung und Nutzung Ihrer Daten sowie Ihre
            diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz
            Ihrer Privatsphäre durch den Drittanbieter entnehmen Sie bitte auch
            den Datenschutzhinweisen des jeweiligen Drittanbieters.
          </p>
          <p className="my-3 text-sm leading-relaxed">Eingebettete Dienste:</p>
          <p className="my-3 text-sm leading-relaxed">
            Wir betten Dienste von Drittanbietern ein, um unsere Angebote durch
            zusätzliche Dienste informativer für Sie zu gestalten.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Im Einzelnen betten wir Dienste von folgenden Anbietern auf unserer
            Website ein:
          </p>
          <ul className="my-3 ml-8 text-sm leading-relaxed">
            <li className="list-disc">
              Vimeo - Website: https://vimeo.com/de/ ; Datenschutzhinweise:
              https://vimeo.com/privacy
            </li>
            <li className="list-disc">
              Font Awesome - Website: https://fontawesome.com/ ;
              Datenschutzhinweise: https://fontawesome.com/privacy
            </li>
          </ul>
          <p className="my-3 text-sm leading-relaxed">Analysedienste:</p>
          <p className="my-3 text-sm leading-relaxed">
            Wir setzen Analyse-Dienste ein, um das Nutzerverhalten der Besucher
            unserer Angebote zu erfassen, statistisch auszuwerten und mithilfe
            der gewonnenen Erkenntnisse unsere Angebote zu verbessern und für
            Sie als Nutzer interessanter auszugestalten.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Im Einzelnen setzen wir die folgenden Analyse-Werkzeuge auf unserer
            Website ein:
          </p>
          <ul className="my-3 ml-8 text-sm leading-relaxed">
            <li className="list-disc">
              Google Analytics - Website:
              https://marketingplatform.google.com/intl/de/about/analytics/ ;
              Datenschutzhinweise: https://policies.google.com/privacy
            </li>
            <li className="list-disc">
              Facebook-Pixel - Website:
              https://developers.facebook.com/docs/plugins ;
              Datenschutzhinweise: https://www.facebook.com/about/privacy
            </li>
          </ul>
          <p className="my-3 text-sm leading-relaxed">Werbedienste:</p>
          <p className="my-3 text-sm leading-relaxed">
            Wir setzen Werbedienste bzw. Dienste zur Erfolgsmessung ein, um
            Ihnen passende Werbung anhand Ihrer potenziellen Interessen zu
            zeigen sowie um die Effektivität unserer Werbung zu messen. Hierbei
            wird Ihr Nutzungsverhalten bei Besuch unserer oder dem Besuch
            anderer Angebote ausgewertet und/oder Werbung anhand anderer beim
            Werbedienst vorhandener Daten auf Sie zugeschnitten.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Wir selbst erheben und verarbeiten hierbei keine Daten. Wir erhalten
            vom Werbedienst lediglich statistische Auswertungen zur Verfügung
            gestellt. Anhand dieser Auswertungen können wir erkennen, welche der
            eingesetzten Werbemaßnahmen besonders effektiv sind und
            Optimierungen vornehmen.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Im Einzelnen setzen wir die folgenden Werbedienste bzw. Dienste zur
            Erfolgsmessung auf unserer Website ein:
          </p>
          <ul className="my-3 ml-8 text-sm leading-relaxed">
            <li className="list-disc">
              Google Ads - Website: https://ads.google.com/intl/de_de/home/ ;
              Datenschutzhinweise: https://policies.google.com/privacy
            </li>
            <li className="list-disc">
              Facebook Custom Audiences - Website:
              https://de-de.facebook.com/business/help/341425252616329?id=2469097953376494
              ; Datenschutzhinweise: https://www.facebook.com/about/privacy
            </li>
          </ul>
          <p className="my-3 text-sm leading-relaxed">
            Falls wir Sie um Einwilligung für die Nutzung der Dienste bitten,
            ist die Rechtsgrundlage Art. 6 Abs. 1 S. 1 lit. a DSGVO. Ansonsten
            ist die Rechtsgrundlage Art. 6 Abs. 1 S. 1 lit. f DSGVO, wobei sich
            unsere berechtigten Interessen aus den vorgenannten Zwecken ergeben.
          </p>

          <h3 className="my-6 text-3xl font-medium tracking-tight">
            Dienstleister
          </h3>
          <p className="my-3 text-sm leading-relaxed">
            Soweit wir Dienstleister einsetzen, die im Rahmen einer sog.
            Auftragsverarbeitung nach Art. 28 DSGVO für uns tätig werden, haben
            wir mit diesen einen entsprechenden Vertrag geschlossen.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Soweit wir Dienstleister in sog. Drittländer außerhalb der
            Europäischen Union bzw. des Europäischen Wirtschaftsraums einsetzen,
            lassen wir Ihre Daten nur in Drittländern mit einem durch die
            EU-Kommission geprüften Datenschutzniveau, auf Grundlage besonderer
            Garantien, wie z.B. vertraglicher Verpflichtung durch sog.
            Standardschutzklauseln der EU-Kommission, verarbeiten.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Nähere Informationen stellen wir Ihnen auf Anfrage gern bereit.
          </p>

          <h3 className="my-6 text-3xl font-medium tracking-tight">
            Auftritte in sozialen Medien
          </h3>
          <p className="my-3 text-sm leading-relaxed">
            Wir betreiben Auftritte in sozialen Medien, um mit unseren Kunden,
            Interessenten und Nutzern zu kommunizieren und über unsere
            Leistungen zu informieren. In der Regel werden Cookies auf den
            Rechnern der Nutzer gespeichert. Bei Cookies handelt es sich um
            kleine Textdateien, die auf der Festplatte dem verwendeten Browser
            zugeordnet gespeichert werden und durch welche der Stelle, die den
            Cookie setzt (hier durch das soziale Netzwerk), bestimmte
            Informationen zufließen.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Die Cookies ermöglichen die Erstellung von Statistiken über die
            Nutzung eines Auftritts in den sozialen Netzwerken. Die Verarbeitung
            kann unabhängig davon stattfinden, ob Sie ein Profil bei dem
            sozialen Netzwerk haben und bei Ihrem Besuch in diesem eingeloggt
            sind. Ferner werden die Daten der Nutzer regelmäßig auch für
            Werbezwecke genutzt, indem Nutzungsprofile (insbesondere der
            angemeldeten Nutzer) über das Nutzungsverhalten erstellt und für die
            Schaltung von passenden Werbeanzeigen genutzt werden. Das soziale
            Netzwerk kann außerdem den Besuch unseres Auftritts zu Ihrem Profil
            zuordnen. Bezogen auf unsere Beiträge oder den Besuch unseres
            Auftritts, können wir Statistiken (insb. demographisch und
            geographisch) über die Nutzung in anonymisierter Form einsehen.
            Soweit erforderlich bietet Ihnen das soziale Netzwerk ein Tool oder
            Einstellungsmöglichkeiten, mit dem Sie den Einsatz derartiger
            Verfahren steuern können.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Die Rechtsgrundlage für den Betrieb unseres Auftritts in sozialen
            Medien ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes
            Interesse ist die umfassende und optimierte Information der Nutzer.
            Wir weisen darauf hin, dass nur das jeweilige soziale Netzwerk
            vollen Zugriff auf die gesamten Daten hat und daher ein effektiver
            Auskunftsanspruch direkt beim sozialen Netzwerk gestellt werden
            sollte.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Wir haben mit Meta Platforms Ireland Limited einen Vertrag über die
            gemeinsame Verantwortlichkeit geschlossen
            (https://de-de.facebook.com/legal/terms/page_controller_addendum),
            im Zusammenhang mit der Erhebung von Daten unserer Besucher.
            Informationen u.a. zu Art, Umfang und Zweck der Verarbeitung und der
            Wahrnehmung Ihrer Rechte finden Sie unter
            https://www.facebook.com/about/privacy sowie in den Informationen zu
            Seiten-Insights-Daten unter
            https://www.facebook.com/legal/terms/information_about_page_insights_data.
          </p>

          <h3 className="my-6 text-3xl font-medium tracking-tight">
            Ihre Rechte
          </h3>
          <p className="my-3 text-sm leading-relaxed">
            Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
            betreffenden Daten:
          </p>
          <ul className="my-3 ml-8 text-sm leading-relaxed">
            <li className="list-disc">Recht auf Auskunft</li>
            <li className="list-disc">Recht auf Berichtigung oder Löschung</li>
            <li className="list-disc">
              Recht auf Einschränkung der Verarbeitung
            </li>
            <li className="list-disc">
              Recht auf Widerspruch gegen die Verarbeitung
            </li>
            <li className="list-disc">Recht auf Datenübertragbarkeit</li>
            <li className="list-disc">
              Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde
            </li>
          </ul>
          <p className="my-3 text-sm leading-relaxed">
            Falls Sie uns eine Einwilligung zur Verarbeitung Ihrer Daten erteilt
            haben, können Sie diese jederzeit mit Wirkung für die Zukunft
            widerrufen.
          </p>
          <p className="my-3 text-sm leading-relaxed">
            Sie können Direktwerbung jederzeit widersprechen. Falls Ihre
            besondere Situation dies erfordert, können Sie jederzeit auch
            Verarbeitungen aufgrund von Art. 6 Abs. 1 S. 1 lit. f DSGVO
            widersprechen.
          </p>
        </div>
      </section>
    </>
  );
};

export default DatenschutzPage;
