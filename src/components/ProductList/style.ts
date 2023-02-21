import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  grid-gap: 40px;
  padding: 0 40px;
`;
