import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h1 className="text-3xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

            <div className="space-y-8 text-muted-foreground">
              {/* 1. Datenschutz auf einen Blick */}
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-lg font-semibold text-foreground mt-4">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
                  denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              {/* 2. Verantwortliche Stelle */}
              <section>
                <h2 className="text-xl font-semibold text-foreground">2. Verantwortliche Stelle</h2>
                <p>
                  KerLe Energieberatung<br />
                  Stefan Kerling & Kevin Leuschner GbR<br />
                  Lindenallee 33<br />
                  91161 Hilpoltstein<br /><br />
                  Telefon: 0162 3598287<br />
                  E-Mail: kerle@rothsee-energieberatung.de
                </p>
              </section>

              {/* 3. Datenerfassung auf dieser Website */}
              <section>
                <h2 className="text-xl font-semibold text-foreground">3. Datenerfassung auf dieser Website</h2>

                <h3 className="text-lg font-semibold text-foreground mt-4">Wie erfassen wir Ihre Daten?</h3>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
                  sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder uns per E-Mail,
                  Telefon oder WhatsApp mitteilen.
                </p>
                <p>
                  Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
                  Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit
                  des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
                  betreten.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6">Hosting und Server-Logfiles</h3>
                <p>
                  Diese Website wird bei IONOS SE gehostet. Der Hoster erhebt und speichert automatisch
                  Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt.
                  Dies sind:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>IP-Adresse des zugreifenden Rechners</li>
                  <li>Datum und Uhrzeit der Anfrage</li>
                  <li>Name und URL der abgerufenen Seite</li>
                  <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                  <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
                </ul>
                <p className="mt-2">
                  Diese Daten werden zur Sicherstellung eines störungsfreien Betriebs der Website, zur
                  Fehleranalyse sowie zur Erkennung und Abwehr von Angriffen und Missbrauch erhoben.
                </p>
                <p>
                  Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO. Unser berechtigtes Interesse liegt
                  in der Sicherheit, Stabilität und Verfügbarkeit der Website.
                </p>
                <p>
                  IONOS SE ist als Hosting-Dienstleister im Rahmen einer Auftragsverarbeitung gemäß
                  Art.&nbsp;28 DSGVO für uns tätig. Die Logfile-Daten werden nach [X&nbsp;Tage] automatisch gelöscht.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6">Cookies</h3>
                <p>
                  Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb
                  der Seite erforderlich sind (z.&nbsp;B. Session-Cookies). Es werden keine Marketing- oder
                  Tracking-Cookies eingesetzt.
                </p>
                <p>
                  Rechtsgrundlage ist §&nbsp;25 Abs.&nbsp;2 TTDSG i.&nbsp;V.&nbsp;m. Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO.
                </p>
              </section>

              {/* 4. Ihre Rechte */}
              <section>
                <h2 className="text-xl font-semibold text-foreground">4. Ihre Rechte</h2>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
                  Ihrer gespeicherten personenbezogenen Daten zu erhalten (Art.&nbsp;15 DSGVO). Sie haben außerdem
                  ein Recht auf Berichtigung (Art.&nbsp;16 DSGVO), Löschung (Art.&nbsp;17 DSGVO) und Einschränkung
                  der Verarbeitung (Art.&nbsp;18 DSGVO) sowie ein Recht auf Datenübertragbarkeit (Art.&nbsp;20 DSGVO).
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-4">Widerspruchsrecht (Art.&nbsp;21 DSGVO)</h3>
                <p>
                  Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß
                  Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art.&nbsp;21 DSGVO
                  Widerspruch gegen die Verarbeitung einzulegen. Legen Sie Widerspruch ein, werden wir Ihre
                  Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe nachweisen.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-4">Beschwerderecht bei einer Aufsichtsbehörde</h3>
                <p>
                  Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die
                  DSGVO verstößt, haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
                  Zuständig ist in der Regel die Aufsichtsbehörde des Bundeslandes, in dem Sie Ihren Wohnsitz haben,
                  oder die Behörde am Sitz unseres Unternehmens.
                </p>

                <p className="mt-4">
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
              </section>

              {/* 5. Kontaktaufnahme */}
              <section>
                <h2 className="text-xl font-semibold text-foreground">5. Kontaktaufnahme</h2>

                <h3 className="text-lg font-semibold text-foreground mt-4">Kontakt per E-Mail oder Telefon</h3>
                <p>
                  Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
                  daraus hervorgehenden personenbezogenen Daten (Name, E-Mail-Adresse, Inhalt der Anfrage)
                  zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                </p>
                <p>
                  Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                  eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                  Ergänzend stützen wir die Verarbeitung auf Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes
                  Interesse an der effizienten Bearbeitung von Anfragen).
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6">Kontaktformular</h3>
                <p>
                  Wenn Sie uns über das auf der Website bereitgestellte Kontaktformular eine Anfrage zukommen
                  lassen, werden die im Formular angegebenen Daten (z.&nbsp;B. Name, E-Mail-Adresse, Telefonnummer,
                  Inhalt der Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet und gespeichert.
                </p>
                <p>
                  Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO (vorvertragliche Maßnahmen bzw.
                  Vertragserfüllung) sowie Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse an
                  effizienter Kommunikation).
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6">Kontakt per WhatsApp</h3>
                <p>
                  Auf unserer Website befinden sich Buttons, über die Sie uns direkt per WhatsApp kontaktieren
                  können. Ein Klick auf einen solchen Button öffnet WhatsApp auf Ihrem Endgerät. Erst durch
                  Ihre aktive Nutzung wird eine Verbindung zu den Servern von WhatsApp (Meta Platforms Ireland
                  Limited) hergestellt. Dabei können technische Daten wie Ihre IP-Adresse und Geräteinformationen
                  an WhatsApp bzw. Meta übermittelt werden.
                </p>
                <p>
                  Im Rahmen der Kommunikation verarbeiten wir die von Ihnen mitgeteilten Daten wie
                  Telefonnummer, Name und Nachrichteninhalt zur Bearbeitung Ihrer Anfrage.
                </p>
                <p>
                  Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO (vorvertragliche Anfragen) bzw.
                  Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse an einer schnellen und
                  unkomplizierten Kommunikation).
                </p>
                <p>
                  Weitere Informationen zum Datenschutz bei WhatsApp entnehmen Sie bitte der
                  Datenschutzerklärung von WhatsApp/Meta.
                </p>
              </section>

              {/* 6. Speicherdauer */}
              <section>
                <h2 className="text-xl font-semibold text-foreground">6. Speicherdauer</h2>
                <p>
                  Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es für die Erfüllung
                  des jeweiligen Verarbeitungszwecks erforderlich ist. Nach Abschluss der Bearbeitung Ihrer
                  Anfrage werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
                  (z.&nbsp;B. handels- oder steuerrechtliche Aufbewahrungsfristen) einer Löschung entgegenstehen.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;