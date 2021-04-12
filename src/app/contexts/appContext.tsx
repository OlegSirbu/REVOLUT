import React, { useState}  from 'react';

const initialSettings = {
  money: 100,
  currencyRates: undefined,
  currencyAmountInput: '',
  activeCurrency:'USD',
  updateCurrencyAmountInput: (v: any) => {},
  updateActiveCurrency: (v: any) => {},
  updateCurrentCurrencyRates: (v: any) => {},
};

type AppSettings = {
  money: number;
  currencyRates?: any;
  currencyAmountInput: string;
  updateCurrencyAmountInput: (v:any) => void;
  activeCurrency: string;
  updateActiveCurrency: (v:string) => void;
  updateCurrentCurrencyRates: (v:any) => void;
};

const AppContext = React.createContext<AppSettings>({
  ...initialSettings
});

export const AppProvider:React.FC = ({ children }) => {
  const [currencyRates, setCurrentCurrencyRates] = useState(initialSettings?.currencyRates);
  const [currencyAmountInput, setCurrencyAmountInput] = useState(initialSettings?.currencyAmountInput);
  const [activeCurrency, setActiveCurrency] = useState(initialSettings?.activeCurrency);

  const updateCurrentCurrencyRates = (values: any) => {
    return setCurrentCurrencyRates(values);
  };

  const updateCurrencyAmountInput = (value: string) => {
    return setCurrencyAmountInput(value);
  }

  const updateActiveCurrency = (currency: string) => {
    return setActiveCurrency(currency)
  }
  return (
    <AppContext.Provider
      value={{
        money: initialSettings.money,
        currencyAmountInput,
        updateCurrencyAmountInput,
        activeCurrency,
        updateActiveCurrency,
        currencyRates,
        updateCurrentCurrencyRates
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppConsumer = AppContext.Consumer;

export default AppContext;
