import React from 'react';
import DD from "react-bootstrap/Dropdown";
import { currencies } from '../../util/currency';

type DropdownType = {
	title: string;
	handleSelectCurrency: (v: any) => void;
}

const Dropdown:React.FC<DropdownType> = ({ title, handleSelectCurrency }) => (
	<DD onSelect={handleSelectCurrency}>
		<DD.Toggle variant="success" id="dropdown-basic">
			{title}
		</DD.Toggle>
		<DD.Menu>
			{currencies.map((currency) => (
				<DD.Item as="button" key={currency} eventKey={currency}>{currency}</DD.Item>)
			)}
		</DD.Menu>
	</DD>
);

export default Dropdown;
