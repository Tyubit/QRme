import React from 'react'
type ErrorProps = {
    type?: 'button' | 'submit' | 'reset';
    children?: React.ReactNode;
};
export const SimpleButton: React.FC<ErrorProps> = ({ type = 'button', children }) => {
  return (
      <button type={type} className='block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800'>{children}</button>
  )
}
