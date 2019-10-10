import React from 'react'
import './item.scss'

function Item(props){

	const allData = props.state.slice(0, 5);

	return (
		<>
			{allData.map((data, index) =>
				 (
					<div className='item' key={index}>
						<div className='name'>
							brand name:
							{data.brand_name}
						</div>
						<div className='price'>
							price:
							{data.actual_price}
						</div>
						<div className='price'>
							id:
							{data.id}
						</div>
						<div className='image'>
							{/*{<img src={props.img}/>}*/}
						</div>
					</div>
				)
			)}
		</>
	)
}

export default Item

