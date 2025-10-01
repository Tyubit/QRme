"use client";
type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick ?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

export const SimpleButton: React.FC<ButtonProps> = ({ type = 'button', className, onClick, children }) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
  }

  return (
    <button type={type} onClick={handleClick} className={`${className}`}>{children}</button>
  )
}
export const IconButton: React.FC<ButtonProps> = ({ type = 'button', className, onClick, children }) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
  }

  return (
    <button type={type} onClick={handleClick} className={`active:bg-[#D6E0ED] p-1 rounded-full w-fit${className}`}>{children}</button>
  )
}

export const BlueButton: React.FC<ButtonProps> = ({ type = 'button', className, onClick, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
  }

  return (
    <button type={type} onClick={handleClick} className={`w-full py-3 rounded-full active:bg-white active:text-[#3D74B6] active:border active:border-[#3D74B6] transition-colors duration-200 ease-in-out bg-[#3D74B6] text-white ${className}`}>{children}</button>
  )
}

