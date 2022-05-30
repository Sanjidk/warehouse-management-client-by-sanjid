import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-escarpment-19187.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return [items, setItems];
};

export default useItems;
