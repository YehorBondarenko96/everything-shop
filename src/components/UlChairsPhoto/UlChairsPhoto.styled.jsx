import styled from "styled-components";

export const AllDiv = styled.div`
height: 100%;
overflow-y: auto;
scrollbar-width: none; 
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
  display: none;
`;

export const Ul = styled.ul`
display: flex;
flex-direction: column;
`;