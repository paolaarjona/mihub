import { Leaf, Globe, Recycle, Heart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DecorativeShapes from "@/components/DecorativeShapes";

export default function SustainabilitySection() {
  const pillars = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Sostenibilidad",
    description:
    "Integramos prácticas sostenibles en cada proyecto, reduciendo la huella ambiental del sector turístico canario."
  },
  {
    icon: <Recycle className="h-8 w-8" />,
    title: "Regeneración",
    description:
    "Impulsamos modelos regenerativos que devuelven más al territorio de lo que toman, fortaleciendo ecosistemas locales."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Turismo Ético y Responsable",
    description:
    "Promovemos un turismo que respeta las comunidades, la cultura y el patrimonio natural de Canarias."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Turismo 360°",
    description:
    "Visión integral que conecta sostenibilidad, tecnología, comunidad y experiencia para un turismo transformador."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "ODS / Agenda 2030",
    description:
    "Alineados con los Objetivos de Desarrollo Sostenible de la ONU, contribuyendo activamente a las metas globales."
  }];


  const impactData = [
  { value: "5", label: "ODS alineados", suffix: "" },
  { value: "100", label: "eventos sostenibles", suffix: "+" },
  { value: "3.000", label: "profesionales sensibilizados", suffix: "+" },
  { value: "0", label: "huella neta de carbono objetivo", suffix: "" }];


  return (
    <section className="section bg-mihub-green/10 dark:bg-mihub-green/5 relative overflow-hidden">
      <DecorativeShapes variant="top-right" />
      <div className="container">
        {/* Foundation Identity Block - linear layout */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in">

          {/* Top bar: logo left, label right */}
          <div className="flex items-center justify-between mb-4">
            <img
              src="/lovable-uploads/fundacion-martinez-abolafio-logo.png"
              alt="Logo Fundación Martínez Abolafio"
              className="w-16 h-16 lg:w-20 lg:h-20 object-contain" />
            <span className="text-sm text-mihub-green font-medium uppercase tracking-wider">
              Fundación Martínez Abolafio
            </span>
          </div>

          {/* Full-width heading below */}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6 whitespace-nowrap">
            <span className="text-mihub-green">Impulsando oportunidades,</span>{" "}
            <span className="text-primary font-bold">transformando vidas</span>
          </h2>

          {/* Text with clear hierarchy - first paragraph larger */}
          <p className="text-base text-muted-foreground leading-relaxed mb-6 text-justify">
            MiHub nace del compromiso de{" "}
            <strong className="text-mihub-green">Fundación Martínez Abolafio</strong>
            , creada en 2014 como expresión del compromiso social del Grupo Martínez Abolafio.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 text-justify">
            La Fundación trabaja para{" "}
            <strong className="text-mihub-green">
              contribuir al desarrollo de una sociedad más creativa, sostenible e inclusiva en Canarias y África,
            </strong>{" "}
            impulsando iniciativas que generan oportunidades reales para las personas, fomentan el talento y promueven la innovación social.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 text-justify">
            A través de sus proyectos, conecta personas, empresas e instituciones para dar respuesta a los principales retos sociales,{" "}
            <strong className="text-mihub-green">
              mejorar la calidad de vida y avanzar hacia un modelo de desarrollo más sostenible y equitativo.
            </strong>
          </p>
          <p className="text-base text-muted-foreground leading-relaxed text-justify">
            En este contexto, <strong className="text-mihub-green">MiHub</strong> se configura como un espacio donde esa visión se activa, impulsando un{" "}
            <strong className="text-mihub-green">
              modelo turístico y empresarial que regenere, respete y transforme Canarias para las generaciones futuras.
            </strong>
          </p>
        </div>


        {/* Divider */}
        <div className="w-16 h-1 bg-mihub-green rounded-full mx-auto mb-10" />

        {/* Commitment Manifesto */}
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in">
          <span className="text-sm text-mihub-green font-medium uppercase tracking-wider">
            Nuestro Compromiso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Innovación al servicio del{" "}
            <span className="text-mihub-green">territorio</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Trabajamos alineados con la Agenda 2030 y los Objetivos de
            Desarrollo Sostenible de Naciones Unidas, integrando la
            sostenibilidad como eje transversal de toda nuestra actividad.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {pillars.map((pillar, index) =>
          <Card
            key={index}
            className="group hover:shadow-lg transition-all duration-300 border-mihub-green/20 animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}>
            
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-mihub-green/20 rounded-full flex items-center justify-center mx-auto mb-4 text-mihub-green group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="font-semibold mb-2 text-sm">{pillar.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>);

}