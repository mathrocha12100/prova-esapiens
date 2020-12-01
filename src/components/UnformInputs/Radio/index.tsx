import React, { useEffect, useRef } from 'react';
import { Props } from './types';
import { Container } from './styles';
import { useField } from '@unform/core';

 const Radio: React.FC<Props> = ({ name, options, label }) => {
  const inputRefs: any = useRef([]);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    const register = registerField as any;
    register({
      name: fieldName,
      path: 'value',
      ref: inputRefs.current,
      setValue(refs: any, value: any) {
        const item = refs.find((ref: { value: unknown; }) => ref.value === value);

        if (item) {
          item.checked = true;
        }
      },
      getValue(refs: any[])  {
        const checked = refs.find((ref: { checked: any; }) => ref.checked);

        return checked ? checked.value : null;
      }
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <span>{label}</span>
      <div>
        {options.map((option, index) => (
          <label key={option.id}>
            <input
              ref={elRef => (inputRefs.current[index] = elRef)}
              type="radio"
              name={fieldName}
              value={option.id}
              defaultChecked={defaultValue === option.id}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </Container>
  );
}

export default Radio;