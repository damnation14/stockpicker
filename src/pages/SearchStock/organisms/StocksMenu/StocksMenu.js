import {useState} from 'react';

// Lodash
import _isEmpty from 'lodash/isEmpty';

// Components
import { Menu,MenuItem, Divider } from "@material-ui/core";

// Helpers
import { renderOption, getFilteredStocksFromSearch } from './stocksMenu.helpers';

const makeStocksMenu = (stockOptions, searchText,setSearchText) => {
    const handleOptionClick = (e) => {
        setSearchText(e.target.innerText)
      };
    if(_isEmpty(stockOptions)){
    return (
        <div key={0}>
          <MenuItem>
              {"No matches found"}
          </MenuItem>
          <Divider  />
        </div>
      );
    }

    const stockOptionsMenu = stockOptions.map((stockOption, index) => {
        return (
          <div key={index}>
            <MenuItem onClick={(e) => handleOptionClick(e)}>
                {renderOption(stockOption["1. symbol"], stockOption["2. name"])}
            </MenuItem>
            <Divider  />
          </div>
        );
      })
      return stockOptionsMenu;
}

const StocksMenu = (props) => {
    const {stockOptions, searchText,setSearchText} = props;

  return (
      <div >
        {makeStocksMenu(stockOptions, searchText,setSearchText)}
      </div>
    
  );
}

export default StocksMenu;
