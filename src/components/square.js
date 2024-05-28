import { useState } from 'react';
import './square.css'

export default function Square() {
	function handleClick() {
		setValue('X');
	}

	const [value, setValue] = useState(' ');

	return <button className="square" onClick={handleClick}>{value}</button>
}