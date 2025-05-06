
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Observability from '../components/Observability';
import DataEngineering from '../components/DataEngineering';
import MVP from '../components/MVP';
import LogoMarquee from '../components/LogoMarquee';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Observability />
      <DataEngineering />
      <MVP />
      <LogoMarquee />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
