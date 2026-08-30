import { FadeIn } from '@/components/ui/fade-in';
import wrapImg from '@assets/casa-mocha/wrap-1.jpg';
import prepImg from '@assets/casa-mocha/casa-1.jpg';

export function EditorialVibe() {
  return (
    <section id="vibe" className="py-32 md:py-48 px-6 md:px-12 max-w-[1440px] mx-auto">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left: Text */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent">01</span>
              <div className="h-px bg-accent/30 w-12"></div>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground uppercase tracking-tight mb-8 leading-[0.95]">
              Uncomplicated.<br/>Uncompromising.
            </h2>
            <div className="font-sans text-lg md:text-xl text-foreground/70 leading-relaxed font-light space-y-6">
              <p>
                We built Casa Mocha to be a reliable anchor in your day. No pretense, just a collected atmosphere built around good food and exceptional coffee.
              </p>
              <p>
                From the hum of the espresso machine to the crisp crunch of our signature chicken Caesar wrap, every detail is considered so you don’t have to. Take it to go, or settle into the room.
              </p>
            </div>
            
          </FadeIn>
        </div>

        {/* Right: Dramatic Image Composition */}
        <div className="lg:col-span-7 relative">
          <FadeIn delay={0.2} className="relative z-10">
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-foreground/5 overflow-hidden">
              <img 
                src={prepImg} 
                alt="Fresh sandwiches and wraps at Casa Mocha" 
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1] saturate-[0.9] hover:scale-105 transition-transform duration-[2s] ease-out" 
              />
            </div>
          </FadeIn>

          {/* Overlapping smaller image */}
          <FadeIn delay={0.4} className="absolute -bottom-12 -left-8 md:-left-16 w-1/2 max-w-[280px] z-20 shadow-2xl">
            <div className="aspect-square bg-background p-2 md:p-3">
              <img 
                src={wrapImg} 
                alt="Signature chicken Caesar wrap" 
                className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.1]" 
              />
            </div>
            <div className="bg-background pt-3 pb-1 flex justify-between items-center border-b border-foreground/10">
              <span className="font-mono text-[8px] uppercase tracking-widest text-foreground/50">Details</span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-foreground/50">House Spec</span>
            </div>
          </FadeIn>
        </div>
      </div>
      
    </section>
  );
}
