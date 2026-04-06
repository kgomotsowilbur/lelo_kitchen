"use client"

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "LELO'S Kitchen transformed our wedding into a culinary fairy tale. Every guest was speechless.",
    author: "Elena & David",
    event: "Wedding Reception, 200 Guests",
  },
  {
    quote: "The level of artistry and attention to detail is simply unmatched. They don't cater, they perform.",
    author: "Michael Torres",
    event: "Corporate Gala, Fortune 500",
  },
  {
    quote: "An intimate dinner for twelve that felt like dining in a Michelin-star restaurant. Pure magic.",
    author: "Catherine Park",
    event: "Private Dinner Party",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-primary">
            Words From Our <span className="italic font-normal">Guests</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass-strong rounded-2xl p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display text-lg italic text-primary leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-body text-sm font-medium text-primary">{t.author}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{t.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}