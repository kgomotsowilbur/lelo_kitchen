"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { LazyVideo } from './LazyMedia';
import { Input } from './ui/input';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', event_type: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Message sent! We\'ll be in touch soon.');
    setForm({ name: '', email: '', message: '', event_type: '' });
    setSending(false);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Video BG */}
      <div className="absolute inset-0 opacity-20">
        <LazyVideo
          src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4"
          className="w-full h-full"
          poster=""
        />
      </div>
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-primary leading-tight mb-6">
              Let's Create
              <br />
              Something <span className="italic font-normal">Beautiful</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-12 max-w-md">
              Tell us about your event and we'll craft a bespoke menu and 
              experience that exceeds every expectation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="glass-strong w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-primary">Based in Mpumalanga Kinross</p>
                  <p className="font-body text-xs text-muted-foreground">Available Nationwide</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="glass-strong w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <p className="font-body text-sm text-primary">+27 76 938 0071</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="glass-strong w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <p className="font-body text-sm text-primary">nompumelelomanana084@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-xs tracking-[0.1em] text-muted-foreground uppercase mb-2 block">
                    Name
                  </label>
                  <Input
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="bg-white/5 border-white/10 text-primary placeholder:text-muted-foreground font-body"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-[0.1em] text-muted-foreground uppercase mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    className="bg-white/5 border-white/10 text-primary placeholder:text-muted-foreground font-body"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-xs tracking-[0.1em] text-muted-foreground uppercase mb-2 block">
                  Event Type
                </label>
                <Input
                  value={form.event_type}
                  onChange={e => setForm({...form, event_type: e.target.value})}
                  className="bg-white/5 border-white/10 text-primary placeholder:text-muted-foreground font-body"
                  placeholder="Wedding, Corporate, Private Dinner..."
                />
              </div>
              <div>
                <label className="font-body text-xs tracking-[0.1em] text-muted-foreground uppercase mb-2 block">
                  Tell Us More
                </label>
                <Textarea
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  className="bg-white/5 border-white/10 text-primary placeholder:text-muted-foreground font-body min-h-[120px]"
                  placeholder="Date, guest count, dietary requirements, vision..."
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full font-body text-sm tracking-[0.15em] uppercase py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} />
                    Send Inquiry
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}