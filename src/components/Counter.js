import { useEffect, useState } from "react";
import axios from "axios";

export const Counter = ({ resource, idName, idNumber }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://${window.location.hostname}:3003/${resource}?${idName}=${idNumber}`
      );
      setAmount(res.data.length);
    };
    getData();
  }, [resource, idName, idNumber]);

  return <>{amount}</>;
};
