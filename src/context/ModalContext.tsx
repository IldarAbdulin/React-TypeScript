import React from 'react';

interface IModalContext {
  modal: boolean;
  open: () => void;
  close: () => void;
}

export const ModalContext = React.createContext<IModalContext>({
  modal: false,
  open: () => {},
  close: () => {},
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = React.useState(false);
  const open = () => setModal(true);
  const close = () => setModal(false);

  const value = {
    modal,
    open,
    close,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
