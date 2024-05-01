import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 5px 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: #000;
  transition:
    color 0.3s,
    text-shadow 0.3s;
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '36px'};
  height: ${(props) => props.size || '36px'};
  fill: ${(props) => props.color || '#000'};
  display: inline-block;
  margin-right: 5px;
`;
