import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

import img1 from '@assets/casa-mocha/casa-1.jpg';
import img2 from '@assets/casa-mocha/casa-2.jpg';
import img3 from '@assets/casa-mocha/casa-4.jpg';
import img4 from '@assets/casa-mocha/wrap-1.jpg';

const IMAGES = [
  { src: img2, alt: "Casa Mocha interior atmosphere", title: "The Room" },
  { src: img4, alt: "Chicken Caesar wrap in hand", title: "To Go" },
  { src: img1, alt: "Fresh wraps on a board", title: "Prep" },
  { src: img3, alt: "Chicken Caesar wrap cut open", title: "Detail" },
];

export function ContactSheet() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.7;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: prefersReducedMotion ? 'auto' : 'smooth' 
      });
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 border-y border-foreground/10 bg-background relative overflow-hidden">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-6 md:left-12 w-px bg-foreground/5 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-6 md:right-12 w-px bg-foreground/5 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16 flex items-end justify-between">
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-accent">02</span>
            <div className="h-px bg-accent/30 w-12"></div>
          </div>
          <h3 className="font-serif text-4xl md:text-5xl text-foreground uppercase tracking-tight">Gallery</h3>
        </FadeIn>
        
        <FadeIn delay={0.2} className="hidden md:flex items-center gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 flex items-center justify-center border border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
            aria-label="Scroll left"
            data-testid="button-gallery-prev"
          >
            <ArrowLeft className="w-4 h-4 text-foreground/80" strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 flex items-center justify-center border border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
            aria-label="Scroll right"
            data-testid="button-gallery-next"
          >
            <ArrowRight className="w-4 h-4 text-foreground/80" strokeWidth={1.5} />
          </button>
        </FadeIn>
      </div>

      <div className="relative w-full">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-12 gap-6 md:gap-12 items-center"
        >
          {IMAGES.map((img, i) => (
            <div key={i} className="snap-center shrink-0 w-[80vw] md:w-[50vw] lg:w-[40vw] flex flex-col gap-4 group">
              <div className="aspect-[4/3] overflow-hidden bg-foreground/5 relative">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.15] saturate-[0.85] transition-all duration-1000 group-hover:brightness-100 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center border-b border-foreground/10 pb-2">
                <span className="font-sans text-sm font-light text-foreground/80 tracking-wide">{img.title}</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/40">Fig {String(i + 1).padStart(2, '0')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="md:hidden flex items-center justify-center gap-2 mt-12 px-6">
        <button 
          onClick={() => scroll('left')}
          className="w-12 h-12 flex items-center justify-center border border-foreground/20 active:bg-foreground/10 transition-colors"
          aria-label="Scroll left"
        >
          <ArrowLeft className="w-4 h-4 text-foreground/80" strokeWidth={1.5} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="w-12 h-12 flex items-center justify-center border border-foreground/20 active:bg-foreground/10 transition-colors"
          aria-label="Scroll right"
        >
          <ArrowRight className="w-4 h-4 text-foreground/80" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
