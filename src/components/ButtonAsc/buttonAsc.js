import React from 'react'
import './buttonAsc.scss'
const ButtonASC = (props) => {
	return (
		<button className='btn' onClick={props.fnSortASC}>Sort by price ascent</button>
	)
};

export default ButtonASC