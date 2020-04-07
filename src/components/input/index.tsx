import React from 'react';

import './index.scss';

interface Props {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void,
  name: string,
  error?: string,
  type?: string,
  label?: string,
  value?: string | number,
}

const Input = ({ onChange, label, name, error, type, value }: Props) => {
  return(
    <div className='input-root'>
      { 
        label && label !== '' &&
      <label>{label}</label>
      }
      <input onChange={onChange} value={value} name={name} type={type || 'text'} />
      {
        error && error !== '' &&
        <p className='input-error'>{error}</p>
      }
    </ div>
  );
}

export default Input;