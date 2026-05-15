import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { GiCoffeeBeans, GiCupcake, GiTeapot } from 'react-icons/gi';
import { MdBakeryDining } from 'react-icons/md';

export const SITE_URL = 'https://cafe-kolkata-jq1p.vercel.app/';

// Replace this with the real client cafe WhatsApp number before launch.
export const WHATSAPP_NUMBER = '+91XXXXXXXXXX';
export const WHATSAPP_MESSAGE = 'Hi, I want to order from Cafe Kolkata Demo';

// Replace these with the real client cafe social links before launch.
export const INSTAGRAM_URL = 'https://instagram.com/cafe-kolkata-demo';
export const FACEBOOK_URL = 'https://facebook.com/cafe-kolkata-demo';

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const qrTarget = SITE_URL;

export const stats = [
  {
    title: 'Fresh Ingredients',
    detail: 'Daily-baked breads, handpicked produce, and small-batch sauces.',
    icon: MdBakeryDining,
  },
  {
    title: 'Artisan Coffee',
    detail: 'Slow-roasted beans brewed fresh for rich, balanced cups.',
    icon: GiCoffeeBeans,
  },
  {
    title: 'Cozy Atmosphere',
    detail: 'Warm lights, calm corners, and a playlist made for lingering.',
    icon: GiCupcake,
  },
];

export const menuCategories = [
  {
    name: 'Coffee',
    icon: GiCoffeeBeans,
    items: [
      {
        name: 'Kolkata House Cappuccino',
        description: 'Double espresso, steamed milk, cocoa dust, and jaggery notes.',
        price: '₹169',
      },
      {
        name: 'Classic Cold Brew',
        description: '18-hour steeped coffee served over ice with orange peel.',
        price: '₹189',
      },
      {
        name: 'Mishti Mocha',
        description: 'Dark chocolate espresso with a gentle nolen gur finish.',
        price: '₹219',
      },
    ],
  },
  {
    name: 'Tea',
    icon: GiTeapot,
    items: [
      {
        name: 'Darjeeling First Flush',
        description: 'Light, floral single-estate tea served in a glass pot.',
        price: '₹149',
      },
      {
        name: 'Masala Chai Kulhad',
        description: 'Strong Assam tea simmered with ginger, cardamom, and cloves.',
        price: '₹99',
      },
      {
        name: 'Iced Lemon Tea',
        description: 'Fresh brewed black tea, lime, mint, and cane sugar.',
        price: '₹129',
      },
    ],
  },
  {
    name: 'Snacks',
    icon: MdBakeryDining,
    items: [
      {
        name: 'Chicken Cutlet Slider',
        description: 'Crisp Kolkata-style cutlet, kasundi mayo, and soft brioche.',
        price: '₹249',
      },
      {
        name: 'Paneer Tikka Toastie',
        description: 'Spiced paneer, peppers, cheddar, and sourdough toast.',
        price: '₹229',
      },
      {
        name: 'Herb Garlic Fries',
        description: 'Crispy fries tossed with roasted garlic butter and herbs.',
        price: '₹159',
      },
    ],
  },
  {
    name: 'Desserts',
    icon: GiCupcake,
    items: [
      {
        name: 'Baked Rosogolla Cheesecake',
        description: 'Creamy cheesecake with baked rosogolla and pistachio crumb.',
        price: '₹249',
      },
      {
        name: 'Belgian Chocolate Brownie',
        description: 'Warm fudgy brownie served with vanilla bean cream.',
        price: '₹199',
      },
      {
        name: 'Nolen Gur Tiramisu',
        description: 'Coffee-soaked sponge, mascarpone, and winter jaggery caramel.',
        price: '₹269',
      },
    ],
  },
];

export const socials = [
  { label: 'Instagram', icon: FaInstagram, href: INSTAGRAM_URL },
  { label: 'Facebook', icon: FaFacebookF, href: FACEBOOK_URL },
  { label: 'WhatsApp', icon: FaWhatsapp, href: whatsappUrl },
];

export const testimonials = [
  {
    quote: 'The cold brew is smooth and the place feels peaceful.',
    name: 'Riya S.',
  },
  {
    quote: 'Perfect spot for evening adda and quick snacks.',
    name: 'Arjun M.',
  },
  {
    quote: 'The QR menu and WhatsApp ordering made it super easy.',
    name: 'Sneha D.',
  },
];

export const ownerBenefits = [
  'WhatsApp ordering without app installation',
  'QR menu for tables, counters, and flyers',
  'Better online presence than only Zomato/Swiggy listings',
  'Easy updates for menu, photos, and offers',
];
