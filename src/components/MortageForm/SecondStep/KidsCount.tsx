import React from "react";
import { useFela } from "react-fela";
import { useDispatch } from 'react-redux';
import { setKidsMoreThree } from '../../../redux/actions/setKidsInfo';
import { setKidsCount } from '../../../redux/actions/setKidsInfo';

import { formLabelText, radioField, radioInput } from "../styles";
import { KidsMoreThree } from "./KidsMoreThree";

interface kidsCountObj {
  active: string;
}

export const KidsCount = React.memo(() => {
  const { css } = useFela();
  const dispatch = useDispatch();

  const [kidsCount, setKidsCountInput ] = React.useState<kidsCountObj>({
    active: "kids1",
  });

  const handleKidsCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKidsCountInput({
      active: e.target.id,
    });
    dispatch(setKidsCount(Number(e.target.id.slice(4))));
    
    if (e.target.id === 'kidsMore') {
      dispatch(setKidsCount(0));
      dispatch(setKidsMoreThree(true));
    }
  };

  return (
    <>
      <div className='col-12'>
        <span className={css(formLabelText)}>Anzahl Kinder?</span>
        <div className={css(radioField)}>
          <div className={css(radioInput)}>
            <input
              type='radio'
              id='kids1'
              name='KidsCount'
              checked={kidsCount.active === "kids1"}
              onChange={handleKidsCount}
            />
            <label htmlFor='kids1'>1</label>
          </div>
          <div className={css(radioInput)}>
            <input
              type='radio'
              id='kids2'
              name='KidsCount'
              checked={kidsCount.active === "kids2"}
              onChange={handleKidsCount}
            />
            <label htmlFor='kids2'>2</label>
          </div>
          <div className={css(radioInput)}>
            <input
              type='radio'
              id='kids3'
              name='KidsCount'
              checked={kidsCount.active === "kids3"}
              onChange={handleKidsCount}
            />
            <label htmlFor='kids3'>3</label>
          </div>
          <div className={css(radioInput)}>
            <input
              type='radio'
              id='kidsMore'
              name='KidsCount'
              checked={kidsCount.active === "kidsMore"}
              onChange={handleKidsCount}
            />
            <label htmlFor='kidsMore'>mehr als 3</label>
          </div>
        </div>
      </div>
      {kidsCount.active === 'kidsMore' && <KidsMoreThree/>}
    </>
  );
});
