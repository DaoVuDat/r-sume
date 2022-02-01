import React from 'react';

import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/Header/NavBar';

interface LayerProps {
  children: React.ReactNode;
}

const Layer = ({ children }: LayerProps): JSX.Element => {
  return (
    <div className="bg-primary text-primary_text font-lato font-thin min-h-screen pt-[100px] w-screen overflow-hidden">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layer;
