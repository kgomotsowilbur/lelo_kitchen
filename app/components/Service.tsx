"use client"

import { motion } from 'framer-motion';
import { LazyVideo } from './LazyMedia';
import { Utensils, Wine, Cake, Users } from 'lucide-react';

const SERVICES = [
  {
    icon: Utensils,
    title: 'Private Dining',
    description: 'Intimate multi-course experiences in the comfort of your home, tailored to your tastes.',
  },
  {
    icon: Users,
    title: 'Corporate Events',
    description: 'Elevate your business gatherings with sophisticated menus that leave lasting impressions.',
  },
  {
    icon: Cake,
    title: 'Weddings',
    description: 'From rehearsal dinners to the grand reception, every bite tells your love story.',
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Video BG */}
      {/* <div className="absolute inset-0 opacity-30">
        <LazyVideo
          src="https://videos.pexels.com/video-files/4253233/4253233-uhd_2560_1440_25fps.mp4"
          className="w-full h-full"
          poster=""
        />
      </div> */}
      {/* <div className="absolute inset-0 bg-background/80" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-primary">
            Our <span className="italic font-normal">Services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass-strong rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 group"
            >
              <service.icon
                size={32}
                strokeWidth={1.5}
                className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-display text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}