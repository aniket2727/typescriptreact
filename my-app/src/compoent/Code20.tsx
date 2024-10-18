import { useState, useEffect } from 'react';

// Define the shape of the object based on the expected response from the API
interface MyObject {
  id: number;
  title: string;
  price: number;
  description: string;
}

const useCustomHookProgram = () => {
  const [data, setData] = useState<MyObject | null>(null); // It holds a single object or null
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products/1');
        if (!response.ok) {
          throw new Error('Error in fetching data');
        }
        const result = await response.json();
        setData(result); // Since it's a single object, not an array
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log('The error is ', error);
      }
    };

    fetchData();
  }, []); // Dependency array ensures data refetch when `productId` changes

  // Return the data, error, and loading status from the hook
  return { data, loading, error };
};

export default useCustomHookProgram;
