import { CallToAction } from './CallToAction';
import { Faqs } from './Faqs';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { Pricing } from './Pricing';
import { PrimaryFeatures } from './PrimaryFeatures';
import { SecondaryFeatures } from './SecondaryFeatures';
import { Testimonials } from './Testimonials';

export default function Welcome() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
