import { FadeIn } from '../ui/fade-in';
import interiorImg from '@assets/casa-mocha/casa-2.jpg';

export function Vibe() {
  return (
    <section id="vibe" className="py-24 md:py-36 px-5 md:px-8 max-w-[1440px] mx-auto border-t border-border/70">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-24 items-center">
        <div className="order-2 md:order-1 relative">
          <FadeIn>
               <div className="group relative aspect-[4/5] overflow-hidden border border-foreground/20 shadow-[0_24px_70px_-36px_rgba(0,0,0,.9)]">
               <div className="absolute inset-0 bg-accent/15 mix-blend-color z-10 transition-opacity group-hover:opacity-0 duration-700"></div>
               <img src={interiorImg} alt="Casa Mocha Interior" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]" data-testid="img-vibe-interior" />
            </div>
          </FadeIn>
          {/* Decorative frame elements to match the tactile vibe */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent/30 rounded-tl-xl pointer-events-none"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent/30 rounded-br-xl pointer-events-none"></div>
        </div>
        <div className="order-1 md:order-2 space-y-8">
          <FadeIn>
           <h2 className="font-mono text-[9px] uppercase tracking-[0.24em] text-accent font-semibold" data-testid="text-vibe-kicker">01 — the room</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
             <h3 className="chalk-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.72]" data-testid="text-vibe-heading">
               Come for<br /><span className="text-accent">the pause.</span>
            </h3>
          </FadeIn>
          <FadeIn delay={0.3}>
             <p className="text-base md:text-lg text-foreground/65 leading-relaxed font-sans max-w-md" data-testid="text-vibe-body">
               Casa Mocha is a low-key neighbourhood café with a room of its own. Black tables, warm light, a little music, and enough time to finish what you came for.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}