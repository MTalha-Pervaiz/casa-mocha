import { FadeIn } from '@/components/ui/fade-in';
import logoImg from '@assets/casa-mocha/logo-mark.png';
import heroBg from '@assets/casa-mocha/casa-2.jpg';

export function Masthead() {
  return (
    <section id="top" className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden pb-12">
      {/* Background Image & Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Casa Mocha interior" 
          className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.1] saturate-[0.8]"
          data-testid="masthead-image"
        />
        {/* Deep gradient overlay to blend into the background color below */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-32">
        <FadeIn className="flex flex-col items-center text-center">
          
          <div className="w-20 h-20 md:w-24 md:h-24 mb-10 opacity-90">
            {/* The original logo is dark, we invert it and adjust to match our warm ivory */}
            <img 
              src={logoImg} 
              alt="Casa Mocha" 
              className="w-full h-full object-contain filter invert sepia-[0.3] hue-rotate-[300deg] brightness-[1.1]" 
              data-testid="masthead-logo" 
            />
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tight text-foreground uppercase mb-6" data-testid="masthead-title">
            Casa Mocha
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-foreground/70 max-w-lg mx-auto font-light leading-relaxed mb-16" data-testid="masthead-value-prop">
            A low-key neighborhood café pouring flavour-forward iced coffee and our signature chicken Caesar wrap.
          </p>

          <div className="w-full h-px bg-foreground/15 mb-6"></div>

          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/50 mb-1">Located</span>
              <span className="font-sans text-sm text-foreground/90">Port Credit</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/50 mb-1">Specialty</span>
              <span className="font-sans text-sm text-foreground/90">Iced Coffee</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/50 mb-1">Signature</span>
              <span className="font-sans text-sm text-foreground/90">Chicken Caesar Wrap</span>
            </div>
            <div className="flex flex-col md:text-right">
              <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/50 mb-1">Ritual</span>
              <span className="font-sans text-sm text-foreground/90">Coffee &amp; food</span>
            </div>
          </div>
          
        </FadeIn>
      </div>
    </section>
  );
}
