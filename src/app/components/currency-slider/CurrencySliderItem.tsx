import React, {useContext} from 'react';
import { Column, Row, Text } from "../../../App.styled";
import { getCurrency, getSign } from "../../util/currency";
import AppContext from "../../contexts/appContext";

type CurrencySlider = {
    currency: string;
    currencyRate: string;
};

const CurrencySliderItem:React.FC<CurrencySlider> = ({currency, currencyRate }) => {
    const { currencyAmountInput, money, activeCurrency } = useContext(AppContext);
    const rateFromTo = Number(1 / +currencyRate).toFixed(2);

    return (
        <Row>
            <Column>
                <Text fs={24}>
                    {currency}
                </Text>
                <Text fs={14}>
                    you have {' '}
                    {getSign(currency)}
                    {activeCurrency === currency ? money : getCurrency({money, rate: currencyRate})}
                </Text>
            </Column>
            <Column right>
                <Text fs={24} bottom={!currencyAmountInput}>
                    {currencyAmountInput
                        ? `+${getCurrency({money: currencyAmountInput, rate: currencyRate})}`
                        : ''
                    }
                </Text>
                <Text fs={14} bottom>
                    {getSign(currency)}
                    1 = {getSign(activeCurrency)}
                    {activeCurrency === currency ? 1 : rateFromTo}
                </Text>
            </Column>
        </Row>
    )
};

export default CurrencySliderItem;
