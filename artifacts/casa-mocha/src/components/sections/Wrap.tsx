import { FadeIn } from '../ui/fade-in';
import wrap1Img from '@assets/casa-mocha/wrap-1.jpg';
import wrap2Img from '@assets/casa-mocha/casa-4.jpg';

export function Wrap() {
  return (
    <section id="food" className="py-24 md:py-36 px-5 md:px-8 max-w-[1440px] mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1 relative h-[500px] md:h-[700px] w-full mt-12 md:mt-0">
           <FadeIn className="absolute top-0 right-4 md:right-12 w-[80%] h-[70%] z-10" delay={0.2}>
             <div className="group w-full h-full overflow-hidden shadow-2xl border-8 border-background">
              <img src={wrap1Img} alt="Chicken Caesar Wrap Detail" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]" data-testid="img-wrap-detail" />
            </div>
          </FadeIn>
          <FadeIn className="absolute bottom-0 left-0 w-[70%] h-[60%] z-20" delay={0.4}>
             <div className="group w-full h-full overflow-hidden shadow-2xl border-8 border-background">
              <img src={wrap2Img} alt="Chicken Caesar Wrap Served" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]" data-testid="img-wrap-served" />
            </div>
          </FadeIn>
        </div>
        <div className="order-1 md:order-2 space-y-8">
          <FadeIn>
              <h2 className="font-mono text-[9px] uppercase tracking-[0.24em] text-accent font-semibold" data-testid="text-wrap-kicker">04 — the regular</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
              <h3 className="chalk-display text-6xl md:text-8xl leading-[0.72]" data-testid="text-wrap-heading">
                The chicken<br /><span className="text-accent">Caesar wrap.</span>
            </h3>
          </FadeIn>
          <FadeIn delay={0.3}>
             <p className="text-base md:text-lg text-foreground/65 leading-relaxed font-sans max-w-md" data-testid="text-wrap-body">
               The one people mention when they tell a friend about Casa Mocha. Fresh, generous, and built for the kind of lunch that fixes the rest of the afternoon.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}