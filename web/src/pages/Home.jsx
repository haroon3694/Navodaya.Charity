import Nav from '../components/Nav';
import Hero from '../components/home/Hero';
import PillarsSection from '../components/home/PillarsSection';
import AboutTeaser from '../components/home/AboutTeaser';
import WhereWeWork from '../components/home/WhereWeWork';
import ImpactBand from '../components/home/ImpactBand';
import FounderTeaser from '../components/home/FounderTeaser';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#fff', fontFamily: "'Inter', system-ui, sans-serif", color: '#3a463f', overflowX: 'hidden' }}>
      <Nav transparentOnTop />
      <Hero />
      <PillarsSection />
      <AboutTeaser />
      <WhereWeWork />
      <ImpactBand />
      <FounderTeaser />
      <Footer />
    </div>
  );
}
