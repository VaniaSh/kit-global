import styled from 'styled-components';

export const CollectionItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 470px;
  align-items: center;
  position: relative;
`;
export const BackgroundImage = styled.div`
  width: 100%;
  height: 90%;
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  margin-bottom: 5px;
  ${CollectionItem}:hover & {
    opacity: 0.7;
  }
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Name = styled.p`
  width: 90%;
  text-align: left;
  margin-bottom: 15px;
`;
export const Price = styled.p`
  width: 15%;
`;
export const ButtonM = styled.div`
  position: absolute;
  top: 330px;
  opacity: 0.8;
  display: none;
  ${CollectionItem}:hover & {
    opacity: 0.7;
    display: flex;
  }
`;
