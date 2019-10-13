import React from 'react'
import './buttonAsc.scss'
const ButtonASC = (props) => {
	return (
		<button className='btn' onClick={props.fnSortASC}>sort by price descent</button>
	)
};

export default ButtonASC