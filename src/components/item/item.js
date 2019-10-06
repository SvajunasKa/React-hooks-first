import React from 'react'
import './item.scss'

const Item = (props) =>{
	return	props.state.map((data, index) =>{
		return(
			<div className='item'  key={index}>
				<div className='name'>
					brand name:
					{data.brand_name}
				</div>
				<div className='price'>
					price:
					{data.actual_price}
				</div>
				<div className='image'>
					{/*{<img src={props.img}/>}*/}
				</div>

			</div>
		)
	})



};

export default Item

