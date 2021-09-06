import React from 'react';
import { PaginationProps } from '../types';

const Pagination = ({ pages, paginate }: PaginationProps) => {
	const pageNumbers = [];

	for (let i = 0; i < pages; i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className='pagination'>
				{pageNumbers.map((number) => (
					<li key={number} className='page-item'>
						<a onClick={() => paginate(number)} href='!#' className='page-link'>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
