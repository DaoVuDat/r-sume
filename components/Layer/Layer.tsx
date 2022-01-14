import React from 'react';

import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/Header/NavBar';

interface LayerProps {
  children: React.ReactNode;
}

const Layer = ({ children }: LayerProps): JSX.Element => {
  return (
    <div className="bg-primary text-secondary_text font-lato min-h-screen">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layer;