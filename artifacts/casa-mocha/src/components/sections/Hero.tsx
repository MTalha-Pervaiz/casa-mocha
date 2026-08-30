import { FadeIn } from '../ui/fade-in';
import logoImg from '@assets/casa-mocha/logo-mark.png';
import cafeImg from '@assets/casa-mocha/casa-2.jpg';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="top" className="relative min-h-[700px] h-[100dvh] max-h-[980px] flex flex-col justify-end overflow-hidden px-5 md:px-10 pt-28 pb-7 md:pb-10">
      <img src={cafeImg} alt="" className="absolute inset-0 h-full w-full object-cover object-center scale-[1.03] hero-breathe" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,15,13,.88)_0%,rgba(16,15,13,.3)_34%,rgba(12,11,10,.97)_100%)]" />
      <div className="absolute inset-0 bg-accent/10 mix-blend-color" />
      <div className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 hidden md:block [writing-mode:vertical-rl] font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/45">Coffee / Lunch / Port Credit</div>
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between text-[9px] md:text-[10px] font-mono uppercase tracking-[0.22em] text-foreground/75 mb-7">
          <span data-testid="text-hero-kicker">A neighbourhood café</span>
          <span data-testid="text-hero-location">Port Credit, Ontario</span>
        </div>
        <div className="chalk-rule mb-7 opacity-65" />
        <div className="border-t border-foreground/20 pt-7 md:pt-9">
          <FadeIn delay={0.1} className="grid lg:grid-cols-[180px_1fr_180px] items-end gap-6 md:gap-10">
             <div className="hidden lg:block pb-2">
               <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent mb-3">The daily rhythm</p>
               <p className="chalk-display text-3xl leading-[.9] text-foreground/75">Coffee, lunch,<br />and a room to stay in.</p>
            </div>
             <div className="text-center">
                <div className="mx-auto mb-4 w-[112px] h-[112px] md:w-[148px] md:h-[148px] transition-transform duration-700 hover:scale-[1.03]">
                  <img src={logoImg} alt="Casa Mocha moka-pot logo" className="w-full h-full object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,.45)]" data-testid="img-hero-logo" />
              </div>
                <h1 className="brand-wordmark text-[clamp(4rem,11vw,9.5rem)] leading-[0.78] text-foreground drop-shadow-[0_8px_32px_rgba(0,0,0,.5)]" data-testid="text-hero-title">
                  Casa Mocha
              </h1>
                <div className="mx-auto mt-5 mb-4 h-px w-24 bg-accent/80" aria-hidden="true" />
                <p className="chalk-display text-3xl md:text-4xl text-foreground/90" data-testid="text-hero-subtitle">A little more flavour in the day.</p>
            </div>
            <div className="hidden lg:flex flex-col items-end gap-5 pb-2 text-right">
               <p className="font-mono text-[10px] leading-relaxed text-foreground/70">975 Lakeshore Rd E<br />Mississauga</p>
               <a href="#visit" className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors" data-testid="link-hero-visit">Plan a visit <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
            </div>
          </FadeIn>
        </div>
        <div className="flex items-center justify-between mt-8 md:mt-12">
           <a href="#vibe" className="inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/75 hover:text-accent transition-colors" data-testid="link-scroll-down">
            <ArrowDown className="h-4 w-4" aria-hidden="true" /> Step inside
          </a>
           <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/50">01 / 04</span>
        </div>
      </div>
    </section>
  );
}