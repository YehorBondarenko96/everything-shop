import styled from "styled-components";

export const Li = styled.li`
wigth: 100%;
height: 100%;
position: relative;
`;

export const LiAfter = styled.div`
  content: "";
  position: absolute;
  width: 70%;
  height: 4px;
  border-radius: 2px;
  background: #31407f;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

export const Button = styled.button`
width: 100%;
height: 100%;
border: 0;
`;

export const Img = styled.img`
width: 100%;
max-width: 80px;
object-fit: cover;
`;