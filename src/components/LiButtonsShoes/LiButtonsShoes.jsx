import { useSelector, useDispatch } from "react-redux";
import {
  Li,
  Button
} from "./LiButtonsShoes.styled";
import { selectTitleImageShoes } from "../../redux/selectors";
import { setTitleImage } from "../../redux/slice";

export const LiButtonsShoes = ({ photo, id }) => {
  const dispatch = useDispatch();
  const titleImage = useSelector(selectTitleImageShoes);
  
  const isTitleImage = titleImage === photo;

  const handleClick = () => {
    const selectedParams = {
      id,
      titleImage: photo
    };
    dispatch(setTitleImage(selectedParams));
  };

  return (
    <Li
      style={{
        width: isTitleImage && "8px",
        height: isTitleImage && "8px",
        borderWidth: isTitleImage && "1px",
        borderRadius: !isTitleImage && "50%"
      }}
    >
      <Button
        type="button"
        style={{
          width: isTitleImage && "5px",
          height: isTitleImage && "5px",
          backgroundColor: isTitleImage && "#15225a"
        }}
        onClick={handleClick}
      />
    </Li>
  )
};