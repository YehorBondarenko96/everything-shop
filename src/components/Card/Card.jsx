import {
  Backdrop,
  Container
} from "./Card.styled";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectScreenWidth, selectScreenHeight } from "../../redux/selectors";

export const Card = ({ children, coefForHeight = 1, path = '/' }) => { 
  const realScreenWidth = useSelector(selectScreenWidth);
  const realScreenHeight = useSelector(selectScreenHeight);
  const navigate = useNavigate();

  const backdropRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (backdropRef.current && containerRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;
    
      const backdrop = backdropRef.current;
      const container = containerRef.current;

      container.style.padding = `${screenWidth / (coef * 21)}px ${screenWidth / (coef * 10)}px`;
      container.style.height = `${screenWidth / (coef * coefForHeight)}px`;

      setTimeout(() => {
        if (realScreenHeight && container.offsetHeight > 0) {
          backdrop.style.alignItems = realScreenHeight < container.offsetHeight ? 'start' : 'center';
        }
      }, 0);

    const handelClickBackdrop = (e) => {
        if (e.target.classList.contains('backdropChair')) {
            closeModal();
        }
    };

      const closeModal = () => { 
        window.removeEventListener('keydown', onEscPress);
        backdrop.removeEventListener('click', handelClickBackdrop);
          navigate(path);
    };

    const onEscPress = e => {
      if (e.code === 'Escape') {
        closeModal()
      };
    };

      window.addEventListener('keydown', onEscPress);
      
      backdrop.addEventListener('click', handelClickBackdrop);

      return () => {
        window.removeEventListener('keydown', onEscPress);
      };
        }
  }, [navigate, realScreenWidth, realScreenHeight, coefForHeight, path]);

  return (
    <Backdrop ref={backdropRef} className="backdropChair">
        <Container ref={containerRef}>
        {children}
      </Container>
    </Backdrop>
  )
};