import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <div className="m-auto text-center p-8">
      Copyright &copy; {new Date().getFullYear().toString()} Đào Vũ Đạt. All
      Rights Reserved.
    </div>
  );
};

export default Footer;
