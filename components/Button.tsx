import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  [key: string]: any;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'default', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded font-medium focus:outline-none';
  const variantStyles = {
    default: 'bg-blue-500 text-white hover:bg-blue-700',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {children}
    </button>
  );
};