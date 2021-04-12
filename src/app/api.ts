import axios from 'axios';
import { APP_ID } from './constants';
const url = 'https://openexchangerates.org/api/';

// A mock function to mimic making an async request for data
export const fetchCurrency = async ({ base='USD', symbols ='EUR,GBP,USD' }: any) => {
	try {
		const response = await axios.get(`${url}latest.json?app_id=${APP_ID}&base=${base}&symbols=${symbols}`);
		return response?.data?.rates;
	}catch (e){
		throw e;
	}
}


