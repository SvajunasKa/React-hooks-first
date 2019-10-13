import React from 'react'
import './buttonAsc.scss'
const ButtonASC = (props) => {
	return (
		<button className='btn' onClick={props.clickEvent}>sort by price descent</button>
	)
};

export default ButtonASC