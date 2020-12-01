import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Props } from './types';
import { Container } from './styles';

const TextArea: React.FC<Props> = ({ name, label, rows, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  
  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>
      <textarea
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        rows={rows || 4}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </Container>
  );
}

export default TextArea;