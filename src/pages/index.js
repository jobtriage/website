import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Intro from '../components/Intro/Intro';
import Features from '../components/Features/Features';
import Contribution from '../components/Contribution/Contribution';
import Footer from '../components/Footer/Footer';

const Index = () => {
  return (
    <>
      <NavBar />
      <Intro />
      <Features />
      <Contribution />
      <Footer />
    </>
  );
};

export default Index;
