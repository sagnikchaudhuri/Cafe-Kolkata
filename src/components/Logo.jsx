import { GiCoffeeCup } from 'react-icons/gi';

export default function Logo({ light = false }) {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Cafe Kolkata home">
      <span
        className={`grid h-12 w-12 place-items-center rounded-full border ${
          light
            ? 'border-coffee-50/40 bg-coffee-50/10 text-saffron'
            : 'border-coffee-200 bg-coffee-900 text-saffron'
        }`}
      >
        <GiCoffeeCup className="text-2xl" />
      </span>
      <span className={light ? 'text-coffee-50' : 'text-coffee-900'}>
        <span className="block font-display text-xl font-extrabold leading-none">Cafe Kolkata</span>
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-saffron">Demo</span>
      </span>
    </a>
  );
}
