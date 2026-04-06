// import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display text-xl font-semibold text-primary tracking-wide">
            LELO'S
          </span>
          <span className="font-body text-[10px] tracking-[0.3em] text-muted-foreground block -mt-0.5">
            KITCHEN
          </span>
        </div>

        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} LELO'S Kitchen. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            {/* <Instagram size={18} /> */}
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            {/* <Facebook size={18} /> */}
          </a>
        </div>
      </div>
    </footer>
  );
}