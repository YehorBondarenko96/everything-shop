import styled from "styled-components";

export const DivImages = styled.div`
display: flex;
`;

export const DivListImages = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
`;

export const Button = styled.button`
background-color: transparent;
`;

export const IconButton = styled.svg`
  width: ${(props) => props.size || '20px'};
  height: ${(props) => props.size || '20px'};
  fill: ${(props) => props.color || '#000'};
  display: inline-block;
`;

export const BigImg = styled.img`
height: 100%;
object-fit: cover;
`;