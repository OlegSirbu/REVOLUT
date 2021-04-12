import React, {useContext} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { SliderStyled } from '../../../App.styled'
import CurrencySliderItem from './CurrencySliderItem';
import AppContext from "../../contexts/appContext";

const CurrencySlider:React.FC = () => {
  const { currencyRates } = useContext(AppContext);
    return (
        <SliderStyled>
            <Carousel interval={null}>
                {currencyRates && Object.entries(currencyRates).map(([key, value]: any) =>  (
                    <Carousel.Item key={key}>
                        <CurrencySliderItem
                            currency={key}
                            currencyRate={value}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </SliderStyled>
    );
}

export default CurrencySlider;
