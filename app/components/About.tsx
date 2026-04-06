"use client"

import { motion } from 'framer-motion';
import { LazyImage } from './LazyMedia';

export default function About({ heroImage, eventImage }) {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <p className="font-body text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-primary leading-tight mb-8">
              Where Passion
              <br />
              Meets <span className="italic font-normal">Precision</span>
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                LELO'S Kitchen was born from a passionate vision, a chef
                who believe that food is the most intimate form of art. We don't 
                just cater events; we craft multisensory experiences that linger 
                in memory long after the last plate is cleared.
              </p>
              <p>
                From intimate dinner parties of ten to grand celebrations of five 
                hundred, our team brings Michelin-level technique and creativity 
                to every occasion. Each menu is a conversation, tailored, 
                personal, and utterly unique.
              </p>
            </div>

            {/* <div className="flex gap-16 mt-12">
              <div>
                <p className="font-display text-4xl font-semibold text-primary">3+</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Years of Excellence</p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-primary">500+</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Events Crafted</p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-primary">8</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Master Chefs</p>
              </div>
            </div> */}
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <LazyImage
              src={heroImage}
              alt="Elegant plated dish"
              className="relative w-full aspect-[4/5] rounded-2xl"
            />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden glass-strong hidden sm:block">
              <LazyImage
                src={eventImage}
                alt="Event setup"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}