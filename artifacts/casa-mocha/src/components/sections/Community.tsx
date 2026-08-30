import { FadeIn } from '../ui/fade-in';
import { ArrowUpRight } from 'lucide-react';

export function Community() {
  return (
    <section className="py-24 md:py-36 bg-card px-5 md:px-8 border-y border-border">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1fr_auto] gap-10 md:gap-20 items-end">
        <FadeIn>
          <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-accent font-semibold mb-6" data-testid="text-community-kicker">05 — from the neighbourhood</p>
          <h3 className="chalk-display text-6xl md:text-8xl leading-[0.72] text-card-foreground" data-testid="text-community-heading">
             Come as<br /><span className="text-accent">you are.</span>
          </h3>
        </FadeIn>
        <FadeIn delay={0.2} className="md:pb-1">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-sm mb-7" data-testid="text-community-message">
             If Casa Mocha has made your day a little better, tell the next person where to find it.
          </p>
          <a href="https://share.google/KrGM2qBWjoepfzkkn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border-b border-accent pb-2 font-display text-[10px] uppercase tracking-[0.2em] text-card-foreground hover:text-accent transition-colors" data-testid="link-review">
            Read and leave a review <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}