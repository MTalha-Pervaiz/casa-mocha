import { ArrowUpRight } from 'lucide-react';

const features = [
  { label: 'What to order', value: 'Flavour-forward iced coffee', href: '#coffee', testId: 'feature-iced-coffee' },
  { label: 'At the table', value: 'Chicken Caesar wrap', href: '#food', testId: 'feature-caesar-wrap' },
  { label: 'Where to find us', value: 'Port Credit / Mississauga', href: '#visit', testId: 'feature-location' },
  { label: 'The feeling', value: 'Low-key, never forgettable', href: '#vibe', testId: 'feature-vibe' },
];

export function FeatureStrip() {
  return (
    <section className="bg-accent text-accent-foreground border-y border-accent/50" aria-label="Casa Mocha highlights" data-testid="section-feature-strip">
      <div className="max-w-[1440px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <a key={feature.testId} href={feature.href} className={`group relative px-5 md:px-7 py-6 md:py-7 flex items-start justify-between gap-4 hover:bg-foreground/10 transition-colors ${index < features.length - 1 ? 'border-b sm:border-b lg:border-b-0 lg:border-r border-accent-foreground/20' : ''}`} data-testid={`link-${feature.testId}`}>
           <div>
               <p className="font-mono text-[8px] uppercase tracking-[0.18em] opacity-70 mb-2">{feature.label}</p>
               <p className="chalk-display text-2xl md:text-[1.75rem] leading-none" data-testid={`text-${feature.testId}`}>{feature.value}</p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}