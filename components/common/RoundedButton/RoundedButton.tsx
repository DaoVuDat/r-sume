import React from 'react';

interface RoundedButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const RoundedButton = ({
  children,
  onClick,
}: RoundedButtonProps): JSX.Element => {
  return (
    <div
      className=" bg-secondary 
                    px-10 py-3 m-auto font-bold
                    text-center text-sm text-gray-300
                    border rounded border-secondary
                    transition duration-500
                    cursor-pointer
                    hover:bg-secondary_hover hover:border-secondary_hover hover:text-gray-100"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default RoundedButton;
