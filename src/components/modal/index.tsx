import React from 'react';

import './index.scss';

interface Props {
  children: JSX.Element | Array<JSX.Element> | string,
}

const Modal = ({ children }: Props) => {
  return (
    <div className="modal-root">{children}</div>
  );
};

export default Modal;