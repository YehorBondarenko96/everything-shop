import styled from 'styled-components';

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: auto;
  z-index: 2;
`;

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  margin: 40px 20px;
  border-radius: 10px;
  background-color: #fff;
  position: relative;
`;