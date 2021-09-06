import React from 'react';
import useTable from '../hooks/useTable';
import Table from '../components/Table';
import Filters from '../components/Filters';
import filterProduct from '../utils/filterProduct';
import sortProduct from '../utils/sortProduct';
import Pagination from '../components/Pagination';

const Products = () => {
	const { loading, pages, items, setCurrentPage, filter, sort } = useTable(
		'./data/products.json',
		30
	);

	const paginate = (currentPage: number) => setCurrentPage(currentPage);

	return (
		<div>
			{loading && <p>loading...</p>}
			<Filters
				onFilter={(filters) => {
					filter(filterProduct(filters));
				}}
			/>

			{/* `useTable` hook provides `pages`, `currentPage` and `setCurrentPage` handler */}
			{/* todo: use above elements to create a functional pagination system */}

			{/* todo: implement sort feature for each column */}

			<Table
				onSort={(order) => {
					sort(sortProduct(order));
				}}
				data={items}
				// todo: add `quantity` column at the end of the table
				columns={[
					{
						name: 'id',
						description: '#',
						width: 84,
					},
					{
						name: 'name',
						description: 'Product',
					},
					{
						name: 'price',
						description: 'Price',
						width: 100,
					},
					{
						name: 'quantity',
						description: 'Quantity',
						width: 150,
					},
				]}
			/>
			<br />
			<Pagination pages={pages} paginate={paginate} />
		</div>
	);
};

export default Products;
