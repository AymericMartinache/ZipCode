//* --- REACT
import { useEffect, useRef } from 'react';

const useFocus = () => {
  // creation d'une ref qui stocke au debut null et après la reconciliation le input element
  const myInputRef = useRef<null | HTMLInputElement>(null);

  // Effet joué après le premier render
  useEffect(() => {
    const myInputElem = myInputRef.current as HTMLInputElement;
    myInputElem.focus();
  }, []);

  return myInputRef;
};

export default useFocus;
