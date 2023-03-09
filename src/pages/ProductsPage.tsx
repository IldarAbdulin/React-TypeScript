import React from 'react';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Product } from '../components/Product';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { ModalContext } from '../context/ModalContext';

export const ProductPage = () => {
  const { error, loading, products, addProduct } = useProducts();
  const { modal, open, close } = React.useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {error ? (
        <ErrorMessage error={error} />
      ) : loading ? (
        <Loader />
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      )}
      {modal && (
        <Modal onClose={close} title="Create new product">
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        onClick={open}
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4"
      >
        +
      </button>
    </div>
  );
};
