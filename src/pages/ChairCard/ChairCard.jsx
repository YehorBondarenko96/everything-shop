import { Card } from "../../components/Card/Card";
import { useSelector } from "react-redux";
import { selectItems, selectScreenWidth } from "../../redux/selectors";
import { useParams } from "react-router-dom";
import { UlChairsPhoto } from "../../components/UlChairsPhoto/UlChairsPhoto";
import {
  DivImages,
  DivListImages,
  Button,
  IconButton,
  BigImg,
  DivText,
  TitleChair
} from "./ChairCard.styled";
import { useEffect, useRef } from "react";
import sprite from '../../assets/sprite.svg';

const ChairCard = () => { 
  const {id} = useParams();
  const chair = useSelector(selectItems).find(item => item.id === id);
  const realScreenWidth = useSelector(selectScreenWidth);


  const divImagesRef = useRef(null);
  const divTextRef = useRef(null);
  const titleChairRef = useRef(null);

  useEffect(() => {
    if (divImagesRef.current && divTextRef.current && titleChairRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const divImages = divImagesRef.current;
      const divText = divTextRef.current;
      const titleChair = titleChairRef.current;

      divImages.style.height = screenWidth / (coef * 1.5) + 'px';
      divImages.style.gap = screenWidth / (coef * 15) + 'px';
      titleChair.style.fontSize = screenWidth / (coef * 30) + 'px';
      divText.style.padding = `${screenWidth / (coef * 15)}px ${screenWidth / (coef * 21)}px`;
    }
  }, [realScreenWidth]);

  return (
    <Card>
      {chair &&
        <>
        <DivImages ref={divImagesRef}>
          <DivListImages>
            <Button>
            <IconButton>
            <use href={`${sprite}#arrow-up`} />
            </IconButton>
          </Button>
          <UlChairsPhoto photos={chair.images} title={chair.title} />
          <Button>
            <IconButton>
            <use href={`${sprite}#arrow-down`} />
            </IconButton>
          </Button>
          </DivListImages>
          <BigImg src={ chair.titleImage } alt={chair.title} />
        </DivImages>
        <DivText ref={divTextRef}>
          <TitleChair ref={titleChairRef}>{ chair.title }</TitleChair>
        </DivText>
        </>
      }
    </Card>
  )
};

export default ChairCard;