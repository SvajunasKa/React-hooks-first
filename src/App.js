import React, {useState} from 'react';
import './App.css';
import data from './server/data/product_list'
import Item from './components/item/item'
import ButtonASC from './components/buttonAsc/buttonAsc'

export default function App() {

	const [page, setPage] = useState(6);
	const [items, setItems] = useState(data);

	const showMore = () => {
		setPage(page + 5);
		const nextSet = data.slice(page, page + 5);
		setItems(nextSet);
	};

	const showLess = () => {
		setPage(page - 5);
		const prevSet = data.slice(page - 10, page-5);
		setItems(prevSet);
	};

	const sortArrayASC = () => {
		const newItem = Object.assign([], items.sort((a, b) => a.actual_price - b.actual_price));
		setItems(newItem);
	};

	return (
		<>
			<button onClick={showLess}>less</button>
			<ButtonASC clickEvent={sortArrayASC}/>
			<button onClick={showMore}>more</button>
			<Item state={items}/>
		</>
	)

}





