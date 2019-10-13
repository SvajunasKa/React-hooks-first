import React, {useState} from 'react';
import './App.scss';
import data from './server/data/product_list'
import Header from './components/Header/header'
import Items from './components/Items/item'
import ButtonASC from './components/ButtonAsc/buttonAsc'
import ButtonDSC from './components/buttonDsc/buttonDsc'
import Pagination from './components/Paginator/pagination'

export default function App() {
	const items_per_page = 8;
	const [page, setPage] = useState(items_per_page);
	const [items, setItems] = useState(data);

	const showMore = () => {
		setPage(page + items_per_page);
		const nextSet = data.slice(page, page + items_per_page);
		setItems(nextSet);
	};

	const showLess = () => {
		setPage(page - items_per_page);
		const prevSet = data.slice(page - 2 * items_per_page, page - items_per_page);
		setItems(prevSet);
	};

	const sortArrayASC = () => {
		const newItem = Object.assign([], items.sort((a, b) => a.actual_price - b.actual_price));
		setItems(newItem);
	};

	const sortArrayDSC = () =>{
		const newItem = Object.assign([], items.sort((a, b) => b.actual_price - a.actual_price));
		setItems(newItem);
	};

	return (
		<>
			<div className="container">
				<Header/>
				<aside>
					<ButtonASC
					clickEvent={sortArrayASC}
				/>
					<ButtonDSC
						fnSortDSC={sortArrayDSC}
					/>
				</aside>
				<main>
					<Items
						state={items}
						items_per_page={items_per_page}
					/>
				</main>
				<Pagination
					fnShowNext={showMore}
					fnShowLess={showLess}
					page={page}
					items={items}
					items_per_page={items_per_page}
				/>
			</div>
		</>
	)

}





