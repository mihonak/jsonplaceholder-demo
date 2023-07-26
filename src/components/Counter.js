import axios from "axios";
import { useEffect, useState } from "react";

export const Counter = ({ url, idName, idNumber }) => {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(url);
      setData(res.data);
      setAmount(data.filter((d) => d[idName] === idNumber).length);
    };
    getData();
  }, [data]);

  return <>{amount}</>;
};
