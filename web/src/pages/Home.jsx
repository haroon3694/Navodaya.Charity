import Nav from '../components/Nav';
import ScrollProgress from '../components/ScrollProgress';
import Hero from '../components/home/Hero';
import PillarsSection from '../components/home/PillarsSection';
import AboutTeaser from '../components/home/AboutTeaser';
import WhereWeWork from '../components/home/WhereWeWork';
import ImpactBand from '../components/home/ImpactBand';
import FounderTeaser from '../components/home/FounderTeaser';
import Footer from '../components/Footer';
import { useDocumentHead } from '../hooks/useDocumentHead';

export default function Home() {
  useDocumentHead({
    title: 'Navodaya Foundation | Navodaya Charity by Phaneesh Murthy & Jaya Murthy',
    description:
      'Navodaya Foundation (Navodaya Charity) is an Indian philanthropic foundation founded by Phaneesh Murthy and Jaya Murthy, advancing tiger conservation, girl empowerment, and community programs across India.',
    path: '/',
  });

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#fff', fontFamily: "'Inter', system-ui, sans-serif", color: '#3a463f', overflowX: 'hidden' }}>
      <ScrollProgress />
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
