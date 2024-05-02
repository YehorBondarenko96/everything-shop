import styled from 'styled-components';

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: auto;
  z-index: 2;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #fff;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
`;