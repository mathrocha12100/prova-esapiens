import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

/**
 * hook customizado para guardar estados no localstorage
 * 
 * @param key - chave da variavel pra ser guardada no localstorage
 * @param defaultValue - valor padrão
 */
function usePersistedState<T>(key: string, defaultValue: T): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export default usePersistedState;