import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from '../../assets/sprite.svg';

export const Header = () => {

  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/first">
          <IconWrapper>
            <use href={`${sprite}#bag`} />
          </IconWrapper>
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
