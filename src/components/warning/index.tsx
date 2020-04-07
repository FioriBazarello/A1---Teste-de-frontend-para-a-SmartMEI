import React from 'react';

import './index.scss';

interface Props {
  message: string,
}

const Warning = ({ message }: Props) => {
  return (
    <div className='warning-root'>
      <p>{message}</p>
    </div>
  );
}

export default Warning;