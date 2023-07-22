import {useState, useEffect} from 'react';
import _isEmpty from 'lodash/isEmpty';

// Component
import { Button, InputBase } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import StocksMenu from './organisms/StocksMenu';
import StockDetails from './organisms/StockDetails';

// Styles
import styles from './searchStock.module.css';

// Hooks
import useFetchStockOptions from './hooks/useFetchStockOptions';

const SearchStock = () => {
  const [searchText, setSearchText] = useState("");
const [selectedStock, setSelectedStock] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    setSelectedStock(searchText);
  };

  const { isLoading, isError, stockOptions } = useFetchStockOptions(searchText)

  return (
      <div className={styles.searchBarContainer}>
        <div className={styles.search}>
            <InputBase
              placeholder="SEARCH..."
              classes={{
                 root: styles.inputRoot,
               }}
              onChange={handleSearchChange}
              value={searchText}
            />
            <Button type="button" className={styles.searchIcon} onClick={handleSearch}>
              <SearchIcon onClick={(e) => handleSearch(e)}/>
             </Button>
          </div>
          {!_isEmpty(stockOptions) && <StocksMenu stockOptions={stockOptions} searchText={searchText} setSearchText={setSearchText} />}
          {selectedStock && <StockDetails selectedStock={selectedStock}/>}
      </div>
    
  );
}

export default SearchStock;
