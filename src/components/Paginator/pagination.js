import React from 'react';
import './paginator.scss';

const Pagination = (props) => {
	return (
		<>
			<div className="buttons-block">
				<button
					className='btn prev'
					onClick={props.fnShowLess}
					disabled={props.page === props.items_per_page}>
				</button>
				<button
					className='btn next'
					onClick={props.fnShowNext}
					disabled={Number(props.items.length / props.page) === 1}>
				</button>
			</div>
		</>
	)
};

export default Pagination
