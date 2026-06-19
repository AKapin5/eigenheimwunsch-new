import React from "react";
import { useFela } from "react-fela";
import { useDispatch } from 'react-redux';
import { setKidsCount } from '../../../redux/actions/setKidsInfo';

import { formLabel, formLabelText, formInput } from "../styles";

export const KidsMoreThree = React.memo(() => {
  const { css } = useFela();
  const dispatch = useDispatch();

  const handleKidsCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    dispatch(setKidsCount(value));
  }; 

  return (
    <div className='col-md-6'>
      <label htmlFor='kidsNumber' className={css(formLabel)}>
        <span className={css(formLabelText)}>Anzahl</span>
        <input
          type="number"
          id='kidsNumber'
          name='kidsNumber'
          min='4'
          max='9'
          onChange={handleKidsCount}
          className={css(formInput)}
        />
      </label>
    </div>
  );
});
