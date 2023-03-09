import React from 'react';

interface ErrorMessageProps {
  error: string;
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div>
      <h1 className="text-center text-red-600">{error}</h1>
    </div>
  );
};
