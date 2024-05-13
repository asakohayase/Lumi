import { useEffect, useState } from "react";

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fn();
        setData(response);
      } catch (error) {
        Alert.alert("Error", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data };
};

export default useAppwrite;
