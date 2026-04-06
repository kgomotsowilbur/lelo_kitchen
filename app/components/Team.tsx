"use client"

import { motion } from 'framer-motion';
import { LazyImage } from './LazyMedia';

const TEAM = [
  {
    name: 'Refined Culinary Artist',
    role: '',
    bio: '',
  },
  {
    name: 'Sophisticated Gourmet Chef',
    role: 'Nompumemlelo Manana',
    bio: 'Qualified chef',
  },
  {
    name: 'Elegant Cuisine Master',
    role: '',
    bio: '',
  },
];

export default function Team({ chefImages }) {
  return (
    <section id="team" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            The Collective
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-primary">
            Meet Our <span className="italic font-normal">Chef</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
                <LazyImage
                  src={chefImages[i]}
                  alt={member.name}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                {i == 1 &&
                    <div className="glass rounded-xl p-4">
                        <p className="font-body text-xs tracking-[0.2em] text-muted-foreground uppercase">
                        {member.role}
                        </p>
                    </div>
                }
                </div>
              </div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-2">
                    {member.name}
                </h3>
              {/* <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}