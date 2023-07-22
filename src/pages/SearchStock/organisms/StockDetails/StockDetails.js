import {useState,useEffect} from 'react';

// Lodash
import _isEmpty from 'lodash/isEmpty';

// Components
import { Menu,MenuItem, Divider } from "@material-ui/core";

 
const StocksMenu = (props) => {
    const {selectedStock} = props;
    const [stock, setStock] = useState();
    useEffect(() => {
        fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${selectedStock}&apikey=FIMBI5ZTYGSGFCTB`)
        .then(response => response.json())
        .then(data => setStock(data))
      },[selectedStock,setStock])

  return (
      <div >
        {stock && stock.Name}
      </div>
    
  );
}

export default StocksMenu;
