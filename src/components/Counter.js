import { useEffect, useState } from "react";
import axios from "axios";

export const Counter = ({ resource, idName, idNumber }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}?${idName}=${idNumber}`
        );
        setAmount(res.data.length);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [resource, idName, idNumber]);

  return <>{amount}</>;
};
