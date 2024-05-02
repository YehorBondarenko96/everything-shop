import { useSelector, useDispatch } from "react-redux";
import { selectItems, selectColorShoes } from "../../redux/selectors";
import { setColor } from "../../redux/slice";
import {
  Li,
  LiAfter,
  Button,
  Img
} from "./LiColorsShoes.styled";

export const LiColorsShoes = ({ id, color }) => { 
  const dispatch = useDispatch();
  const shoes = useSelector(selectItems).find(item => item.id === id);
  const srcImages = shoes[color].grandTitleImage;
  const altImages = shoes.title.toLowerCase();
  const selectColor = useSelector(selectColorShoes);

  const thisColorSelected = selectColor === color;

  const handleClick = () => { 
    const selectedParams = {
      id,
      color
    };
    dispatch(setColor(selectedParams));
  };

  return (
    <Li>
      {thisColorSelected && <LiAfter/>}
      <Button
        type="button"
        onClick={handleClick}
      >
        <Img src={srcImages} alt={altImages} />
      </Button>
    </Li>
  )
};