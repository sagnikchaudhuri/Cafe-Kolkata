import { motion } from 'framer-motion';
import { images } from '../assets/images.js';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-coffee-900 py-20 text-coffee-50 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Warm corners, crafted cups.</h2>
          </div>
          <p className="max-w-md text-coffee-100">
            A visual-first section for owners to imagine their real ambience, food photography, and customer moments.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.gallery.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group overflow-hidden rounded-[8px] bg-coffee-800 ${
                index === 0 || index === 5 ? 'md:row-span-2' : ''
              }`}
            >
              <img
                src={image}
                alt={`Cafe Kolkata gallery ${index + 1}`}
                className="h-full min-h-48 w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-85 md:min-h-64"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
