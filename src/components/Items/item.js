import React from 'react';
import './item.scss';

function Items(props) {

	const allData = props.state.slice(0, props.items_per_page);

	return (
		<>
			<div className='items-block'>
				{allData.map((data, index) =>
					(
						<div className='item' key={index}>
							<div className='image'>
								<img src={data.filename}/>
							</div>
							<div className='name'>
								{data.product_name}
							</div>
							<div className='brand-name'>
								{data.brand_name}
							</div>
							<div className='price'>
								{data.actual_price}
							</div>
						</div>
					)
				)}
			</div>
		</>
	)
}

export default Items

