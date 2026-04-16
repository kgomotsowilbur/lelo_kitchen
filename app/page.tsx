import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Services from './components/Service';

const IMAGES = {
  hero: 'https://media.base44.com/images/public/69d0ab81d4665ce09dcba6e9/e1222acb5_generated_a347de16.png',
  event: 'https://media.base44.com/images/public/69d0ab81d4665ce09dcba6e9/fb0dd578c_generated_31e01730.png',
  chefs: [
    'image1.jpg',
    'image2.jpg',
    'image4.jpeg',
  ],
  gallery: [
    { src: 'https://media.base44.com/images/public/69d0ab81d4665ce09dcba6e9/e1222acb5_generated_a347de16.png', alt: 'Fine dining presentation' },
    { src: 'https://media.base44.com/images/public/69d0ab81d4665ce09dcba6e9/1d908e2ed_generated_4af21492.png', alt: 'Craft cocktails' },
    { src: 'https://media.base44.com/images/public/69d0ab81d4665ce09dcba6e9/2a6a8fb54_generated_7041e2a6.png', alt: 'Luxury grazing table' },
    { src: 'https://media.base44.com/images/public/69d0ab81d4665ce09dcba6e9/fb0dd578c_generated_31e01730.png', alt: 'Elegant event setup' },
  ],
};

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <About heroImage={IMAGES.hero} eventImage={IMAGES.event} />
      <Services />
      <Team chefImages={IMAGES.chefs} />
      <Gallery images={IMAGES.gallery} />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}