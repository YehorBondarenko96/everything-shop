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
  PriceInfo,
  DivDropLists
} from "./ShoesCard.styled";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { selectItems, selectScreenWidth } from "../../redux/selectors";
import { UlButtonsShoes } from "components/UlButtonsShoes/UlButtonsShoes";
import { UlColorsShoes } from "components/UlColorsShoes/UlColorsShoes";
import { SizeShose } from "components/SizeShose/SizeShose";

const ShoesCard = () => { 
  const dispatch = useDispatch();
  const { id } = useParams();
  const shoes = useSelector(selectItems).find(item => item.id === id);
  const realScreenWidth = useSelector(selectScreenWidth);

  const divBigImgRef = useRef(null);
  const bigImgRef = useRef(null);
  const divInfoRef = useRef(null);
  const divPriceRef = useRef(null);
  const priceRef = useRef(null);
  const priceInfoRef = useRef(null);
  const titleSectionRef = useRef(null);
  const titleShoesRef = useRef(null);
  const divDropListsRef = useRef(null);

  useEffect(() => {
    if (divBigImgRef.current && bigImgRef.current && divInfoRef.current
      && priceRef.current && priceInfoRef.current && titleSectionRef.current
      && titleShoesRef.current && divPriceRef.current && divDropListsRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const divBigImg = divBigImgRef.current;
      const bigImg = bigImgRef.current;
      const divInfo = divInfoRef.current;
      const divPrice = divPriceRef.current;
      const price = priceRef.current;
      const priceInfo = priceInfoRef.current;
      const titleSection = titleSectionRef.current;
      const titleShoes = titleShoesRef.current;
      const divDropLists = divDropListsRef.current;

      divBigImg.style.width = screenWidth / (coef * 1) + 'px';
      divBigImg.style.marginBottom = screenWidth / (coef * 25) + 'px';
      bigImg.style.height = screenWidth / (coef * 1.2) + 'px';
      divInfo.style.width = screenWidth / (coef * 1.1) + 'px';
      divInfo.style.paddingLeft = screenWidth / (coef * 25) + 'px';
      divPrice.style.marginBottom = screenWidth / (coef * 18) + 'px';
      price.style.fontSize = screenWidth / (coef * 20) + 'px';
      priceInfo.style.fontSize = screenWidth / (coef * 36) + 'px';
      titleSection.style.fontSize = screenWidth / (coef * 36) + 'px';
      titleShoes.style.fontSize = screenWidth / (coef * 16) + 'px';
      titleShoes.style.marginBottom = screenWidth / (coef * 72) + 'px';
      divDropLists.style.marginTop = screenWidth / (coef * 18) + 'px';

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
        <TitleSection ref={titleSectionRef}>Men's Shoes</TitleSection>
        <TitleShoes ref={titleShoesRef}>{shoes.title}</TitleShoes>
        <DivPrice ref={divPriceRef}>
          <Price ref={priceRef}>&#8372; {shoes.price}</Price>
          <PriceInfo ref={priceInfoRef}>(Inclusive of all Taxes)</PriceInfo>
        </DivPrice>
        <UlColorsShoes id={id} />
        <DivDropLists ref={divDropListsRef}>
          <SizeShose pButtons='Size' id={id} firstParam='size' secondParam='sizes'/>
        </DivDropLists>
      </DivInfo>
    </Card>
  )
};

export default ShoesCard;