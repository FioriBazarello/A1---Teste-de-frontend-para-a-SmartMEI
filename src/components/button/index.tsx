import React from 'react';

import './index.scss';

interface Props {
  children: JSX.Element | string | number,
  className?: string,
  fillContainer?: boolean,
  isLoading?: boolean,
  [key: string]: any,
};

const Button = ({ children, className, fillContainer, isLoading, ...otherProps }: Props) => {
  return (
    <button
      className={`
        button-root
        ${fillContainer ? 'fill-container' : ''}
        ${className}
      `}
      {...otherProps}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;