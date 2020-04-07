import React from 'react';

import './index.scss';

interface Props {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

const Backdrop = ({ onClick }: Props) => {
  return (
    <div onClick={onClick} className="backdrop-root" />
  );
}

export default Backdrop;