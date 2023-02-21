import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/rootReducer';
import {
  calculateTotalPrice,
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from '../../redux/slices/cartSlice';
import CartItem from '../../components/CartItem';

const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;
const CheckoutBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;
const Total = styled.div`
  font-size: 40px;
`;
const CheckoutPage = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const cart = useSelector((state: RootState) => state.cart.items);

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const increase = (id: number) => {
    dispatch(increaseQuantity(id));
  };
  const decrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };
  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [dispatch]);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutBlock>
          <span>PRODUCT</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>DESCRIPTION</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>QUANTITY</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>PRICE</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>REMOVE</span>
        </CheckoutBlock>
      </CheckoutHeader>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.product._id}
              dec={() => decrease(item.product._id)}
              inc={() => increase(item.product._id)}
              item={item.product}
              quantity={item.quantity}
              remove={() => handleRemoveItem(item.product._id)}
            />
          ))}
        </>
      )}
      <Total>Total: ${totalPrice}</Total>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
