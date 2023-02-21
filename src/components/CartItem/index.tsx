import React, { useEffect } from 'react';
import { calculateTotalPrice } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { Arrow, CheckoutC, ContainerInfo, Quantity, ImageC } from './style';

const CartItem = ({ item, inc, dec, quantity, remove }: any) => {
  const { title, price } = item; //cant render image here (bad API )
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [dec, inc]);

  return (
    <CheckoutC>
      <ImageC>
        <img
          style={{ width: '100%', height: '100%' }}
          src={'https://i.ibb.co/QdJwgmp/brown-cowboy.png'}
          alt=""
        />
      </ImageC>
      <ContainerInfo>{title.slice(0, 19)}</ContainerInfo>
      <ContainerInfo>
        <Arrow onClick={dec}> - </Arrow>
        <Quantity>{quantity}</Quantity>
        <Arrow onClick={inc}> + </Arrow>
      </ContainerInfo>
      <ContainerInfo>{price}</ContainerInfo>
      <h3 style={{ cursor: 'pointer' }} onClick={remove}>
        x
      </h3>
    </CheckoutC>
  );
};

export default CartItem;
