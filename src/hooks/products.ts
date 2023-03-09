import React from 'react';
import axios from 'axios';
import { IProduct } from '../models';

export const useProducts = () => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const addProduct = (product: IProduct) => {
    setProducts((prev) => [...prev, product]);
  };

  const fetchProducts = async () => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products?limit=5'
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as { message: 'error 404' };
      setLoading(false);
      setError(error.message);
    }
  };
  React.useEffect(() => {
    fetchProducts();
  }, []);
  return { products, error, loading, addProduct };
};
