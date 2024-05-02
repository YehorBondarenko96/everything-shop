import styled from "styled-components";

export const Li = styled.li`
width: calc((100% - 14px)/2);
padding: 1px;
border: 0.5px solid #a7a7a7;
border-radius: 2px;
background-color: #ffffff;

@media(max-width: 700px){
width: calc((100% - 10px)/2);
};
`;

export const Button = styled.button`
width: 100%;
height: 100%;
background-color: transparent;
`;