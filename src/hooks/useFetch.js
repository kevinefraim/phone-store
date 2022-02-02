import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (api) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [api]);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(api);
      setData(res.data);
      
    } catch (err) {
      console.warn(err);
    } finally{
      setTimeout(() => {
        setLoading(false)
      }, 400);
    }
  };

  return {
    data,
    loading
  };
};

export default useFetch;