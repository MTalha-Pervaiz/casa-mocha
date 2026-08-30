import { FadeIn } from '@/components/ui/fade-in';
import { ArrowUpRight } from 'lucide-react';
import logoImg from '@assets/casa-mocha/logo-mark.png';

export function VisitCard() {
  return (
    <section id="visit" className="py-32 md:py-48 px-6 md:px-12 max-w-[1440px] mx-auto text-center flex flex-col items-center">
      
      <FadeIn className="w-full flex flex-col items-center">
        
        <div className="w-16 h-16 md:w-20 md:h-20 mb-12 opacity-50">
          <img 
            src={logoImg} 
            alt="Casa Mocha" 
            className="w-full h-full object-contain filter invert sepia-[0.3] hue-rotate-[300deg]" 
          />
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-accent/30 w-8 md:w-12"></div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-accent">04 / Visit</span>
          <div className="h-px bg-accent/30 w-8 md:w-12"></div>
        </div>
        
        <h2 className="font-serif text-5xl md:text-7xl lg:text-[7rem] uppercase tracking-tight leading-[0.9] mb-8">
          See you soon
        </h2>
        
        <p className="font-sans text-lg md:text-xl text-foreground/60 max-w-lg mx-auto font-light leading-relaxed mb-16">
          Stop by for your daily iced coffee or grab a chicken Caesar wrap. We're right here in the neighborhood.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-3xl w-full text-left border-t border-foreground/15 pt-12">
          
          {/* Location */}
          <div className="flex flex-col">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 mb-4">Location</h3>
            <p className="font-serif text-3xl md:text-4xl uppercase mb-2 text-foreground">975 Lakeshore Rd E</p>
            <p className="font-sans text-base text-foreground/60 mb-8 font-light">Port Credit, Mississauga</p>
            
            <a 
              href="https://maps.google.com/?q=975+Lakeshore+Rd+E,+Mississauga,+ON" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between border-b border-foreground/30 pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground hover:text-accent hover:border-accent transition-colors group w-full md:w-auto"
              data-testid="link-directions"
            >
              Get Directions 
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ml-4" strokeWidth={1.5} />
            </a>
          </div>

          {/* Community */}
          <div className="flex flex-col">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 mb-4">Community</h3>
            <p className="font-serif text-2xl uppercase mb-2 text-foreground/90">Enjoyed your visit?</p>
            <p className="font-sans text-base text-foreground/60 mb-8 font-light leading-relaxed">
              We’d love to hear about your experience at the café.
            </p>
            
            <a 
              href="https://share.google/KrGM2qBWjoepzkkn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between border-b border-foreground/30 pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground hover:text-accent hover:border-accent transition-colors group w-full md:w-auto"
              data-testid="link-review"
            >
              Leave a Review
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ml-4" strokeWidth={1.5} />
            </a>
          </div>
          
        </div>
      </FadeIn>
    </section>
  );
}
