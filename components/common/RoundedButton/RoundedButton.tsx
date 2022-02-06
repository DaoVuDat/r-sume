import React from 'react';

interface RoundedButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const RoundedButton = ({
  children,
  onClick,
}: RoundedButtonProps): JSX.Element => {
  return (
    <button
      className=" bg-secondary 
                    px-10 py-3 font-bold
                    text-center text-sm text-gray-300
                    border rounded border-secondary
                    transition duration-500
                    cursor-pointer
                    hover:bg-secondary_hover hover:border-secondary_hover hover:text-gray-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
