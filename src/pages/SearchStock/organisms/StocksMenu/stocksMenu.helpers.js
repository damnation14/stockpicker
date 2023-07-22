export const getFilteredStocksFromSearch = (stockOptions,searchText) =>{
    const displayOptions = stockOptions
    .filter((stockOption) => 
        (stockOption["1. symbol"].toLowerCase().includes(searchText.toLowerCase())))
    return displayOptions;
}

export const renderOption =(symbol, name) => {
      return (
        <div>
          {`${symbol} - ${name}`}
        </div>
      );
}