import React, {useContext, useEffect, useRef, useState} from 'react';
import { InputStyled, SubTest} from "../../../App.styled";
import InputGroup from "react-bootstrap/InputGroup";
import {getSign} from "../../util/currency";
import CurrencyInput from "react-currency-input-field";
import {Button} from "react-bootstrap";
import AppContext from "../../contexts/appContext";

const InputCurrency:React.FC = () => {
	const [notification, setNotification] = useState('');
	const refInput = useRef<HTMLInputElement>(null);

	const {
		money,
		activeCurrency,
		currencyAmountInput,
		updateCurrencyAmountInput,
	} = useContext(AppContext);
	const handleOnValueChange = (value: string | undefined): void => {
		const newValue = value;
		if(!newValue){
			updateCurrencyAmountInput('');
			setNotification('');
			return;
		}
		if (+newValue > +money) {
			setNotification('you don\'t have enough money');
		}else {
			setNotification('');
		}
		updateCurrencyAmountInput(newValue);
		if(refInput && refInput.current){
			refInput.current.selectionStart = newValue.length;
		}
	};

	useEffect( () => {
		if(refInput){
			refInput?.current?.focus();
		}
	} );

	return (
		<InputStyled>
			{notification && <SubTest as='span' fs={'14'} className={'small fade alert alert-danger show'}>{' '}{notification}</SubTest>}
			<InputGroup className={'mb-3'}>
				<InputGroup.Prepend>
					<InputGroup.Text>{getSign(activeCurrency)}</InputGroup.Text>
				</InputGroup.Prepend>
				<CurrencyInput
					ref={refInput}
					value={currencyAmountInput}
					decimalSeparator={'.'}
					prefix={"―"}
					maxLength={9}
					onValueChange={handleOnValueChange}
				/>
				<InputGroup.Append>
					<InputGroup.Text id="basic-addon2">
						<Button disabled={!currencyAmountInput || notification.length > 0} variant="success">Exchange</Button>
					</InputGroup.Text>
				</InputGroup.Append>
			</InputGroup>
		</InputStyled>
	);
};

export default InputCurrency;
