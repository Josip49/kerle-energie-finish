import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Upload, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ReactNode } from "react";

const formSchema = z.object({
  vorname: z.string().min(1, "Vorname ist erforderlich"),
  nachname: z.string().min(1, "Nachname ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  telefon: z.string().optional(),
  ort: z.string().min(1, "Ort ist erforderlich"),
  plz: z.string().min(4, "PLZ ist erforderlich").max(5, "Ungültige PLZ"),
  anfrage: z.array(z.string()).min(1, "Bitte wählen Sie mindestens eine Anfrage"),
  baujahr: z.string().optional(),
  objekttyp: z.string().optional(),
  nachricht: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const anfrageOptionen = [
  "Allgemeine Anfrage",
  "Energie- & Fördermittelberatung",
  "Heizlastberechnung",
  "PV-Beratung",
  "Sanierungsfahrpläne (ISFP)",
  "Energieausweis",
  "Lüftungskonzept",
  "Wärmepumpenberatung",
];

const baujahrOptionen = [
  "vor 1950",
  "1950-1969",
  "1970-1979",
  "1980-1989",
  "1990-1999",
  "2000-2009",
  "2010-2019",
  "2020 oder neuer",
];

interface ContactFormDialogProps {
  children?: ReactNode;
  trigger?: ReactNode;
  className?: string;
}

const ContactFormDialog = ({ children, trigger, className }: ContactFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedAnfragen, setSelectedAnfragen] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      anfrage: [],
    },
  });

  const handleAnfrageChange = (option: string, checked: boolean) => {
    const updated = checked
      ? [...selectedAnfragen, option]
      : selectedAnfragen.filter((a) => a !== option);
    setSelectedAnfragen(updated);
    setValue("anfrage", updated);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Build email body
    const emailBody = `
Neue Anfrage über das Kontaktformular

Name: ${data.vorname} ${data.nachname}
E-Mail: ${data.email}
Telefon: ${data.telefon || "Nicht angegeben"}
PLZ/Ort: ${data.plz} ${data.ort}

Anfrage: ${data.anfrage.join(", ")}
Baujahr: ${data.baujahr || "Nicht angegeben"}
Objekttyp: ${data.objekttyp || "Nicht angegeben"}

Nachricht:
${data.nachricht || "Keine zusätzliche Nachricht"}

${selectedFiles.length > 0 ? `Hinweis: ${selectedFiles.length} Datei(en) wurden angehängt.` : ""}
    `.trim();

    const mailtoLink = `mailto:kerle@rothsee-energieberatung.de?subject=${encodeURIComponent(
      `Anfrage: ${data.anfrage[0]} - ${data.vorname} ${data.nachname}`
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open mail client
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after short delay
    setTimeout(() => {
      reset();
      setSelectedAnfragen([]);
      setSelectedFiles([]);
      setSubmitSuccess(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ? trigger : (
          <Button size="lg" className={className}>
            {children}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Angebot anfordern</DialogTitle>
        </DialogHeader>

        {submitSuccess ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Vielen Dank!</h3>
            <p className="text-muted-foreground">
              Ihr E-Mail-Programm wird geöffnet. Bitte senden Sie die E-Mail ab.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
            {/* Name */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vorname">
                  Vorname <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="vorname"
                  placeholder="Max"
                  {...register("vorname")}
                  className={errors.vorname ? "border-destructive" : ""}
                />
                {errors.vorname && (
                  <p className="text-sm text-destructive">{errors.vorname.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="nachname">
                  Nachname <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="nachname"
                  placeholder="Mustermann"
                  {...register("nachname")}
                  className={errors.nachname ? "border-destructive" : ""}
                />
                {errors.nachname && (
                  <p className="text-sm text-destructive">{errors.nachname.message}</p>
                )}
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">
                  E-Mail <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="max@beispiel.de"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefon">Telefon</Label>
                <Input
                  id="telefon"
                  type="tel"
                  placeholder="0151 12345678"
                  {...register("telefon")}
                />
              </div>
            </div>

            {/* PLZ & Ort */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="plz">
                  PLZ <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="plz"
                  placeholder="91161"
                  {...register("plz")}
                  className={errors.plz ? "border-destructive" : ""}
                />
                {errors.plz && (
                  <p className="text-sm text-destructive">{errors.plz.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="ort">
                  Ort <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="ort"
                  placeholder="Hilpoltstein"
                  {...register("ort")}
                  className={errors.ort ? "border-destructive" : ""}
                />
                {errors.ort && (
                  <p className="text-sm text-destructive">{errors.ort.message}</p>
                )}
              </div>
            </div>

            {/* Anfrage Checkboxes */}
            <div className="space-y-3">
              <Label>
                Art der Anfrage <span className="text-destructive">*</span>
              </Label>
              <div className="grid sm:grid-cols-2 gap-3">
                {anfrageOptionen.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={option}
                      checked={selectedAnfragen.includes(option)}
                      onCheckedChange={(checked) =>
                        handleAnfrageChange(option, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={option}
                      className="text-sm cursor-pointer leading-tight"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              {errors.anfrage && (
                <p className="text-sm text-destructive">{errors.anfrage.message}</p>
              )}
            </div>

            {/* Baujahr & Objekttyp */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="baujahr">Baujahr des Gebäudes</Label>
                <Select onValueChange={(value) => setValue("baujahr", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Baujahr wählen..." />
                  </SelectTrigger>
                  <SelectContent>
                    {baujahrOptionen.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="objekttyp">Art des Objekts</Label>
                <Select onValueChange={(value) => setValue("objekttyp", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Objekttyp wählen..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Einfamilienhaus">Einfamilienhaus</SelectItem>
                    <SelectItem value="Mehrfamilienhaus">Mehrfamilienhaus</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label>Dateien hochladen</Label>
              <p className="text-sm text-muted-foreground mb-2">
                z. B. Grundrisse, Energieausweis, Handwerkerangebote etc.
              </p>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Klicken zum Hochladen oder Dateien hierher ziehen
                  </span>
                </label>
              </div>
              {selectedFiles.length > 0 && (
                <div className="mt-3 space-y-2">
                  {selectedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2"
                    >
                      <span className="text-sm truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-2">
                Hinweis: Dateien werden per E-Mail versendet. Bei größeren Dateien kontaktieren Sie uns bitte direkt.
              </p>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="nachricht">Ihre Nachricht</Label>
              <Textarea
                id="nachricht"
                placeholder="Beschreiben Sie Ihr Anliegen..."
                rows={4}
                {...register("nachricht")}
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Wird gesendet..."
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Anfrage absenden
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Mit dem Absenden stimmen Sie unserer{" "}
              <a href="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </a>{" "}
              zu.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
