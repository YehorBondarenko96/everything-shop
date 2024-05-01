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
  DivBigImg,
  BigImg,
  DivText,
  TitleChair,
  Price,
  OldPrice,
  PlainText,
  DivDescription,
  TitleDescription,
  DivOptions
} from "./ChairCard.styled";
import { useEffect, useRef } from "react";
import sprite from '../../assets/sprite.svg';
import { UlColorsChair } from "components/UlColorsChair/UlColorsChair";

const ChairCard = () => { 
  const {id} = useParams();
  const chair = useSelector(selectItems).find(item => item.id === id);
  const realScreenWidth = useSelector(selectScreenWidth);


  const divImagesRef = useRef(null);
  const divBigImgRef = useRef(null);
  const divTextRef = useRef(null);
  const titleChairRef = useRef(null);
  const priceRef = useRef(null);
  const titleDescriptionRef = useRef(null);
  const divOptionsRef = useRef(null);

  useEffect(() => {
    if (divImagesRef.current && divTextRef.current && titleChairRef.current && priceRef.current
        && titleDescriptionRef.current && divBigImgRef.current && divOptionsRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const divImages = divImagesRef.current;
      const divBigImg = divBigImgRef.current;
      const divText = divTextRef.current;
      const titleChair = titleChairRef.current;
      const price = priceRef.current;
      const titleDescription = titleDescriptionRef.current;
      const divOptions = divOptionsRef.current;

      divImages.style.height = screenWidth / (coef * 1.5) + 'px';
      divImages.style.gap = screenWidth / (coef * 15) + 'px';
      titleChair.style.fontSize = screenWidth / (coef * 30) + 'px';
      divText.style.padding = `${screenWidth / (coef * 15)}px ${screenWidth / (coef * 21)}px`;
      divText.style.fontSize = screenWidth / (coef * 42) + 'px';
      price.style.fontSize = screenWidth / (coef * 35) + 'px';
      titleDescription.style.marginTop = screenWidth / (coef * 71.8) + 'px';
      divBigImg.style.width = screenWidth / (coef * 1.5) + 'px';
      divOptions.style.marginBottom = screenWidth / (coef * 42) + 'px';
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
          <UlChairsPhoto photos={chair[chair.color].images} title={chair.title} />
          <Button>
            <IconButton>
            <use href={`${sprite}#arrow-down`} />
            </IconButton>
          </Button>
          </DivListImages>
          <DivBigImg ref={divBigImgRef}>
            <BigImg src={ chair[chair.color].titleImage } alt={chair.title} />
          </DivBigImg>
        </DivImages>
        <DivText ref={divTextRef}>
          <TitleChair ref={titleChairRef}>{chair.title}</TitleChair>
          <Price ref={priceRef}><OldPrice>{`${chair.price} UAH`}</OldPrice> {`${chair.newPrice} UAH`}</Price>
          <PlainText>
            {chair.smollDescription}
          </PlainText>
          <DivOptions ref={divOptionsRef}>
            <UlColorsChair id={ id } />
          </DivOptions>
          <DivDescription>
            <TitleDescription ref={titleDescriptionRef}>DESCRIPTION</TitleDescription>
            {chair.description.map((p, index) => <PlainText key={index}>{ p }</PlainText>)}
          </DivDescription>
        </DivText>
        </>
      }
    </Card>
  )
};

export default ChairCard;