import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-500",
      scrolled || menuOpen
        ? "bg-background/95 backdrop-blur-md border-b border-foreground/10 py-3"
        : "bg-transparent py-6"
    )}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left: Metadata */}
        <div className="hidden lg:flex flex-col gap-0.5">
           <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/60">Port Credit</span>
           <span className="font-sans text-xs font-light text-foreground/80">Mississauga, ON</span>
        </div>

        {/* Center: Masthead Logotype when scrolled, else hidden */}
        <div className={cn(
          "transition-all duration-500 absolute left-1/2 -translate-x-1/2",
          scrolled ? "opacity-100 pointer-events-auto transform-none" : "opacity-0 pointer-events-none translate-y-2"
        )}>
          <a href="#top" className="font-serif italic text-xl tracking-wide text-foreground hover:text-accent transition-colors" data-testid="link-home-scrolled">
            Casa Mocha
          </a>
        </div>

        {/* Right: Editorial Index Navigation */}
        <nav className="hidden md:flex items-center gap-8 ml-auto" aria-label="Main navigation">
          <a href="#vibe" className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/80 hover:text-foreground transition-colors" data-testid="link-nav-vibe">The Space</a>
          <a href="#gallery" className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/80 hover:text-foreground transition-colors" data-testid="link-nav-gallery">Gallery</a>
          <a href="#reviews" className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/80 hover:text-foreground transition-colors" data-testid="link-nav-reviews">Reviews</a>
          <a href="#visit" className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-accent hover:text-foreground transition-colors" data-testid="link-nav-visit">
            Visit <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden ml-auto inline-flex items-center justify-center h-10 w-10 text-foreground hover:text-accent transition-colors"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t border-foreground/10 bg-background px-6 py-8 flex flex-col gap-6" aria-label="Mobile navigation">
          {[
            ['#vibe', 'The Space', 'link-mobile-vibe'],
            ['#gallery', 'Gallery', 'link-mobile-gallery'],
            ['#reviews', 'Reviews', 'link-mobile-reviews'],
            ['#visit', 'Visit', 'link-mobile-visit'],
          ].map(([href, label, testId], i) => (
             <a key={href} href={href} onClick={() => setMenuOpen(false)} className="font-serif italic text-3xl text-foreground hover:text-accent transition-colors flex items-center gap-6" data-testid={testId}>
               <span className="font-mono text-[10px] not-italic text-foreground/40">{String(i + 1).padStart(2, '0')}</span>
               {label}
             </a>
          ))}
        </nav>
      )}
    </header>
  );
}
