import { motion } from 'framer-motion';
import { images } from '../assets/images.js';
import { stats } from './data.js';

export default function About() {
  return (
    <section id="about" className="bg-coffee-50 py-20 sm:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-coffee-900 sm:text-5xl">
            A modern cafe shaped by Kolkata warmth.
          </h2>
          <p className="mt-6 text-lg leading-8 text-coffee-700">
            Cafe Kolkata Demo blends the comfort of a local adda spot with the polish of a contemporary coffee bar.
            Every cup is brewed fresh, every plate is prepared in small batches, and every corner is designed for
            guests who want a quiet pause in a busy day.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <article key={stat.title} className="rounded-[8px] border border-coffee-200 bg-white p-5 shadow-soft">
                  <Icon className="text-3xl text-saffron" />
                  <h3 className="mt-4 font-bold text-coffee-900">{stat.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-coffee-600">{stat.detail}</p>
                </article>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={images.about}
            alt="Cafe seating area with warm lights"
            className="h-[460px] w-full rounded-[8px] object-cover shadow-glow"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-[8px] bg-coffee-900/88 p-5 text-coffee-50 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-saffron">Open Daily</p>
            <p className="mt-2 text-2xl font-display font-bold">8:00 AM - 11:00 PM</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
