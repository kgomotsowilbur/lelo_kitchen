"use client"

import { motion } from 'framer-motion';
import { LazyImage } from './LazyMedia';

export default function Gallery({ images }) {
  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-primary">
            A Taste of Our <span className="italic font-normal">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                i === 0 ? 'col-span-2 row-span-2 aspect-square' :
                i === 3 ? 'col-span-2 lg:col-span-1 aspect-[4/3]' :
                'aspect-square'
              }`}
            >
              <LazyImage
                src={img.src}
                alt={img.alt}
                className="w-full h-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end">
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-body text-sm text-white/90">{img.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}