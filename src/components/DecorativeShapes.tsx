// Componente de formas geométricas decorativas según el manual de marca miHUB
// Incluye rectángulos redondeados, círculos y líneas onduladas con colores secundarios

interface DecorativeShapesProps {
  variant?: 'top-right' | 'bottom-left' | 'center' | 'top-left' | 'bottom-right';
  className?: string;
}

export default function DecorativeShapes({ variant = 'top-right', className = '' }: DecorativeShapesProps) {
  const getShapes = () => {
    switch (variant) {
      case 'top-right':
        return (
          <svg className={`absolute ${className}`} width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ top: '-10%', right: '-5%', opacity: 0.6, pointerEvents: 'none' }}>
            {/* Círculo azul claro (mihub-s6) */}
            <circle cx="450" cy="80" r="60" stroke="hsl(var(--mihub-s6))" strokeWidth="8" fill="none" className="animate-float" style={{ animationDelay: '0s' }} />
            
            {/* Rectángulo redondeado amarillo (secondary) */}
            <path d="M 320 120 L 420 120 Q 440 120 440 140 L 440 180 Q 440 200 420 200 L 320 200 Q 300 200 300 180 L 300 140 Q 300 120 320 120 Z" 
                  stroke="hsl(var(--secondary))" strokeWidth="8" fill="none" className="animate-float" style={{ animationDelay: '0.5s' }} />
            
            {/* Línea ondulada verde (mihub-s5) */}
            <path d="M 500 200 Q 520 180 540 200 T 580 200" stroke="hsl(var(--mihub-s5))" strokeWidth="10" strokeLinecap="round" fill="none" className="animate-pulse-slow" />
          </svg>
        );
      
      case 'bottom-left':
        return (
          <svg className={`absolute ${className}`} width="500" height="350" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ bottom: '-5%', left: '-3%', opacity: 0.6, pointerEvents: 'none' }}>
            {/* Rectángulo redondeado morado (mihub-s4) */}
            <path d="M 40 200 L 140 200 Q 160 200 160 220 L 160 280 Q 160 300 140 300 L 40 300 Q 20 300 20 280 L 20 220 Q 20 200 40 200 Z" 
                  stroke="hsl(var(--mihub-s4))" strokeWidth="8" fill="none" className="animate-float" style={{ animationDelay: '0.3s' }} />
            
            {/* Círculo rojo (mihub-s2) */}
            <circle cx="200" cy="250" r="50" stroke="hsl(var(--mihub-s2))" strokeWidth="8" fill="none" className="animate-float" style={{ animationDelay: '0.7s' }} />
            
            {/* Línea ondulada azul primario */}
            <path d="M 100 100 Q 120 80 140 100 T 180 100" stroke="hsl(var(--primary))" strokeWidth="10" strokeLinecap="round" fill="none" className="animate-pulse-slow" />
          </svg>
        );
      
      case 'center':
        return (
          <svg className={`absolute ${className}`} width="800" height="300" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.4, pointerEvents: 'none' }}>
            {/* Círculo grande azul claro (mihub-s1) */}
            <circle cx="400" cy="150" r="100" stroke="hsl(var(--mihub-s1))" strokeWidth="6" fill="none" className="animate-float" style={{ animationDelay: '0s' }} />
            
            {/* Rectángulo verde (mihub-s7) */}
            <path d="M 520 100 L 650 100 Q 680 100 680 130 L 680 170 Q 680 200 650 200 L 520 200 Q 490 200 490 170 L 490 130 Q 490 100 520 100 Z" 
                  stroke="hsl(var(--mihub-s7))" strokeWidth="6" fill="none" className="animate-float" style={{ animationDelay: '0.4s' }} />
            
            {/* Rectángulo amarillo (mihub-s3) pequeño */}
            <path d="M 250 80 L 330 80 Q 350 80 350 100 L 350 130 Q 350 150 330 150 L 250 150 Q 230 150 230 130 L 230 100 Q 230 80 250 80 Z" 
                  stroke="hsl(var(--mihub-s3))" strokeWidth="6" fill="none" className="animate-float" style={{ animationDelay: '0.6s' }} />
          </svg>
        );
      
      case 'top-left':
        return (
          <svg className={`absolute ${className}`} width="400" height="350" viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ top: '-8%', left: '-2%', opacity: 0.5, pointerEvents: 'none' }}>
            {/* Rectángulo azul primario */}
            <path d="M 40 40 L 150 40 Q 170 40 170 60 L 170 120 Q 170 140 150 140 L 40 140 Q 20 140 20 120 L 20 60 Q 20 40 40 40 Z" 
                  stroke="hsl(var(--primary))" strokeWidth="8" fill="none" className="animate-float" style={{ animationDelay: '0.2s' }} />
            
            {/* Círculo amarillo */}
            <circle cx="280" cy="90" r="45" stroke="hsl(var(--secondary))" strokeWidth="7" fill="none" className="animate-float" style={{ animationDelay: '0.5s' }} />
            
            {/* Línea ondulada */}
            <path d="M 60 220 Q 80 200 100 220 T 140 220 T 180 220" stroke="hsl(var(--mihub-s6))" strokeWidth="8" strokeLinecap="round" fill="none" className="animate-pulse-slow" />
          </svg>
        );
      
      case 'bottom-right':
        return (
          <svg className={`absolute ${className}`} width="550" height="400" viewBox="0 0 550 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ bottom: '-8%', right: '-3%', opacity: 0.5, pointerEvents: 'none' }}>
            {/* Círculo grande verde */}
            <circle cx="400" cy="280" r="80" stroke="hsl(var(--mihub-s5))" strokeWidth="8" fill="none" className="animate-float" style={{ animationDelay: '0.3s' }} />
            
            {/* Rectángulo gris azulado (mihub-s8) */}
            <path d="M 180 240 L 290 240 Q 310 240 310 260 L 310 320 Q 310 340 290 340 L 180 340 Q 160 340 160 320 L 160 260 Q 160 240 180 240 Z" 
                  stroke="hsl(var(--mihub-s8))" strokeWidth="7" fill="none" className="animate-float" style={{ animationDelay: '0.6s' }} />
            
            {/* Línea ondulada amarilla */}
            <path d="M 350 150 Q 370 130 390 150 T 430 150 T 470 150" stroke="hsl(var(--secondary))" strokeWidth="9" strokeLinecap="round" fill="none" className="animate-pulse-slow" />
          </svg>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="pointer-events-none">
      {getShapes()}
    </div>
  );
}
