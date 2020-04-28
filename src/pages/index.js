import React from 'react';
import Head from 'next/head'
import NavBar from '../components/NavBar/NavBar';
import Intro from '../components/Intro/Intro';
import Features from '../components/Features/Features';
import Contribution from '../components/Contribution/Contribution';
import Footer from '../components/Footer/Footer';

const Index = () => {
  return (
    <>
      <Head>
        <title>Job Triage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <Intro />
      <Features />
      <Contribution />
      <Footer />
    </>
  );
};

export default Index;
