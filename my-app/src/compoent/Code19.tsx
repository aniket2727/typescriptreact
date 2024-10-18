import React from 'react';
import useCustomHookProgram from './Code20';

const ProductDetailsComponent = () => {
  const { data, loading, error } = useCustomHookProgram();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred while fetching data.</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
    </div>
  );
};

export default ProductDetailsComponent;
