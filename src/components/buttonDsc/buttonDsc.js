import React from 'react';
import './buttonDsc.scss';

const ButtonDsc = (props) =>{
	return(
		<button className='btn' onClick={props.fnSortDSC}>sort by price descent</button>
	)
};

export default ButtonDsc;