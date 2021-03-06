import React from 'react';

import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/Header/NavBar';

interface LayerProps {
  children: React.ReactNode;
}

const Layer = ({ children }: LayerProps): JSX.Element => {
  return (
    <div className="relative bg-primary text-primary_text font-lato font-thin min-h-screen w-full overflow-hidden pt-16">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layer;
