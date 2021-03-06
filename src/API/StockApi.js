import axios from 'axios';

// const STOCK_API_BASE_URL = "http://15.165.161.92:8000/stock";
const STOCK_API_BASE_URL = "http://localhost:8000/stock";

class StockAPI {

    selectByStockId(stockId) {
        return axios.get(STOCK_API_BASE_URL + '/' + stockId);
    }

    selectByAllStocks(){
        return axios.get(STOCK_API_BASE_URL + '/' + "StocksList")
    }
 
}

export default new StockAPI();