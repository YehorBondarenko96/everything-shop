import { useSelector } from "react-redux";
import {
  AllDiv,
  TitleSizes,
  Ul
} from "./UlSizesChair.styled";
import { selectSizeChair } from "../../redux/selectors";
import { LiSizesChair } from "components/LiSizesChair/LiSizesChair";

export const UlSizesChair = ({id}) => { 
  const sizes = useSelector(selectSizeChair).sizes;
  return (
    <AllDiv>
      <TitleSizes>Size</TitleSizes>
      <Ul>
      {sizes.map((size, index) => <LiSizesChair key={index} size={size} id={id} />)}
    </Ul>
    </AllDiv>
  )
};