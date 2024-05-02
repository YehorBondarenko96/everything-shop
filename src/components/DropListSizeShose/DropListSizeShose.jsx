import {
  AllDiv,
  Ul
} from "./DropListSizeShose.styled";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectItems, selectScreenWidth, selectColorShoes } from "../../redux/selectors";
import { LiDropListSizeShose } from "components/LiDropListSizeShose/LiDropListSizeShose";

export const DropListSizeShose = ({ id, firstParam, secondParam }) => {
  const color = useSelector(selectColorShoes);
  const shoes = useSelector(selectItems).find(item => item.id === id);
  const selectedParam = shoes[firstParam];
  const arrParam = shoes[color][secondParam];
  const realScreenWidth = useSelector(selectScreenWidth);
  
  const allDivRef = useRef(null);
  const ulRef = useRef(null);

  useEffect(() => {
    if (allDivRef.current && ulRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const allDiv = allDivRef.current;
      const ul = ulRef.current;

      // allDiv.style.height = screenWidth / (coef * 3.5) + 'px';
      allDiv.style.width = screenWidth / (coef * 5) + 'px';
      ul.style.fontSize = screenWidth / (coef * 36) + 'px';
    }
  }, [realScreenWidth]);

  return (
    <AllDiv ref={allDivRef}>
      <Ul ref={ulRef}>
        {arrParam.map((param, index) => <LiDropListSizeShose
          key={index}
          selected={selectedParam}
          value={param}
        />)}
      </Ul>
    </AllDiv>
  )
};