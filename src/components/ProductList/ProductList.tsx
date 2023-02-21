import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/rootReducer';
import { Product, fetchProductsStart } from '../../redux/slices/productsSlice';
import { addItem } from '../../redux/slices/cartSlice';
import ProductItem from '../ProductItem';
import { GridContainer } from './style';

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);
  const handleAddToCart = (product: Product) => {
    dispatch(addItem(product));
  };
  return (
    <GridContainer>
      {products.map((product) => (
        <ProductItem
          key={product._id}
          onClick={() => handleAddToCart(product)}
          name={product.title.slice(0, 12)}
          price={product.price}
          imageUrl={product.image}
        />
      ))}
    </GridContainer>
  );
}

export default ProductList;
