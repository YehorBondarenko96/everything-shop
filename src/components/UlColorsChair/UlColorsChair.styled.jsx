import styled from "styled-components";

export const AllDiv = styled.div``;

export const TitleColors = styled.p``;

export const Ul = styled.ul`
display: flex;
gap: 14px;

@media(max-width: 700px){
  gap: 10px;
}
`;

export const Li = styled.li`
width: 18px;
height: 18px;
padding: 1px;
border: 0.5px solid transparent;

@media(max-width: 700px){
  width: 12px;
  height: 12px;
}
`;

export const Button = styled.button`
width: 100%;
height: 100%;
`;