import React from 'react';

import Spinner from '../spinner';

import './index.scss';

interface Props {
  text?: string,
}

const LoadingModal = ({ text }: Props) => {
  return (
    <div className={'loading-modal-root'}>
      <Spinner />
      <h2>{text || 'Loading'}</h2>
    </div>
  );
}

export default LoadingModal;