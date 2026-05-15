import { motion } from 'framer-motion';
import { FaBullhorn, FaMobileAlt, FaQrcode, FaSyncAlt } from 'react-icons/fa';
import { ownerBenefits } from './data.js';

const benefitIcons = [FaMobileAlt, FaQrcode, FaBullhorn, FaSyncAlt];

export default function BusinessBenefits() {
  return (
    <section className="bg-coffee-50 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">For Cafe Owners</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-coffee-900 sm:text-5xl">
              Built to help cafés get more direct orders
            </h2>
            <p className="mt-5 text-lg leading-8 text-coffee-700">
              This demo is not just a pretty page. It shows owners how a lightweight website can turn walk-ins,
              Instagram traffic, flyers, and table scans into direct WhatsApp conversations.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {ownerBenefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <motion.article
                  key={benefit}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="rounded-[8px] border border-coffee-200 bg-white p-6 shadow-soft"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-coffee-900 text-saffron">
                    <Icon />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold leading-7 text-coffee-900">{benefit}</h3>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
