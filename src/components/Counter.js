import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { EndPoint } from "./GlobalValues";

export const Counter = ({ resource, idName, idNumber }) => {
  const [amount, setAmount] = useState(0);
  const origin = useContext(EndPoint);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `${origin}/${resource}?${idName}=${idNumber}`
        );
        setAmount(res.data.length);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [resource, idName, idNumber, origin]);

  return <>{amount}</>;
};
