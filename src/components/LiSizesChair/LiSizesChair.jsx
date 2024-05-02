import {
  Li,
  Button
} from "./LiSizesChair.styled";
import { useSelector, useDispatch } from "react-redux";
import { selectSizeChair, selectScreenWidth } from "../../redux/selectors";
import { setSelectedSize } from "../../redux/slice";
import { useEffect, useRef } from "react";

export const LiSizesChair = ({ size, id }) => { 
  const dispatch = useDispatch();
  const realScreenWidth = useSelector(selectScreenWidth);
  const selectedSize = useSelector(selectSizeChair).selectedSize;

  const liRef = useRef(null);

  const handelClick = (e) => { 
    const valueBntton = e.currentTarget.textContent;
    const selectedParams = {
      id,
      size: valueBntton
    };
    dispatch(setSelectedSize(selectedParams));
  };

  useEffect(() => {
    if (liRef.current) { 
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const li = liRef.current;

      li.style.height = screenWidth / (coef * 27.78) + 'px';
      li.style.width = screenWidth / (coef * 3.125) + 'px';
    };
  }, [realScreenWidth]);

  return (
    <Li ref={liRef}  style={{borderColor: selectedSize === size && "#000000"}}>
      <Button
        type="button"
        onClick={handelClick}
      >
        {size}
      </Button>
    </Li>
  )
};