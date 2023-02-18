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
      <head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </head>
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
