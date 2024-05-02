import css from './QuantityInput.module.css';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectScreenWidth } from 'redux/selectors';

export const QuantityInput = () => { 
  const [quantity, setQuantity] = useState(1);

  const realScreenWidth = useSelector(selectScreenWidth);

  const inputSavDrRef = useRef(null);
  const plusButRef = useRef(null); 
  const minButRef = useRef(null);

  const updateValueInp = (d, evt) => {
        evt.preventDefault();
        const inpValue = evt.target.value;
        setStInp(d, inpValue);
    };

  const forBlur = (d, evt) => {
        const inpV = evt.target.value;
        if (Number(inpV) <= 0) {
            delDrSh(d);
        };
    };

    const forPlus = (d) => {
        const newValP = Number(d.quantity) + 1;
        if (newValP > 0) {
            const newVP = String(newValP);
            setStInp(d, newVP);
        } else{
            delDrSh(d);
        };
    };

    const forMin = (d) => {
        const newValM = Number(d.quantity) - 1;
        if (newValM > 0) {
            const newVM = String(newValM);
            setStInp(d, newVM);
        } else{
            delDrSh(d);
        };
    };

  useEffect(() => {
    if (inputSavDrRef.current && plusButRef.current && minButRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;
      
      const inputSavDr = inputSavDrRef.current;
      const plusBut = plusButRef.current;
      const minBut = minButRef.current;

      inputSavDr.style.width = screenWidth > 450 ? screenWidth / (coef * 12) + 'px' : screenWidth / (coef * 25) + 'px';
      inputSavDr.style.height = screenWidth / (coef * 12) - 2 + 'px';
      inputSavDr.style.borderRadius = screenWidth / (coef * 36) + 'px';
      inputSavDr.style.fontSize = screenWidth / (coef * 30) + 'px';
      plusBut.style.height = screenWidth / (coef * 12) + 'px';
      minBut.style.height = screenWidth / (coef * 12) + 'px';
      plusBut.style.width =screenWidth / (coef * 25) + 'px';
      minBut.style.width = screenWidth / (coef * 25) + 'px';
      plusBut.style.fontSize = screenWidth / (coef * 20) + 'px';
      minBut.style.fontSize = screenWidth / (coef * 20) + 'px';
      plusBut.style.right = screenWidth > 900 ? screenWidth / (coef * 300) + 'px' : screenWidth / (coef * 150) + 'px';
      minBut.style.left = screenWidth > 900 ? screenWidth / (coef * 300) + 'px' : screenWidth / (coef * 150) + 'px';
    }
  }, [realScreenWidth]);

  return (
    <div className={css.divInput}>
                            <button
                                type="button"
                                ref={minButRef}
                                className={css.minBut}
                                onClick={() => forMin(drug)}
                            ></button>
                            <input
                                ref={inputSavDrRef}
                                className={css.inputSavDr}
                                name='quantity'
                                type="text"
                                onInput={(e) => {
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                }}
                                value={drug.quantity}
                                onChange={e => updateValueInp(drug, e)}
                                onBlur={e => forBlur(drug, e)}
                            />
                            <button
                                type="button"
                                ref={plusButRef}
                                className={css.plusBut}
                                onClick={() => forPlus(drug)}
                            ></button>
                        </div>
  )
};