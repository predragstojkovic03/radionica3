import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';

import styles from './Homepage.module.css';
import SectionNovi from '../../components/SectionNovi/SectionNovi';

function Homepage() {
  return (
    <>
      <HeroSection />
      <SectionNovi />
    </>
  );
}

export default Homepage;
