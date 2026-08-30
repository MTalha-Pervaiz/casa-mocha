import { useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

const REVIEWS = [
  {
    name: 'Alessia Palladini',
    meta: 'Local Guide · 16 reviews · 1 photo',
    rating: 5,
    text: 'Casa Mocha is such a special place. The owner is incredibly welcoming and makes you feel right at home the moment you walk in. The atmosphere is warm, filled with smiles, and it was so lovely meeting her parents—they were just as kind. The Chicken Caesar Wrap is hands down the best wrap I’ve ever had. Fresh, delicious, and made with so much care!',
  },
  {
    name: 'Cris',
    meta: 'Local Guide · 10 reviews · 13 photos',
    text: 'First time visiting this local café and I’m genuinely impressed. I ordered the popular chicken Caesar wrap and it was absolutely worth it. fresh, flavorful, and very well made. I also grabbed a coffee, which paired perfectly and was just as … More',
  },
  {
    name: 'Methely',
    meta: '6 reviews · 1 photo',
    text: 'This cafe is amazing! Not only are the food and drinks delicious, they are also presented so beautifully. The staff is incredibly accommodating and asks you exactly how you want each item prepared. We got the mango coconut matcha, the … More',
  },
  {
    name: 'Andrew VanOfwegen',
    meta: 'Local Guide · 36 reviews · 43 photos',
    text: 'My wife and I really enjoyed our time here at this nice cafe. The Zaatar feta sandwich was amazing with fresh tomato’s and cucumbers. … More',
  },
  {
    name: 'Erika Johnson',
    meta: 'Local Guide · 48 reviews · 12 photos',
    text: 'The woman who owns Casa Mocha is so sweet! She’s incredibly warm, welcoming, and seems to genuinely enjoy getting to know her customers, which I really appreciate. … More',
  },
  {
    name: 'Huda Talib',
    meta: '10 reviews · 4 photos',
    text: 'Best Chicken Ceaser Wrap i’ve had ever never going back. The wrap was FILLED and delicious. No greediness from the store they actually care about quality and quantity. The owners are amazing friendly made me feel welcome the moment I walked … More',
  },
  {
    name: 'Christine Trần',
    meta: '1 review · 1 photo',
    text: 'Today I went to this place called Casa Mocha to try their matcha, recommended by my friend. I’ve tried many kinds of matcha before, but the one here is really amazing. I think they must use high-quality, expensive matcha because the flavor … More',
  },
  {
    name: 'Rain Safe Roofing Inc.',
    meta: 'Local Guide · 28 reviews · 5 photos',
    text: 'The caesar chicken wrap was absolutely delicious and the portion sizes are great! The ingredients were fresh and flavourful. The Biscoff latte was also incredible, and being able to choose the sweetness level was a great bonus. This place is amazing and we’ll definitely be coming back. … More',
  },
  {
    name: 'Blagoje Stojanovic',
    meta: 'Local Guide · 22 reviews · 14 photos',
    text: 'Such a great find in Port Credit, Mississauga! Casa Mocha has amazing coffee, … More',
  },
  {
    name: 'Theresa Samarita',
    meta: 'Local Guide · 37 reviews · 32 photos',
    text: 'New hidden gem in my neighborhood. The salad, wraps and sandwiches are so delicious and made with so much care. The drinks are exquisite. The owner, Sarah is a darling!! … More',
  },
  {
    name: 'Sara Al-Ahmar',
    meta: 'Local Guide · 30 reviews · 44 photos',
    text: 'can’t say enough good things about this place! Their chicken Caesar salad wrap is hands-down the best I’ve ever had — perfectly seasoned chicken, crisp lettuce, just the right amount of dressing, and wrapped up so fresh every time. … More',
  },
  {
    name: 'Tarek Madi',
    meta: '8 reviews · 2 photos',
    text: 'I stopped by Casa Mocha Café & Bistro and had a really great experience. I ordered the buffalo chicken wrap, which was surprisingly fresh and had great flavor without being too heavy. I also got a vanilla latte, and it was smooth and … More',
  },
  {
    name: 'Joshua Mitchell',
    meta: 'Local Guide · 487 reviews · 537 photos',
    text: 'Run don’t walk to Casa Mocha Inc. This was the best Chicken Caesar Salad Wrap that I’ve ever had. Not just best in Mississauga, or best in GTA, it’s the best Chicken Caesar Salad Wrap ever. Period. … More',
  },
  {
    name: 'Anica Pejanovic',
    meta: 'Local Guide · 15 reviews · 15 photos',
    text: 'Absolutely love this café! I’ve been ordering from here a lot lately, and it’s been such a treat. Everything has been consistently spot on: the quality, the flavors, and the care put into each … More',
  },
  {
    name: 'Emmy E',
    meta: 'Local Guide · 35 reviews · 20 photos',
    text: 'Ordered the chicken caesar wrap, and it was absolutely amazing! Very filling, fresh, and tasty. The atmosphere was so beautiful & the waitress was so kind as well. Definitely going back to try this other menu items! … More',
  },
  {
    name: 'RG',
    meta: 'Local Guide · 328 reviews · 297 photos',
    text: 'Saw this on Instagram and had to try their chicken caeser wrap!! I also ordered the biscoff iced latte with almond milk. I must say everything was yummy! They are a family owned - sisters together in business run (Women owned) spot and were … More',
  },
  {
    name: 'Monica',
    meta: 'Local Guide · 16 reviews · 1 photo',
    text: 'Recently stepped in for lunch here and WOW! The turkey sandwich was amazing, the bread was so fresh and soft! All their ingredients are perfect. I also had their tomatoe basil soup which was topped with cheese which was also delicious! Highly highly recommend, truly good quality food - you will not be disappointed! … More',
  },
  {
    name: 'Kenya',
    meta: '2 reviews · 1 photo',
    text: '10/10 hospitality, Cesar wrap was to die for will definitely be getting one once a week everything was so fresh! Also tried Matcha for the first time and it was amazing. Highly recommend especially because there is no pork in house as I do not eat pork. … More',
  },
];

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollRef.current.clientWidth * 0.78 : scrollRef.current.clientWidth * 0.78,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section id="reviews" className="py-24 md:py-32 border-y border-foreground/10 bg-background relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-14 flex items-end justify-between">
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-accent">03</span>
            <div className="h-px bg-accent/30 w-12"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground uppercase tracking-tight">What people say</h2>
        </FadeIn>

        <FadeIn delay={0.2} className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-12 h-12 flex items-center justify-center border border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
            aria-label="Previous review"
            data-testid="button-reviews-prev"
          >
            <ArrowLeft className="w-4 h-4 text-foreground/80" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-12 h-12 flex items-center justify-center border border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
            aria-label="Next review"
            data-testid="button-reviews-next"
          >
            <ArrowRight className="w-4 h-4 text-foreground/80" strokeWidth={1.5} />
          </button>
        </FadeIn>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-12 gap-5 md:gap-8"
        style={{ scrollbarWidth: 'none' }}
      >
        {REVIEWS.map((review, index) => (
          <article
            key={review.name}
            className="snap-start shrink-0 w-[86vw] md:w-[46vw] lg:w-[31vw] min-h-[320px] border border-foreground/15 bg-foreground/[0.025] p-7 md:p-9 flex flex-col justify-between group hover:border-accent/60 transition-colors"
          >
            <div>
              <div className="flex items-start justify-between mb-8">
                <Quote className="w-7 h-7 text-accent/70" strokeWidth={1} aria-hidden="true" />
                {review.rating ? (
                  <div className="flex items-center gap-1 text-accent" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="w-3 h-3 fill-current" strokeWidth={1} aria-hidden="true" />
                    ))}
                  </div>
                ) : null}
              </div>
              <p className="font-serif text-xl md:text-2xl leading-[1.2] text-foreground/90">“{review.text}”</p>
            </div>
            <div className="mt-10 pt-5 border-t border-foreground/10 flex items-end justify-between gap-4">
              <div>
                <p className="font-sans text-sm font-medium text-foreground">{review.name}</p>
                <p className="font-mono text-[8px] uppercase tracking-widest text-foreground/45 mt-1">{review.meta}</p>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/35">Note {String(index + 1).padStart(2, '0')}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="md:hidden flex items-center justify-center gap-2 mt-10 px-6">
        <button
          onClick={() => scroll('left')}
          className="w-12 h-12 flex items-center justify-center border border-foreground/20 active:bg-foreground/10 transition-colors"
          aria-label="Previous review"
        >
          <ArrowLeft className="w-4 h-4 text-foreground/80" strokeWidth={1.5} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="w-12 h-12 flex items-center justify-center border border-foreground/20 active:bg-foreground/10 transition-colors"
          aria-label="Next review"
        >
          <ArrowRight className="w-4 h-4 text-foreground/80" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}