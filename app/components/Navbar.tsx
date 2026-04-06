"use client"

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { LazyImage } from './LazyMedia';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "glass-dark py-4" : "py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => handleClick('#hero')} className="relative z-10">
          <LazyImage
            src="kitchen_logo.png"
            alt="logo"
            className="w-26 h-auto group-hover:scale-105 transition-transform duration-700"
          />
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(l => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="font-body text-sm tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-300 uppercase"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleClick('#contact')}
          className="hidden md:block font-body text-sm tracking-[0.1em] uppercase px-6 py-2.5 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full"
        >
          Book Now
        </button>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary z-10">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map(l => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="font-display text-3xl text-primary hover:text-muted-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#contact')}
            className="mt-4 font-body text-sm tracking-[0.1em] uppercase px-8 py-3 border border-primary/30 text-primary rounded-full"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}