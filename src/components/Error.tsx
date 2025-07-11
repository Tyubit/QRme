import React from 'react'

type ErrorProps = {
    children?: React.ReactNode;
};
export const Error: React.FC<ErrorProps> = ({ children  }) => {
return (
    <p className='text-[#DA2C43] text-sm flex'>{children}</p>
)}
