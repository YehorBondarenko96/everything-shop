import { Card } from "../../components/Card/Card";
import {
  DivImgButtons,
  DivBigImg,
  BigImg,
  DivInfo,
  TitleSection,
  TitleShoes,
  DivPrice,
  Price,
  PriceInfo
} from "./ShoesCard.styled";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { selectItems, selectScreenWidth } from "../../redux/selectors";
import { UlButtonsShoes } from "components/UlButtonsShoes/UlButtonsShoes";
import { UlColorsShoes } from "components/UlColorsShoes/UlColorsShoes";

const ShoesCard = () => { 
  const dispatch = useDispatch();
  const { id } = useParams();
  const shoes = useSelector(selectItems).find(item => item.id === id);
  const realScreenWidth = useSelector(selectScreenWidth);

  const divBigImgRef = useRef(null);
  const bigImgRef = useRef(null);
  const divInfoRef = useRef(null);
  const priceRef = useRef(null);
  const priceInfoRef = useRef(null);

  useEffect(() => {
    if (divBigImgRef.current && bigImgRef.current && divInfoRef.current
        && priceRef.current && priceInfoRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const divBigImg = divBigImgRef.current;
      const bigImg = bigImgRef.current;
      const divInfo = divInfoRef.current;
      const price = priceRef.current;
      const priceInfo = priceInfoRef.current;

      divBigImg.style.width = screenWidth / (coef * 1) + 'px';
      divBigImg.style.marginBottom = screenWidth / (coef * 25) + 'px';
      bigImg.style.height = screenWidth / (coef * 1.2) + 'px';
      divInfo.style.width = screenWidth / (coef * 1.1) + 'px';
      divInfo.style.paddingLeft = screenWidth / (coef * 25) + 'px';
      price.style.fontSize = screenWidth / (coef * 20) + 'px';
      priceInfo.style.fontSize = screenWidth / (coef * 36) + 'px';
    }
  }, [realScreenWidth])

  return (
    <Card>
      <DivImgButtons>
        <DivBigImg ref={divBigImgRef}>
          <BigImg
            ref={bigImgRef}
            src={shoes[shoes.color].titleImage}
            alt={shoes.title.toLowerCase()}
          />
        </DivBigImg>
        <UlButtonsShoes id={id} />
      </DivImgButtons>
      <DivInfo ref={divInfoRef}>
        <TitleSection>Men's Shoes</TitleSection>
        <TitleShoes>{shoes.title}</TitleShoes>
        <DivPrice>
          <Price ref={priceRef}>&#8372; {shoes.price}</Price>
          <PriceInfo ref={priceInfoRef}>(Inclusive of all Taxes)</PriceInfo>
        </DivPrice>
        <UlColorsShoes id={id} />
      </DivInfo>
    </Card>
  )
};

export default ShoesCard;