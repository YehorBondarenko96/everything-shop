import {
  Li,
  Button
} from "./LiDropListSizeShose.styled";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectScreenWidth } from "../../redux/selectors";

export const LiDropListSizeShose = ({ selected, value, setSelectedParam }) => { 
  const realScreenWidth = useSelector(selectScreenWidth);

  const liRef = useRef(null);

  useEffect(() => {
    if (liRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const li = liRef.current;
      li.style.height = screenWidth / (coef * 20) + 'px';
    }
  }, [realScreenWidth]);

  const thisSelected = selected === value;

  const handleClick = () => {
    setSelectedParam(value);
  };
  
  return (
    <Li
      ref={liRef}
      style={{backgroundColor: thisSelected && "#31407f"}}
    >
      <Button
        type="button"
        style={{ color: thisSelected && "#ffffff" }}
        onClick={handleClick}
      >
        {value}
      </Button>
    </Li>
  )
};