import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/rootReducer';
import {
  calculateTotalPrice,
  countCartItems,
} from '../../redux/slices/cartSlice';
import { Container, Logo, Option, Options } from './styles';

const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.cart.itemCount);

  useEffect(() => {
    dispatch(countCartItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [count]);
  return (
    <Container>
      <Logo>LOGO</Logo>
      <Options>
        <Option to={'/checkout'}>Checkout {count}</Option>
        <Option to={'/'}>Shop</Option>
      </Options>
    </Container>
  );
};

export default Header;
