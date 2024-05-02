import { Ul } from "./UlColorsShoes.styled";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/selectors";
import { LiColorsShoes } from "components/LiColorsShoes/LiColorsShoes";

export const UlColorsShoes = ({ id }) => {
  const colorsArr = useSelector(selectItems).find(item => item.id === id).colors;
  return (
    <Ul>
      {colorsArr.map((color, index) => <LiColorsShoes key={index} id={id} color={color} />)}
    </Ul>
  )
};