import { Card } from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { setOrderItems, setTitleImage } from "../../redux/slice";
import { selectItems, selectScreenWidth } from "../../redux/selectors";
import { useParams } from "react-router-dom";
import { UlChairsPhoto } from "../../components/UlChairsPhoto/UlChairsPhoto";
import {
  DivImages, DivListImages, Button, IconButton, DivBigImg, BigImg, DivText, TitleChair,
  Price, OldPrice, PlainText, DivDescription, TitleDescription, DivOptions, DivQuantityShopButton,
  ShopButton
} from "./ChairCard.styled";
import { useState, useEffect, useRef } from "react";
import sprite from '../../assets/sprite.svg';
import { UlColorsChair } from "components/UlColorsChair/UlColorsChair";
import { UlSizesChair } from "components/UlSizesChair/UlSizesChair";
import { QuantityInput } from "components/QuantityInput/QuantityInput";

const ChairCard = () => { 
  const dispatch = useDispatch();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const chair = useSelector(selectItems).find(item => item.id === id);
  const realScreenWidth = useSelector(selectScreenWidth);


  const divImagesRef = useRef(null);
  const divBigImgRef = useRef(null);
  const divTextRef = useRef(null);
  const titleChairRef = useRef(null);
  const priceRef = useRef(null);
  const titleDescriptionRef = useRef(null);
  const divOptionsRef = useRef(null);
  const shopButtonRef = useRef(null);

  const handleClick = () => { 
    const dataForOrder = {
      id,
      price: chair.newPrice ? chair.newPrice : chair.price,
      title: chair.title,
      color: chair.color,
      size: chair.size.selectedSize,
      quantity
    };
    dispatch(setOrderItems(dataForOrder));
  };

  const handleClickArrowUp = () => { 
    const arrImages = chair[chair.color].images;
    const titleImage = chair[chair.color].titleImage;
    const indexTitleImage = arrImages.indexOf(titleImage);
    if (indexTitleImage > 0) {
      const nextImage = arrImages[indexTitleImage - 1];
      const dataForSetTitImage = {
        id,
        titleImage: nextImage
      };
      dispatch((setTitleImage(dataForSetTitImage)));
    }
  };

  const handleClickArrowDown = () => { 
    const arrImages = chair[chair.color].images;
    const titleImage = chair[chair.color].titleImage;
    const indexTitleImage = arrImages.indexOf(titleImage);
    if (indexTitleImage < arrImages.length - 1) {
      const nextImage = arrImages[indexTitleImage + 1];
      const dataForSetTitImage = {
        id,
        titleImage: nextImage
      };
      dispatch((setTitleImage(dataForSetTitImage)));
    }
  };

  useEffect(() => {
    if (divImagesRef.current && divTextRef.current && titleChairRef.current && priceRef.current
      && titleDescriptionRef.current && divBigImgRef.current && divOptionsRef.current
      && shopButtonRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const divImages = divImagesRef.current;
      const divBigImg = divBigImgRef.current;
      const divText = divTextRef.current;
      const titleChair = titleChairRef.current;
      const price = priceRef.current;
      const titleDescription = titleDescriptionRef.current;
      const divOptions = divOptionsRef.current;
      const shopButton = shopButtonRef.current;

      divImages.style.height = screenWidth / (coef * 1.5) + 'px';
      divImages.style.gap = screenWidth / (coef * 15) + 'px';
      titleChair.style.fontSize = screenWidth / (coef * 30) + 'px';
      divText.style.padding = `${screenWidth / (coef * 15)}px ${screenWidth / (coef * 21)}px`;
      divText.style.fontSize = screenWidth / (coef * 42) + 'px';
      price.style.fontSize = screenWidth / (coef * 35) + 'px';
      titleDescription.style.marginTop = screenWidth / (coef * 71.8) + 'px';
      divBigImg.style.width = screenWidth / (coef * 1.5) + 'px';
      divOptions.style.marginBottom = screenWidth / (coef * 42) + 'px';
      divOptions.style.gap = screenWidth / (coef * 42) + 'px';
      divOptions.style.width = screenWidth / (coef * 1.4) + 'px';
      shopButton.style.height = screenWidth / (coef * 18) - 1 + 'px';
      shopButton.style.borderRadius = screenWidth / (coef * 150) + 'px';
      shopButton.style.fontSize = screenWidth / (coef * 40) + 'px';
    }
  }, [realScreenWidth]);

  return (
    <Card coefForHeight={0.8}>
      {chair &&
        <>
        <DivImages ref={divImagesRef}>
          <DivListImages>
            <Button
              type="button"
              onClick={handleClickArrowUp}
            >
            <IconButton>
            <use href={`${sprite}#arrow-up`} />
            </IconButton>
          </Button>
          <UlChairsPhoto id={id} photos={chair[chair.color].images} title={chair.title.toLowerCase()} />
            <Button
              type="button"
              onClick={handleClickArrowDown}
            >
            <IconButton>
            <use href={`${sprite}#arrow-down`} />
            </IconButton>
          </Button>
          </DivListImages>
          <DivBigImg ref={divBigImgRef}>
            <BigImg src={ chair[chair.color].titleImage } alt={chair.title.toLowerCase()} />
          </DivBigImg>
        </DivImages>
        <DivText ref={divTextRef}>
          <TitleChair ref={titleChairRef}>{chair.title}</TitleChair>
          <Price ref={priceRef}><OldPrice>{`${chair.price} UAH`}</OldPrice> {`${chair.newPrice} UAH`}</Price>
          <PlainText>
            {chair.smollDescription}
          </PlainText>
          <DivOptions ref={divOptionsRef}>
            <UlColorsChair id={id} />
            <UlSizesChair id={id} />
            <DivQuantityShopButton>
              <QuantityInput quantity={quantity} setQuantity={setQuantity}/>
              <ShopButton
                ref={shopButtonRef}
                type="button"
                onClick={handleClick}
              >
                ORDER
              </ShopButton>
            </DivQuantityShopButton>
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