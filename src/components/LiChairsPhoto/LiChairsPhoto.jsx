import {
  Li,
  Button,
  Img
} from "./LiChairsPhoto.styled";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectScreenWidth, selectTitleImageChair } from "../../redux/selectors";
import { setTitleImage } from "../../redux/slice";

export const LiChairsPhoto = ({ id, photo, alt, ulPhotos, heightUlPhotos }) => {
  const dispatch = useDispatch();
  const realScreenWidth = useSelector(selectScreenWidth);
  const titleImage = useSelector(selectTitleImageChair);

  const buttonRef = useRef(null);
  const liRef = useRef(null);

  const handelClick = () => {
    const selectedParams = {
      id,
      titleImage: photo
    };
    dispatch(setTitleImage(selectedParams));
  };

  useEffect(() => {
    if (liRef.current && buttonRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const li = liRef.current;
      const button = buttonRef.current;

      li.style.width = screenWidth / (coef * 7) + 'px';
      li.style.height = screenWidth / (coef * 7) + 'px';
      li.style.borderRadius = screenWidth / (coef * 70) + 'px';
      button.style.borderRadius = screenWidth / (coef * 70) + 'px';

      if (titleImage === photo) {
        if (ulPhotos && heightUlPhotos > 0) {
          const ulTop = ulPhotos.getBoundingClientRect().top;
          const liTop = li.getBoundingClientRect().top;
          const liHeight = li.offsetHeight;
          const scrollValue = ulPhotos.scrollTop - (heightUlPhotos / 2 - liHeight / 2 + (ulTop - liTop));
          ulPhotos.style.scrollBehavior = 'smooth';
          ulPhotos.scrollTop = scrollValue;
        }
      };
    }
  }, [realScreenWidth, photo, titleImage, ulPhotos, heightUlPhotos]);

  return (
    <Li
      ref={liRef}
      style={{ borderColor: titleImage === photo && '#a7a7a7' }}
    >
      <Button
        ref={buttonRef}
        type="button"
        onClick={handelClick}
      >
        <Img src={photo} alt={alt} />
      </Button>
    </Li>
  )
};