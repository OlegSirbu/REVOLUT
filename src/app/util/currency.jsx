export const signs = {
    GBP: '£',
    EUR: '€',
    USD: '$'
};

export const currencies = [
  'EUR',
  'USD',
  'GBP'
];

export const  getSign = (currency) => signs[currency];

export const getCurrency = ({money, rate}) => {
  const moneyFormatted = (typeof money === 'string') ? Number(money?.replace(',','.')) : money;
  return Number(moneyFormatted * rate).toFixed(2);
};

export const getSymbols = () => currencies.join();
