import styled from 'styled-components';

export const Li = styled.li`
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
transition: box-shadow 250ms cubic-bezier(0.25, 0.1, 0.25, 1);

&:hover{
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}
`;

export const DivImage = styled.div`
overflow: hidden;
display: flex;
align-items: center;
`;

export const Image = styled.img`
width: 100%;
object-fit: cover;
`;

export const Title = styled.h3`
margin: 10px;
`;