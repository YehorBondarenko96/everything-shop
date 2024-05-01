import {
  Li,
  Button,
  Img
} from "./LiChairsPhoto.styled";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectScreenWidth } from "../../redux/selectors";

export const LiChairsPhoto = ({ photo, alt }) => {
  const realScreenWidth = useSelector(selectScreenWidth);

  const buttonRef = useRef(null);
  const liRef = useRef(null);

  useEffect(() => {
    if (liRef.current && buttonRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const li = liRef.current;

      li.style.width = screenWidth / (coef * 7) + 'px';
      li.style.height = screenWidth / (coef * 7) + 'px';
      li.style.borderRadius = screenWidth / (coef * 70) + 'px';
    }
  }, [realScreenWidth]);

  return (
    <Li ref={liRef}>
      <Button ref={buttonRef}>
        <Img src={photo} alt={alt} />
      </Button>
    </Li>
  )
};