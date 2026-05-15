import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from './data.js';

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Guest Reviews</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-coffee-900 sm:text-5xl">
            Loved by coffee people
          </h2>
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-coffee-200 bg-coffee-50 px-5 py-3 text-sm font-bold text-coffee-700 shadow-sm">
            <span>⭐ 4.8 average rating · 1,200+ happy guests</span>
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[8px] border border-coffee-100 bg-coffee-50 p-6 shadow-soft"
            >
              <FaQuoteLeft className="text-2xl text-saffron" />
              <p className="mt-5 text-lg font-semibold leading-8 text-coffee-900">"{testimonial.quote}"</p>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-coffee-500">
                — {testimonial.name}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
