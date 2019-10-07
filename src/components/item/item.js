import React, {useState, useEffect} from 'react'
import './item.scss'
import ButtonASC from '../buttonAsc/buttonAsc'

const Item = (props) =>{

	const [item, setItems] = useState(props.state)

	function sortArrayASC (){
		setItems(item.sort((a, b) => a.actual_price - b.actual_price));
		item.map((val, index) =>{
			//console.log(val.actual_price, index)
		})
	}

	useEffect(() =>{
		setItems(item.sort((a, b) => a.actual_price - b.actual_price));
	});


	const ItemRender = item.map((data, index) =>{
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
	});

	return	(
		<>
			<button onClick={sortArrayASC} >ASC</button>
			{ItemRender}
			</>
	)



};

export default Item

