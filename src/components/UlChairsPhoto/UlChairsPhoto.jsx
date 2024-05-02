import {
  AllDiv,
  Ul
} from "./UlChairsPhoto.styled";
import { LiChairsPhoto } from "../LiChairsPhoto/LiChairsPhoto";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectScreenWidth } from "../../redux/selectors";

export const UlChairsPhoto = ({ id, photos, title }) => {
  const [heightAllDiv, setHeightAllDiv] = useState(0);
  const realScreenWidth = useSelector(selectScreenWidth);

  const allDivRef = useRef(null);
  const ulRef = useRef(null);

  useEffect(() => {
    if (allDivRef.current && ulRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const allDiv = allDivRef.current;
      const ul = ulRef.current;

      ul.style.gap = screenWidth / (coef * 50) + 'px';
      setTimeout(() => {
        setHeightAllDiv(allDiv.offsetHeight);
      }, 0);

    }
  }, [realScreenWidth]);

  return (
    <AllDiv ref={allDivRef}>
      <Ul ref={ulRef} className="ulPhotos">
      {photos &&
          photos.map(photo => <LiChairsPhoto
            key={photo}
            id={id}
            photo={photo}
            alt={title}
            ulPhotos={allDivRef.current}
            heightUlPhotos={heightAllDiv}
          />)
      }
    </Ul>
    </AllDiv>
  )
};