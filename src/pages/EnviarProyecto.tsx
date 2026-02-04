
import { useEffect, useState } from "react";
import { Check, Send, Building2, User, Mail, Phone, Lightbulb, Target, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function EnviarProyecto() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");

  // Form fields
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectSector, setProjectSector] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectObjectives, setProjectObjectives] = useState("");
  const [projectDuration, setProjectDuration] = useState("");
  const [projectBudget, setProjectBudget] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendProjectData = async (formData: any) => {
    if (!webhookUrl) {
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
          subject: `Nueva propuesta de proyecto - ${formData.projectTitle}`,
          contact_name: formData.contactName,
          contact_email: formData.contactEmail,
          contact_phone: formData.contactPhone,
          company: formData.company,
          position: formData.position,
          project_title: formData.projectTitle,
          project_type: formData.projectType,
          project_sector: formData.projectSector,
          project_description: formData.projectDescription,
          project_objectives: formData.projectObjectives,
          project_duration: formData.projectDuration,
          project_budget: formData.projectBudget,
          additional_info: formData.additionalInfo,
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
        }),
      });

      return true;
    } catch (error) {
      console.error("Error sending project:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactName || !contactEmail || !company || !projectTitle || !projectDescription) {
      toast({
        title: "Campos requeridos",
        description: "Por favor, completa todos los campos marcados con *",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    const formData = {
      contactName,
      contactEmail,
      contactPhone: contactPhone || "No especificado",
      company,
      position: position || "No especificado",
      projectTitle,
      projectType: projectType || "No especificado",
      projectSector: projectSector || "No especificado",
      projectDescription,
      projectObjectives: projectObjectives || "No especificado",
      projectDuration: projectDuration || "No especificado",
      projectBudget: projectBudget || "No especificado",
      additionalInfo: additionalInfo || "Ninguna"
    };

    console.log("Project proposal submitted:", formData);

    try {
      await sendProjectData(formData);
      
      setSubmitted(true);
      toast({
        title: "Proyecto enviado",
        description: "Tu propuesta ha sido enviada correctamente. Te contactaremos pronto para evaluar tu proyecto.",
      });
      
      setTimeout(() => {
        setSubmitted(false);
        // Reset form
        setContactName("");
        setContactEmail("");
        setContactPhone("");
        setCompany("");
        setPosition("");
        setProjectTitle("");
        setProjectType("");
        setProjectSector("");
        setProjectDescription("");
        setProjectObjectives("");
        setProjectDuration("");
        setProjectBudget("");
        setAdditionalInfo("");
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu propuesta. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative section bg-gradient-to-r from-primary/10 to-sea-light/20 pt-24 md:pt-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="flex justify-center mb-4">
                <Button asChild variant="outline" size="sm">
                  <Link to="/proyectos">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver a Proyectos
                  </Link>
                </Button>
              </div>
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Propuesta de Proyecto
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">
                Comparte tu Proyecto con MiHub
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                ¿Tienes una idea innovadora? Cuéntanos sobre tu proyecto y únete a nuestro ecosistema de soluciones tecnológicas.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-8 animate-fade-in">
                <h3 className="text-2xl font-bold text-center mb-6">Formulario de Propuesta de Proyecto</h3>
                
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
                    Configura tu webhook de Zapier para recibir las propuestas por email automáticamente.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Información de Contacto */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Información de Contacto
                    </h4>
                    
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
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">Teléfono</Label>
                        <Input
                          id="contact-phone"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="+34 600 000 000"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Empresa/Organización *</Label>
                        <Input
                          id="company"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Nombre de la empresa"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="position">Cargo/Posición</Label>
                        <Input
                          id="position"
                          value={position}
                          onChange={(e) => setPosition(e.target.value)}
                          placeholder="CEO, CTO, Director..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Información del Proyecto */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      Información del Proyecto
                    </h4>
                    
                    <div className="space-y-2">
                      <Label htmlFor="project-title">Título del Proyecto *</Label>
                      <Input
                        id="project-title"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                        placeholder="Nombre de tu proyecto"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="project-type">Tipo de Proyecto</Label>
                        <Select value={projectType} onValueChange={setProjectType}>
                          <SelectTrigger id="project-type">
                            <SelectValue placeholder="Seleccionar tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="startup">Startup</SelectItem>
                            <SelectItem value="app-movil">Aplicación Móvil</SelectItem>
                            <SelectItem value="plataforma-web">Plataforma Web</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="ia-machine-learning">IA/Machine Learning</SelectItem>
                            <SelectItem value="iot">Internet of Things (IoT)</SelectItem>
                            <SelectItem value="blockchain">Blockchain</SelectItem>
                            <SelectItem value="fintech">Fintech</SelectItem>
                            <SelectItem value="healthtech">Healthtech</SelectItem>
                            <SelectItem value="edtech">Edtech</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="project-sector">Sector</Label>
                        <Select value={projectSector} onValueChange={setProjectSector}>
                          <SelectTrigger id="project-sector">
                            <SelectValue placeholder="Seleccionar sector" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="turismo">Turismo</SelectItem>
                            <SelectItem value="salud">Salud</SelectItem>
                            <SelectItem value="educacion">Educación</SelectItem>
                            <SelectItem value="finanzas">Finanzas</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="logistica">Logística</SelectItem>
                            <SelectItem value="energia">Energía</SelectItem>
                            <SelectItem value="agricultura">Agricultura</SelectItem>
                            <SelectItem value="inmobiliario">Inmobiliario</SelectItem>
                            <SelectItem value="gobierno">Gobierno/Público</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="project-description">Descripción del Proyecto *</Label>
                      <Textarea
                        id="project-description"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        placeholder="Describe tu proyecto: ¿Qué problema resuelve? ¿Cómo funciona? ¿Cuál es la propuesta de valor?"
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="project-objectives">Objetivos y Metas</Label>
                      <Textarea
                        id="project-objectives"
                        value={projectObjectives}
                        onChange={(e) => setProjectObjectives(e.target.value)}
                        placeholder="¿Cuáles son los objetivos principales? ¿Qué esperas lograr?"
                        className="min-h-[100px]"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="project-duration">Duración Estimada</Label>
                        <Select value={projectDuration} onValueChange={setProjectDuration}>
                          <SelectTrigger id="project-duration">
                            <SelectValue placeholder="Seleccionar duración" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-3-meses">1-3 meses</SelectItem>
                            <SelectItem value="3-6-meses">3-6 meses</SelectItem>
                            <SelectItem value="6-12-meses">6-12 meses</SelectItem>
                            <SelectItem value="1-2-anos">1-2 años</SelectItem>
                            <SelectItem value="mas-2-anos">Más de 2 años</SelectItem>
                            <SelectItem value="no-definido">No definido</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="project-budget">Presupuesto Estimado</Label>
                        <Select value={projectBudget} onValueChange={setProjectBudget}>
                          <SelectTrigger id="project-budget">
                            <SelectValue placeholder="Seleccionar rango" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="menos-10k">Menos de 10.000€</SelectItem>
                            <SelectItem value="10k-25k">10.000€ - 25.000€</SelectItem>
                            <SelectItem value="25k-50k">25.000€ - 50.000€</SelectItem>
                            <SelectItem value="50k-100k">50.000€ - 100.000€</SelectItem>
                            <SelectItem value="100k-250k">100.000€ - 250.000€</SelectItem>
                            <SelectItem value="mas-250k">Más de 250.000€</SelectItem>
                            <SelectItem value="no-definido">No definido</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Información Adicional */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Información Adicional
                    </h4>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additional-info">Detalles Adicionales</Label>
                      <Textarea
                        id="additional-info"
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                        placeholder="¿Hay algo más que nos gustaría saber sobre tu proyecto? Estado actual, equipo, tecnologías, socios, etc."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>
                
                <Button type="submit" className="w-full btn-primary" disabled={isLoading} size="lg">
                  {isLoading ? (
                    <>
                      <Target className="mr-2 h-5 w-5 animate-spin" />
                      Enviando Propuesta...
                    </>
                  ) : submitted ? (
                    <>
                      <Check className="mr-2 h-5 w-5" />
                      Propuesta Enviada
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Propuesta de Proyecto
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
