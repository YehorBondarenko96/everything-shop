import css from './SizeShose.module.css';
import { DropListSizeShose } from 'components/DropListSizeShose/DropListSizeShose';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectScreenWidth } from '../../redux/selectors';

export const SizeShose = ({pButtons, id, firstParam, secondParam, setSelectedParam , secCoef=5}) => {
    const allFiltAlfRef = useRef(null);
    const secAllDivRef = useRef(null);
    const allButtonFARef = useRef(null);
    const divDrLRef = useRef(null);
    const divArrowRef = useRef(null);
    const pButtonFARef = useRef(null);

    const [drListOn, setDrListOn] = useState(false);
    const realScreenWidth = useSelector(selectScreenWidth);




    useEffect(() => {
        if (allFiltAlfRef.current && secAllDivRef.current && allButtonFARef.current &&
            divArrowRef.current && divDrLRef.current && pButtonFARef.current) {
            const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
            const coef = 1;
            
            const allFiltAlf = allFiltAlfRef.current;
            const secAllDiv = secAllDivRef.current;
            const allButtonFA = allButtonFARef.current;
            const divArrow = divArrowRef.current;
            const divDrL = divDrLRef.current;
            const pButtonFA = pButtonFARef.current;

            allFiltAlf.style.height = screenWidth / (24 * coef) + 'px';
            allFiltAlf.style.width = screenWidth / (10 * coef) + 'px';
            secAllDiv.style.height = screenWidth / (secCoef * coef) + 'px';
            secAllDiv.style.width = screenWidth / (9.1 * coef) + 'px';
            pButtonFA.style.fontSize = screenWidth / (60 * coef) + 'px';
            allButtonFA.style.width = screenWidth / (10 * coef) + 'px';
            allButtonFA.style.height = screenWidth / (24 * coef) + 'px';
            allButtonFA.style.gap = screenWidth / (66.67 * coef) + 'px';
            allButtonFA.style.paddingLeft = screenWidth / 200 + 'px';
            allButtonFA.style.borderRadius = screenWidth / 100 + 'px';
            divArrow.style.height = screenWidth / (50 * coef) + 'px';
            divArrow.style.width = screenWidth / (50 * coef) + 'px';
            divDrL.style.borderRadius = screenWidth / 100 + 'px';
        }
    });

    const remCl = () => {
        if (divDrLRef.current && divArrowRef.current) {
            divDrLRef.current.classList.remove(css.divDrLAct);
            divArrowRef.current.classList.remove(css.divArrowAct);
            window.removeEventListener('click', remCl);
            setDrListOn(false);
        }
    };

    const addCl = () => {
        if (divDrLRef.current && divArrowRef.current) {
            setTimeout(() => {
                setDrListOn(true);
                divDrLRef.current.classList.add(css.divDrLAct);
                divArrowRef.current.classList.add(css.divArrowAct);
                window.addEventListener('click', remCl);
            }, 0)
        }
    };

    const clickAllB = () => {
        if (drListOn) {
            remCl();
        } else {
            addCl();
        }
    };

    return (
        <div ref={allFiltAlfRef} className={css.allFiltAlf}>
            <div ref={secAllDivRef} className={css.secAllDiv}>
                <div
                    className={css.allButtonFA}
                    type="button"
                    ref={allButtonFARef}
                    onClick={clickAllB}>
                    <p ref={pButtonFARef} className={css.pButtonFA}>{ pButtons }</p>
                <div ref={divArrowRef} className={css.divArrow}></div>
            </div>
            <div ref={divDrLRef} className={css.divDrL}>
                    <DropListSizeShose
                        id={id}
                        firstParam={firstParam}
                        secondParam={secondParam}
                        setSelectedParam={setSelectedParam}
                    />
            </div>
            </div>
        </div>
    )
};