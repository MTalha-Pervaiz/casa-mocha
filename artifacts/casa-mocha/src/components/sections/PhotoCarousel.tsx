import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import casaOneImg from '@assets/casa-mocha/casa-1.jpg';
import casaTwoImg from '@assets/casa-mocha/casa-2.jpg';
import casaFourImg from '@assets/casa-mocha/casa-4.jpg';
import wrapOneImg from '@assets/casa-mocha/wrap-1.jpg';

const slides = [
  {
    image: casaOneImg,
    alt: 'A spread of sandwiches and wraps on a wooden table',
    label: 'Made to order',
    title: 'Good things, held in both hands.',
  },
  {
    image: casaTwoImg,
    alt: 'The warm Casa Mocha interior with café tables and menu boards',
    label: 'Inside Casa Mocha',
    title: 'A little room to slow down.',
  },
  {
    image: casaFourImg,
    alt: 'A freshly cut wrap and sandwiches on a serving board',
    label: 'At the table',
    title: 'The details are worth lingering over.',
  },
  {
    image: wrapOneImg,
    alt: 'A chicken Caesar wrap held in a hand outdoors',
    label: 'The neighborhood staple',
    title: 'Some bites earn a second visit.',
  },
];

export function PhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const timerRef = useRef<number | null>(null);

  const goTo = (nextIndex: number, nextDirection: number) => {
    setDirection(nextDirection);
    setActiveIndex((nextIndex + slides.length) % slides.length);
  };

  const next = () => goTo(activeIndex + 1, 1);
  const previous = () => goTo(activeIndex - 1, -1);

  useEffect(() => {
    if (reducedMotion || isPaused) return;
    timerRef.current = window.setInterval(next, 6200);
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, [activeIndex, isPaused, reducedMotion]);

  const slide = slides[activeIndex];

  return (
    <section
       className="px-5 md:px-8 py-24 md:py-36 overflow-hidden bg-background"
      aria-labelledby="moments-heading"
      data-testid="section-photo-carousel"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
             <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-accent font-bold mb-5" data-testid="text-moments-kicker">
                00 — in the room
            </p>
             <h2 id="moments-heading" className="chalk-display text-6xl md:text-8xl leading-[0.72]" data-testid="text-moments-heading">
                The place<br /><span className="text-accent">in pictures.</span>
            </h2>
          </div>
           <p className="max-w-sm text-foreground/60 leading-relaxed" data-testid="text-moments-intro">
             A few frames from Casa Mocha: the counter, the tables, the things worth coming back for.
          </p>
        </div>

        <div
          className="relative grid lg:grid-cols-[minmax(0,1fr)_270px] gap-5 items-stretch"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
           onBlur={(event) => {
             if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
           }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') next();
            if (event.key === 'ArrowLeft') previous();
          }}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Scenes from Casa Mocha"
          data-testid="carousel-gallery"
        >
           <div className="relative min-h-[460px] md:min-h-[620px] overflow-hidden bg-card border border-foreground/15 shadow-[0_30px_90px_-35px_rgba(0,0,0,.8)]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ opacity: 0, x: reducedMotion ? 0 : direction * 36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: reducedMotion ? 0 : direction * -28 }}
                transition={{ duration: reducedMotion ? 0.01 : 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute inset-0"
                aria-live="polite"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                  data-testid={`img-carousel-slide-${activeIndex}`}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent" />
                 <div className="absolute inset-x-0 bottom-0 p-7 md:p-10 text-foreground">
                   <p className="font-display text-[10px] uppercase tracking-[0.24em] text-accent font-semibold mb-3" data-testid={`text-carousel-label-${activeIndex}`}>
                    {slide.label}
                  </p>
                   <h3 className="max-w-lg chalk-display text-5xl md:text-7xl leading-[0.78]" data-testid={`text-carousel-title-${activeIndex}`}>
                    {slide.title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute top-6 right-6 flex items-center gap-2">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/35 bg-primary/35 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                onClick={() => setIsPaused((paused) => !paused)}
                aria-label={isPaused ? 'Play photo carousel' : 'Pause photo carousel'}
                data-testid="button-carousel-pause"
              >
                {isPaused ? <Play className="h-4 w-4" aria-hidden="true" /> : <Pause className="h-4 w-4" aria-hidden="true" />}
              </button>
            </div>
          </div>

             <aside className="flex lg:flex-col justify-between border border-border bg-card/55 p-5 md:p-6">
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible" role="tablist" aria-label="Choose a photo">
              {slides.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Show photo ${index + 1}: ${item.label}`}
                  onClick={() => goTo(index, index >= activeIndex ? 1 : -1)}
                  className={`group relative shrink-0 overflow-hidden rounded-xl text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    index === activeIndex ? 'ring-2 ring-accent ring-offset-2 ring-offset-card' : 'opacity-65 hover:opacity-100'
                  }`}
                  data-testid={`button-carousel-indicator-${index}`}
                >
                  <img src={item.image} alt="" className="h-16 w-24 object-cover lg:h-[74px] lg:w-full" aria-hidden="true" />
                  <span className="absolute inset-0 bg-primary/20 transition-opacity group-hover:bg-transparent" />
                  <span className="sr-only">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="hidden lg:block">
              <div className="mb-5 flex items-center justify-between text-sm text-muted-foreground">
                <span data-testid="text-carousel-count">{String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
                <span data-testid="status-carousel">{isPaused ? 'Paused' : 'Playing'}</span>
              </div>
              <div className="h-px bg-border mb-5" />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={previous}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Previous photo"
                  data-testid="button-carousel-previous"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Next photo"
                  data-testid="button-carousel-next"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </aside>

          <div className="flex lg:hidden items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span data-testid="text-carousel-count-mobile">{String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
              <span aria-hidden="true" className="h-px w-8 bg-border" />
              <span data-testid="status-carousel-mobile">{isPaused ? 'Paused' : 'Playing'}</span>
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={previous} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label="Previous photo" data-testid="button-carousel-previous-mobile">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={next} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label="Next photo" data-testid="button-carousel-next-mobile">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}