import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButtons from "@/components/WhatsAppButtons";
import CallDialog from "@/components/CallDialog";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  process?: string[];
  icon: ReactNode;
  children?: ReactNode;
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  benefits,
  process,
  icon,
  children
}: ServicePageLayoutProps) => {
  const emailSubject = encodeURIComponent("Kundenanfrage (Grund)");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <a
              href="/#leistungen"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Übersicht
            </a>

            <div className="max-w-4xl">
              <div className="service-icon mb-6">
                {icon}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {title}
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                {subtitle}
              </p>
              <p className="text-lg text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Ihre Vorteile
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {process && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    So läuft's ab
                  </h2>
                  <ol className="space-y-4">
                    {process.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {children}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Interesse geweckt?
              </h2>
              <p className="text-muted-foreground mb-8">
                Lassen Sie sich kostenlos und unverbindlich beraten. Wir nehmen uns Zeit für Ihre Fragen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CallDialog>
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt kostenlos anrufen
                </CallDialog>
                <Button size="lg" variant="outline" asChild>
                  <a href={`mailto:kerle@rothsee-energieberatung.de?subject=${emailSubject}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    E-Mail schreiben
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButtons />
    </div>
  );
};

export default ServicePageLayout;