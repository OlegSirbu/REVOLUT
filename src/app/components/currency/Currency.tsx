import React, {useState, useEffect, useContext} from 'react';
import Spinner from 'react-bootstrap/Spinner'

import { fetchCurrency } from "../../api";
import CurrencySlider from '../currency-slider/CurrencySlider';
import {Row, Column, Flex, Label, SubLabel, CurrencyWrapper, Text} from '../../../App.styled';
import {getSign, getCurrency, getSymbols} from "../../util/currency";
import InputCurrency from '../input-currency/InputCurrency'
import Dropdown from '../dropdown/Dropdown'
import { TIME_FETCH_CURRENCY } from '../../constants';
import AppContext from "../../contexts/appContext";

const Currency:React.FC = () => {
    const {
        activeCurrency,
        money,
        updateActiveCurrency,
        updateCurrentCurrencyRates
    } = useContext(AppContext);

    const [errors, setErrors] = useState();
    const [loading, setLoading] = useState(true);

    const loadCurrency = async () => {
        try {
            setLoading(true);
            const symbols = getSymbols();
            const rates = await fetchCurrency({base: activeCurrency, symbols });
            updateCurrentCurrencyRates(rates);
            setLoading(false);
        }catch (e) {
            console.error(e);
            setLoading(false);
            setErrors(e);
        }
    }

    useEffect(() => {
        loadCurrency();
        const tick = setInterval(() => {
            loadCurrency()
        }, TIME_FETCH_CURRENCY)
        return () => clearInterval(tick);
    }, [activeCurrency]);

    const handleSelectCurrency = (e: string) => updateActiveCurrency(e);

    if(errors) return (<div>Sorry, API has some problems</div>)
    return (
        <Flex>
            <Text fs={'24'}>
                Revolut exchange
                {loading && <Spinner as={'span'} animation="border" role="status"/>}
                {' '}
                <Dropdown title={`Select currency ${activeCurrency}`} handleSelectCurrency={handleSelectCurrency} />
            </Text>
            <CurrencyWrapper>
                <Row>
                    <Column>
                        <Label>{activeCurrency}</Label>
                        <SubLabel>
                            You have: {' '}
                            {getSign(activeCurrency)}
                            {getCurrency({money, rate: 1})}
                        </SubLabel>
                    </Column>
                    <Column right>
                        <InputCurrency />
                    </Column>
                </Row>
                <CurrencySlider />
            </CurrencyWrapper>
        </Flex>
    );
}

export default Currency;
