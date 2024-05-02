import {
  Li,
  DivImage,
  Image,
  Title
} from "./PreviewCard.styled";
import { useSelector } from "react-redux";
import { selectScreenWidth } from "../../redux/selectors";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const PreviewCard = ({ item }) => { 

  const realScreenWidth = useSelector(selectScreenWidth);

  const liRef = useRef(null);
  const divImageRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (liRef.current && divImageRef.current && titleRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const li = liRef.current;
      const divImage = divImageRef.current;
      const title = titleRef.current;

      li.style.width = screenWidth / (coef * 2) + 'px';
      li.style.height = screenWidth / (coef * 1.3) + 'px';
      li.style.borderRadius = screenWidth / (coef * 50) + 'px';

      divImage.style.borderRadius = `${screenWidth / (coef * 50)}px ${screenWidth / (coef * 50)}px 0 0`;
      divImage.style.height = screenWidth / (coef * 2) + 'px';
      divImage.style.marginBottom = screenWidth / (coef * 25) + 'px';
      title.style.fontSize = screenWidth / (coef * 25) + 'px';
    }
  }, [realScreenWidth]);
  
  return (
    <Link to={`${item.to}/${item.id}`}>
    <Li ref={liRef}>
      <DivImage ref={divImageRef}>
        <Image src={item[item.color].titleImage} />
      </DivImage>
      <Title ref={titleRef}>
        {item.title}
      </Title>
      </Li>
    </Link>
  )
};
