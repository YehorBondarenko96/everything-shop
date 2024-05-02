import { useSelector } from "react-redux";
import {
  Ul
} from "./UlButtonsShoes.styled";
import { selectItems } from "../../redux/selectors";
import { LiButtonsShoes } from "components/LiButtonsShoes/LiButtonsShoes";

export const UlButtonsShoes = ({ id }) => {
  const shoes = useSelector(selectItems).find(item => item.id === id);
  const arrPhotos = shoes[shoes.color].images;

  return (
    <Ul>
      {arrPhotos.map((photo, index) => <LiButtonsShoes key={index} id={id} photo={photo} />)}
    </Ul>
  )
};