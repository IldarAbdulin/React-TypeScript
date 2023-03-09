import axios from 'axios';
import React from 'react';
import { IProduct } from '../models';
import { ErrorMessage } from './ErrorMessage';

const productData: IProduct = {
  title: '',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      setError('Please enter valid title.');
      return;
    }
    productData.title = value;
    const response = await axios.post<IProduct>(
      `https://fakestoreapi.com/products`,
      productData
    );
    onCreate(response.data);
  };
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border py-2 px-4 mb-2 w-full outline-none"
        type="text"
        value={value}
        onChange={changeValue}
        placeholder="Enter product title"
      />
      {error && <ErrorMessage error={error} />}
      <button type="submit" className="py-2 px-4 border bg-yellow-400">
        Create
      </button>
    </form>
  );
};
