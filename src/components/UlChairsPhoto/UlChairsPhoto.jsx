import {
  AllDiv,
  Ul
} from "./UlChairsPhoto.styled";
import { LiChairsPhoto } from "../LiChairsPhoto/LiChairsPhoto";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectScreenWidth } from "../../redux/selectors";

export const UlChairsPhoto = ({ id, photos, title }) => {
  const realScreenWidth = useSelector(selectScreenWidth);


  const ulRef = useRef(null);

  useEffect(() => {
    if (ulRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const ul = ulRef.current;

      ul.style.gap = screenWidth / (coef * 50) + 'px';
    }
  }, [realScreenWidth]);

  return (
    <AllDiv>
      <Ul ref={ulRef}>
      {photos &&
        photos.map(photo => <LiChairsPhoto key={photo} id={id} photo={photo} alt={title} />)
      }
    </Ul>
    </AllDiv>
  )
};