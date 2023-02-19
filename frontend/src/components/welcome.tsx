import { CallToAction } from './CallToAction';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { PrimaryFeatures } from './PrimaryFeatures';
import { SecondaryFeatures } from './SecondaryFeatures';

export default function Welcome() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
