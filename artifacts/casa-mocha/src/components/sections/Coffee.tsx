import { FadeIn } from '../ui/fade-in';

export function Coffee() {
  return (
    <section id="coffee" className="py-24 md:py-40 bg-card text-card-foreground px-5 md:px-8 relative overflow-hidden border-y border-border">
      {/* Decorative texture background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] border border-card-foreground/10 rounded-full pointer-events-none"></div>
      <div className="absolute top-10 right-20 w-[340px] h-[340px] border border-accent/25 rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1100px] mx-auto text-center relative z-10">
        <FadeIn>
          <h2 className="font-mono text-[9px] uppercase tracking-[0.24em] text-accent font-bold mb-6" data-testid="text-coffee-kicker">02 — the order that travels</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h3 className="chalk-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.7] mb-10" data-testid="text-coffee-heading">
             Iced coffee,<br /><span className="text-accent">with a point of view.</span>
          </h3>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-base md:text-lg text-card-foreground/70 leading-relaxed font-sans max-w-xl mx-auto" data-testid="text-coffee-body">
             Flavour-forward and made for the walk, the drive, or the long way home. Different flavours, one very Casa Mocha specialty.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}