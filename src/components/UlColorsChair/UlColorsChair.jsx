import {
  AllDiv,
  TitleColors,
  Ul,
  Li,
  Button
} from "./UlColorsChair.styled";
import { useSelector, useDispatch } from "react-redux";
import { selectColorChair } from "../../redux/selectors";
import { setColor } from "../../redux/slice";

export const UlColorsChair = ({ id }) => {
  const dispatch = useDispatch();
  const color = useSelector(selectColorChair);

  const handelClick = (e) => {
    const idButton = e.currentTarget.id;
    const selectedParams = {
      id,
      color: idButton
    };
    dispatch(setColor(selectedParams));
  };

  return (
    <AllDiv>
      <TitleColors>Color: {color}</TitleColors>
      <Ul>
        <Li style={{borderColor: color === "white" && "#000000"}}>
          <Button
        type="button" 
        id="white" 
        style={{ backgroundColor: "#ffffff" }}
        onClick={handelClick}
        /></Li>
        <Li style={{borderColor: color === "yellow" && "#000000"}}>
          <Button
        type="button" 
        id="yellow" 
        style={{ backgroundColor: "#ffff00"}}
        onClick={handelClick}
        /></Li>
        <Li style={{borderColor: color === "green" && "#000000"}}>
          <Button
        type="button" 
        id="green" 
        style={{ backgroundColor: "#596B46"}}
        onClick={handelClick}
        /></Li>
        <Li style={{borderColor: color === "gray" && "#000000"}}>
          <Button
        type="button" 
        id="gray" 
        style={{ backgroundColor: "#767676"}}
        onClick={handelClick}
        /></Li>
      </Ul>
    </AllDiv>
  )
};