import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '@/components/layout/Footer';

const AboutLayout = ({ children }) => {
  return (
    <div id='wrap'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AboutLayout;
