import { FadeIn } from '../ui/fade-in';
import foodImg from '@assets/casa-mocha/casa-1.jpg';

export function Bistro() {
  return (
    <section className="py-24 md:py-36 px-5 md:px-8 max-w-[1440px] mx-auto border-t border-border/70">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="space-y-8 md:pr-16">
          <FadeIn>
            <h2 className="font-mono text-[9px] uppercase tracking-[0.24em] text-accent font-semibold" data-testid="text-bistro-kicker">03 — beyond the cup</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
             <h3 className="chalk-display text-6xl md:text-8xl leading-[0.72]" data-testid="text-bistro-heading">
               Lunch<br /><span className="text-accent">with some weight.</span>
            </h3>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-base md:text-lg text-foreground/65 leading-relaxed font-sans max-w-md" data-testid="text-bistro-body">
              Something substantial, made to order and easy to take with you. Casa Mocha keeps the food straightforward and lets the ingredients do the talking.
            </p>
          </FadeIn>
        </div>
        <div className="relative">
          <FadeIn delay={0.2}>
            <div className="group overflow-hidden shadow-[0_24px_70px_-36px_rgba(0,0,0,.9)] aspect-[4/3]">
              <img src={foodImg} alt="Casa Mocha Sandwiches" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]" data-testid="img-bistro-food" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}