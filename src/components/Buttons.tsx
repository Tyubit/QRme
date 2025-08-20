import { useState } from "react"

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick ?: () => void
  children?: React.ReactNode;
};
export const SimpleButton: React.FC<ButtonProps> = ({ type = 'button', className, onClick, children }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
    if (onClick) onClick();
  }

  return (
    <button type={type} onClick={handleClick} className={`w-full py-3 rounded-full active:bg-white active:text-[#3D74B6] active:border active:border-[#3D74B6] transition-colors duration-200 ease-in-out bg-[#3D74B6] text-white ${className}`}>{children}</button>
  )
}
