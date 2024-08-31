//* --- REACT
import { useEffect, useRef, useState } from 'react';

//* --- REDUX
import { useDispatch } from 'react-redux';

//* --- STORE
import { useAppSelector } from '../../Store/hooks';

//* --- THUNK
import thunkGetCity from '../../Store/thunkGetCity';

//* --- COMPONENTS
import Information from '../Informations/information';

//* --- SCSS
import './form.scss';
import { AppDispatch } from '../../Store/store';

function Form() {
  //* --- DISPATCH
  const dispatch: AppDispatch = useDispatch();

  //* USE STATE LOCAL
  // input du form
  const [inputValue, setInputValue] = useState('');

  // message d'erreur de l'input
  const [inputError, setInputError] = useState('');

  // message d'erreur du thunk
  const thunkError = useAppSelector((state) => state.error);

  // focus
  // Référence à l'input
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus sur l'input lorsque le composant est monté
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        // console.log(inputValue);
        if (inputValue !== '') {
          //* DISPATCH
          dispatch(thunkGetCity(Number(inputValue)));

          // On vide l'inputValue
          setInputValue('');
        }
      }}
    >
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => {
          // on set l'inputValue
          if (/^\d{0,4}$/.test(inputValue)) {
            setInputValue(e.target.value);
            setInputError('');
          } else {
            setInputValue('');
            setInputError('Le code postal doit comporter 5 chiffres.');
          }
        }}
        // maxLength={5}
        pattern="\d{5}"
        className="form-input"
        type="text"
        name="input"
        id="input"
        placeholder="Saisissez un code postal 👇"
      />
      {inputError && <span style={{ color: 'red' }}>{inputError}</span>}
      {thunkError && <span style={{ color: 'red' }}>{thunkError}</span>}
      <button className="form-btn" type="submit">
        Rechercher
      </button>
    </form>
  );
}

export default Form;
