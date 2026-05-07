import { motion } from 'framer-motion';
import { menuCategories } from './data.js';

export default function Menu() {
  return (
    <section id="menu" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Signature Menu</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-coffee-900 sm:text-5xl">
            Cafe favorites made for dine-in and delivery.
          </h2>
          <p className="mt-5 text-lg leading-8 text-coffee-600">
            A compact, profitable menu with familiar choices, premium touches, and realistic local pricing.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {menuCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="rounded-[8px] border border-coffee-100 bg-coffee-50 p-6 shadow-soft"
              >
                <div className="flex items-center gap-3 border-b border-coffee-200 pb-5">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-coffee-900 text-2xl text-saffron">
                    <Icon />
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-coffee-900">{category.name}</h3>
                </div>
                <div className="divide-y divide-coffee-200">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex gap-5 py-5">
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-coffee-900">{item.name}</h4>
                        <p className="mt-1 text-sm leading-6 text-coffee-600">{item.description}</p>
                      </div>
                      <p className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-rosewood shadow-sm">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
