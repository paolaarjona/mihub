
import { useState } from "react";
import { Check, CalendarIcon, Users, Building2, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

export default function BookingForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [eventDate, setEventDate] = useState<Date>();
  const [eventType, setEventType] = useState("");
  const [duration, setDuration] = useState("");
  const [participants, setParticipants] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [company, setCompany] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmailData = async (formData: any) => {
    if (!webhookUrl) {
      // Si no hay webhook configurado, usamos un endpoint predeterminado o mostramos error
      toast({
        title: "Configuración requerida",
        description: "Por favor, configura tu webhook de Zapier para enviar emails",
        variant: "destructive",
      });
      return false;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          to_email: "salvadormedinachao@gmail.com",
          subject: `Nueva solicitud de evento corporativo - ${formData.company}`,
          event_date: formData.eventDate,
          event_type: formData.eventType,
          duration: formData.duration,
          participants: formData.participants,
          contact_name: formData.contactName,
          contact_email: formData.contactEmail,
          contact_phone: formData.contactPhone,
          company: formData.company,
          additional_info: formData.additionalInfo,
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
        }),
      });

      return true;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!contactName || !contactEmail || !contactPhone || !company || !eventType || !duration) {
      toast({
        title: "Campos requeridos",
        description: "Por favor, completa todos los campos marcados con *",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    const formData = {
      eventDate: eventDate ? format(eventDate, "PPP") : "No especificada",
      eventType,
      duration,
      participants: participants || "No especificado",
      contactName,
      contactEmail,
      contactPhone,
      company,
      additionalInfo: additionalInfo || "Ninguna"
    };

    console.log("Event booking submitted:", formData);

    try {
      await sendEmailData(formData);
      
      setSubmitted(true);
      toast({
        title: "Solicitud enviada",
        description: "Tu solicitud ha sido enviada correctamente. Te contactaremos pronto.",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        // Reset all form fields
        setEventDate(undefined);
        setEventType("");
        setDuration("");
        setParticipants("");
        setContactName("");
        setContactEmail("");
        setContactPhone("");
        setCompany("");
        setAdditionalInfo("");
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="glass-card p-6 space-y-6 animate-fade-in [animation-delay:200ms]"
    >
      <h3 className="text-2xl font-bold text-center mb-6">Solicitar Evento Corporativo</h3>
      
      <div className="space-y-4">
        {/* Webhook Configuration */}
        <div className="space-y-2 p-4 bg-muted/30 rounded-lg">
          <Label htmlFor="webhook-url">Webhook de Zapier (Opcional)</Label>
          <Input
            id="webhook-url"
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            placeholder="https://hooks.zapier.com/hooks/catch/..."
            type="url"
          />
          <p className="text-xs text-muted-foreground">
            Configura tu webhook de Zapier para recibir las solicitudes por email automáticamente.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Datos de Contacto</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Nombre completo *</Label>
              <Input
                id="contact-name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Tu nombre completo"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Empresa *</Label>
              <Input
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Nombre de la empresa"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact-email">Email *</Label>
              <Input
                id="contact-email"
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="email@empresa.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contact-phone">Teléfono *</Label>
              <Input
                id="contact-phone"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="+34 600 000 000"
                required
              />
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Detalles del Evento</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Event Date */}
            <div className="space-y-2">
              <Label htmlFor="event-date">Fecha preferida del evento</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="event-date"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !eventDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {eventDate ? format(eventDate, "PPP") : <span>Seleccionar fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={eventDate}
                    onSelect={setEventDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            {/* Participants */}
            <div className="space-y-2">
              <Label htmlFor="participants">Número de participantes</Label>
              <Select value={participants} onValueChange={setParticipants}>
                <SelectTrigger id="participants" className="w-full">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5-10">5-10 personas</SelectItem>
                  <SelectItem value="11-20">11-20 personas</SelectItem>
                  <SelectItem value="21-50">21-50 personas</SelectItem>
                  <SelectItem value="51-100">51-100 personas</SelectItem>
                  <SelectItem value="100+">Más de 100 personas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Event Type */}
            <div className="space-y-2">
              <Label htmlFor="event-type">Tipo de evento *</Label>
              <Select value={eventType} onValueChange={setEventType}>
                <SelectTrigger id="event-type" className="w-full">
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="workshop">Workshop de IA</SelectItem>
                  <SelectItem value="training">Formación empresarial</SelectItem>
                  <SelectItem value="conference">Conferencia</SelectItem>
                  <SelectItem value="hackathon">Hackathon</SelectItem>
                  <SelectItem value="consulting">Sesión de consultoría</SelectItem>
                  <SelectItem value="innovation-lab">Laboratorio de innovación</SelectItem>
                  <SelectItem value="custom">Evento personalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Duration */}
            <div className="space-y-2">
              <Label htmlFor="duration">Duración aproximada *</Label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger id="duration" className="w-full">
                  <SelectValue placeholder="Seleccionar duración" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2-4h">2-4 horas</SelectItem>
                  <SelectItem value="half-day">Medio día (4h)</SelectItem>
                  <SelectItem value="full-day">Día completo (8h)</SelectItem>
                  <SelectItem value="2-days">2 días</SelectItem>
                  <SelectItem value="3-days">3 días</SelectItem>
                  <SelectItem value="week">Una semana</SelectItem>
                  <SelectItem value="custom">Duración personalizada</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-2">
          <Label htmlFor="additional-info">Información adicional</Label>
          <Textarea
            id="additional-info"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            placeholder="Describe tus objetivos, necesidades específicas, temas de interés, o cualquier otra información relevante para el evento..."
            className="min-h-[100px]"
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full btn-primary relative" disabled={isLoading}>
        {isLoading ? (
          <>
            <Clock className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : submitted ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Solicitud Enviada
          </>
        ) : (
          <>
            <Building2 className="mr-2 h-4 w-4" />
            Solicitar Información
          </>
        )}
      </Button>
    </form>
  );
}
