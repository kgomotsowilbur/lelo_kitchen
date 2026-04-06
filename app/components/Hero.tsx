"use client"

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { LazyVideo } from './LazyMedia';

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-center bg-no-repeat bg-cover background-image">
      {/* Video Background */}
      <div className="absolute inset-0">
        <LazyVideo
          src="https://videos.pexels.com/video-files/3298572/3298572-uhd_2560_1440_30fps.mp4"
          className="w-full h-full"
          poster=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="font-body text-sm tracking-[0.4em] text-muted-foreground uppercase mb-6">
            Private Catering & Events
          </p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-semibold text-primary leading-[0.95] mb-6">
            Curated
            <br />
            <span className="italic font-normal">Experiences</span>
          </h1>
          <p className="font-body text-base sm:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed mb-10">
            A world-class chef bringing unforgettable culinary 
            moments to your most important occasions.
          </p>
          <button
            onClick={scrollToAbout}
            className="font-body text-sm tracking-[0.15em] uppercase px-10 py-3.5 glass rounded-full text-primary hover:bg-white/10 transition-all duration-300"
          >
            Discover More
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-10 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.button>
      </div>
    </section>
  );
}