import {
  Backdrop,
  Container
} from "./Card.styled";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectScreenWidth } from "../../redux/selectors";

export const Card = ({ children, coefForHeight = 1 }) => { 
  const realScreenWidth = useSelector(selectScreenWidth);
  const navigate = useNavigate();

  const backdropChairRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (backdropChairRef.current && containerRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;
    
      const backdropChair = backdropChairRef.current;
      const container = containerRef.current;

      container.style.padding = `${screenWidth / (coef * 21)}px ${screenWidth / (coef * 10)}px`;
      container.style.height = `${screenWidth / (coef * coefForHeight)}px`;

    const handelClickBackdrop = (e) => {
        if (e.target.classList.contains('backdropChair')) {
            closeModal();
        }
    };

      const closeModal = () => { 
        window.removeEventListener('keydown', onEscPress);
        backdropChair.removeEventListener('click', handelClickBackdrop);
        navigate('/');
    };

    const onEscPress = e => {
      if (e.code === 'Escape') {
        closeModal()
      };
    };

      window.addEventListener('keydown', onEscPress);
      
      backdropChair.addEventListener('click', handelClickBackdrop);

      return () => {
        window.removeEventListener('keydown', onEscPress);
      };
        }
  }, [navigate, realScreenWidth, coefForHeight]);

  return (
    <Backdrop ref={backdropChairRef} className="backdropChair">
        <Container ref={containerRef}>
        {children}
      </Container>
    </Backdrop>
  )
};