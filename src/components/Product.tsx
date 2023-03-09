import React from 'react';
import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = React.useState(false);
  const btnClassName = details ? 'bg-yellow-400' : 'bg-blue-400';
  const btnClasses = ['py-2 px-4 border', btnClassName];

  const showDetails = () => {
    setDetails(!details);
  };
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-44" alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold">Price: {product.price}</span>
      <button className={btnClasses.join(' ')} onClick={showDetails}>
        {details ? 'Hide' : 'Show'} Details
      </button>
      {details && (
        <div className="w-96">
          <p className="text-center">{product.description}</p>
          <p className="text-center">Rate: {product?.rating?.rate}</p>
        </div>
      )}
    </div>
  );
};
