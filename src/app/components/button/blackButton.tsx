import React from 'react';

interface BlackButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean; 
}

const BlackButton: React.FC<BlackButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`bg-black text-white font-medium py-3.5 px-2 rounded-[25px] mb-2 
  hover:bg-black/90 transition-colors 
  disabled:bg-gray-300 disabled:opacity-70 disabled:cursor-not-allowed 
  ${className}`}
    >
      {loading ? (
        <span className="flex items-center justify-center ">
          {/* <img src={gif.loadingGIF} alt="Loading" className="h-10 w-10" /> */}
          {type === 'submit' ? 'Submitting...' : 'Loading...'}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default BlackButton;
