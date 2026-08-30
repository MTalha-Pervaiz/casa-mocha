import { Navbar } from '@/components/layout/Navbar';
import { Masthead } from '@/components/sections/Masthead';
import { EditorialVibe } from '@/components/sections/EditorialVibe';
import { ContactSheet } from '@/components/sections/ContactSheet';
import { Reviews } from '@/components/sections/Reviews';
import { VisitCard } from '@/components/sections/VisitCard';

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col selection:bg-foreground/20 selection:text-foreground">
      <Navbar />
      
      <main className="flex-1">
        <Masthead />
        <EditorialVibe />
        <ContactSheet />
        <Reviews />
        <VisitCard />
      </main>
      
      <footer className="mt-12 px-6 md:px-12 pb-8" data-testid="footer">
        <div className="max-w-[1440px] mx-auto border-t border-foreground/15 pt-12 flex flex-col md:flex-row gap-12 items-start justify-between">
          
          <div className="flex flex-col gap-4 max-w-xs">
            <p className="font-serif italic text-2xl tracking-wide text-foreground" data-testid="text-footer-brand">
              Casa Mocha
            </p>
            <p className="font-sans text-sm text-foreground/50 font-light leading-relaxed">
              A neighborhood journal of coffee, food, and daily rituals in Port Credit.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-16 md:gap-8 w-full md:w-auto">
            <a 
              href="#top" 
              className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors group flex items-center gap-2" 
              data-testid="link-back-to-top"
            >
              <span className="w-4 h-px bg-current group-hover:w-8 transition-all duration-300"></span>
              Return to top
            </a>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full md:w-auto border-t border-foreground/10 md:border-none pt-6 md:pt-0">
              <p className="font-mono text-[9px] uppercase tracking-widest text-foreground/40">
                &copy; {new Date().getFullYear()} Casa Mocha
              </p>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/40">975 Lakeshore Rd E</span>
                <span className="w-1 h-1 bg-foreground/20 rounded-full"></span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/40">Mississauga</span>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
}
