import { useEffect, useState, useMemo } from 'react';

const useFetchStockOptions = (searchText) => {
  const [isLoading, setLoaded] = useState(true);
  const [stockOptions, setStockOptions] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchText}&apikey=FIMBI5ZTYGSGFCTB`)
    .then(response => response.json())
    .then(data => setStockOptions(data.bestMatches))
  },[searchText])

  return {
    isLoading,
    isError,
    stockOptions,
  };
};

export default useFetchStockOptions;
