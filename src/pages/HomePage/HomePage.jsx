import { PreviewCard } from "../../components/PreviewCard/PreviewCard";
import { CardsUl } from "./HomePage.styled";
import { useSelector } from "react-redux";
import { selectItems, selectScreenWidth } from "../../redux/selectors";
import { useEffect, useRef } from "react";

export const HomePage = () => { 
  const items = useSelector(selectItems);
  const realScreenWidth = useSelector(selectScreenWidth);

  const ulRef = useRef(null);

  useEffect(() => {
    if (ulRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const ul = ulRef.current;

      ul.style.gap = screenWidth / (coef * 25) + 'px';
      ul.style.margin = screenWidth / (coef * 50) + 'px';

    }
  }, [realScreenWidth]);

  return (
    <>
      <CardsUl ref={ulRef}>
        {items.length > 0 && items.map(item => <PreviewCard key={item.id} item={item}/>)}
      </CardsUl>
    </>
  )
};