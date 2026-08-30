import { FadeIn } from '../ui/fade-in';
import { ArrowUpRight, MapPin } from 'lucide-react';

export function Location() {
  return (
    <section id="visit" className="py-24 md:py-36 px-5 md:px-8 max-w-[1440px] mx-auto">
      <div className="grid md:grid-cols-[1.1fr_.9fr] gap-12 md:gap-24 items-center">
        <div className="space-y-10 text-center md:text-left">
          <FadeIn>
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-accent font-semibold" data-testid="text-location-kicker">06 — make your way over</p>
            <h2 className="chalk-display text-6xl md:text-8xl text-foreground leading-[0.72]" data-testid="text-location-heading">See you<br /><span className="text-accent">at the café.</span></h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex items-start gap-4 text-muted-foreground p-0">
                <MapPin className="w-6 h-6 shrink-0 text-accent" />
                <div className="text-left">
                   <p className="text-2xl text-foreground font-serif mb-1" data-testid="text-address-street">975 Lakeshore Rd E</p>
                   <p className="text-base font-sans" data-testid="text-address-city">Mississauga, Ontario</p>
               <p className="font-mono text-[9px] mt-3 text-accent font-medium uppercase tracking-[0.18em]">Port Credit</p>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <a href="https://maps.google.com/?q=975+Lakeshore+Rd+E,+Mississauga,+ON" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border-b border-accent pb-2 font-display text-[10px] uppercase tracking-[0.2em] text-foreground hover:text-accent transition-colors" data-testid="link-directions">
              Get directions <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </FadeIn>
        </div>
         <div className="bg-card text-card-foreground border border-border p-10 md:p-16 min-h-[320px] flex items-end shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10">
            <FadeIn delay={0.4}>
               <h3 className="chalk-display text-5xl md:text-7xl mb-6 leading-[0.72]" data-testid="text-footer-welcome">Your table is<br /><span className="text-accent">waiting.</span></h3>
               <p className="text-base md:text-lg text-card-foreground/70 font-sans leading-relaxed" data-testid="text-footer-message">
                Take the scenic route. There is coffee at the end of it.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}