import React, {useState, useEffect} from 'react';
import './App.css';
import data from './server/data/product_list'
import Item from './components/item/item'
import Pagination from './components/paginator/pagination'

export default function App() {

	//const page = 5;
	const [page, setPage] = useState(6);
	const [state, setState] = useState(data);


	const showMore = () =>{
		const morePage = page + 5;
		setPage(morePage)
	};
	const showLess = () =>{
		const lessPages = page - 5;
		setPage(lessPages)
	};

	function sortArrayASC (){
		console.log('aaa')
		setState(state.sort((a, b) => a.actual_price - b.actual_price));
		state.map((val, index) =>{
			//console.log(val.actual_price, index)
		})
	}

	state.map((val, index) =>{
		//console.log(val.actual_price, index)
	});

	function CreateItem(item) {
		return item.map((data, index) => {
			//	if (index < 50) {
			return (
				<Item
					key={index}
					index={index}
					name={data.product_name}
					brand_name={data.brand_name}
					img={data.filename}
					price={data.actual_price}
				/>
			)
			//}
		});
	}

	return (
		<>
			<button onClick={sortArrayASC}>sortASC</button>
			<Item state = {state} />
			<button onClick={showMore}>more</button>
			<button onClick={showLess}>less</button>

		</>
	)

}





