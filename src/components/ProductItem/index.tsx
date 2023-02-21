import React from 'react';
import Button from '../Button';
import {
  BackgroundImage,
  CollectionItem,
  Footer,
  Name,
  Price,
  ButtonM,
} from './style';

const ProductItem = ({ imageUrl, price, name, onClick }: any) => {
  return (
    <CollectionItem>
      <BackgroundImage
        style={{
          backgroundImage: `url(https://i.ibb.co/QdJwgmp/brown-cowboy.png)`,
        }}
      />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <ButtonM>
        <Button onClick={onClick}>Add to Cart</Button>
      </ButtonM>
    </CollectionItem>
  );
};

export default ProductItem;
