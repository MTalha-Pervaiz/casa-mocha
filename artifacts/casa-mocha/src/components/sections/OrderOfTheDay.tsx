import { FadeIn } from '@/components/ui/fade-in';
import wrapImg from '@assets/casa-mocha/casa-4.jpg'; // casa-4 is the sliced wrap packed with parmesan
import coffeeImg from '@assets/casa-mocha/logo.jpg'; // Using the moka pot logo as the photo for coffee

export function OrderOfTheDay() {
  return (
    <section id="order" className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
      
      {/* Section Header */}
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-accent mb-4">Field Notes / 01</h2>
          <h3 className="font-serif text-4xl md:text-6xl text-foreground uppercase tracking-tight">Order of<br/>the Day</h3>
        </div>
        <div className="hidden md:block w-32 h-px ink-rule"></div>
        <div className="font-hand text-xl text-foreground/70 max-w-[200px] leading-tight">
          What we're known for. Don't leave without trying these.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24">
        
        {/* Item 1: Iced Coffee */}
        <FadeIn className="group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Typographic Treatment */}
            <div className="flex flex-col justify-between order-2 md:order-1 h-full py-4">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="stamp-border font-mono text-[10px] uppercase text-accent font-bold">Must<br/>Try</span>
                </div>
                <h4 className="font-serif text-4xl md:text-5xl text-foreground mb-4 uppercase leading-none">Flavour-Forward<br/>Iced Coffee</h4>
                <p className="font-sans text-foreground/70 leading-relaxed">
                  Crafted to keep you going. Explore our rotation of different flavours, perfectly chilled for your Port Credit stroll.
                </p>
              </div>
              <div className="mt-8 pt-4 ink-rule-dashed flex justify-between items-end">
                <span className="font-mono text-xs uppercase text-foreground/50">Serve Chilled</span>
                <span className="font-hand text-2xl text-accent">Refreshing</span>
              </div>
            </div>
            
            {/* Photo */}
            <div className="order-1 md:order-2 aspect-[4/5] bg-paper-dark p-4 relative">
              <div className="absolute top-2 left-2 right-2 bottom-2 border border-foreground/10 z-10 pointer-events-none"></div>
              <img src={coffeeImg} alt="Casa Mocha coffee" className="w-full h-full object-cover filter contrast-125 sepia-[0.2]" />
              <div className="absolute -right-4 top-1/4 bg-background border border-border px-2 py-6 transform rotate-3">
                <span className="font-mono text-[9px] uppercase tracking-widest text-foreground block rotate-90 origin-center whitespace-nowrap">Daily Ritual</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Item 2: Chicken Caesar Wrap */}
        <FadeIn delay={0.2} className="group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Typographic Treatment */}
            <div className="flex flex-col justify-between order-2 h-full py-4 md:pl-4">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="stamp-border font-mono text-[10px] uppercase text-accent font-bold">Sign-<br/>ature</span>
                </div>
                <h4 className="font-serif text-4xl md:text-5xl text-foreground mb-4 uppercase leading-none">Chicken Caesar<br/>Wrap</h4>
                <p className="font-sans text-foreground/70 leading-relaxed">
                  A substantial, perfectly layered neighborhood favorite. Packed with flavour and made fresh.
                </p>
              </div>
              <div className="mt-8 pt-4 ink-rule-dashed flex justify-between items-end">
                <span className="font-mono text-xs uppercase text-foreground/50">Made Fresh</span>
                <span className="font-hand text-2xl text-accent">A classic</span>
              </div>
            </div>
            
            {/* Photo */}
            <div className="order-1 aspect-[4/5] bg-paper-dark p-4 relative mt-12 md:mt-0">
              <div className="absolute top-2 left-2 right-2 bottom-2 border border-foreground/10 z-10 pointer-events-none"></div>
              <img src={wrapImg} alt="Chicken Caesar Wrap" className="w-full h-full object-cover filter contrast-[0.95] sepia-[0.1]" />
              <div className="absolute -left-4 bottom-1/4 bg-background border border-border px-2 py-6 transform -rotate-3">
                <span className="font-mono text-[9px] uppercase tracking-widest text-foreground block -rotate-90 origin-center whitespace-nowrap">Hand Crafted</span>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
