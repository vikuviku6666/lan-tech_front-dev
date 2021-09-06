import React, { useCallback, useState } from 'react';
import { Dict, FilterProps } from '../types';

const Filters = ({ onFilter }: FilterProps) => {
	const [filters, setFilters] = useState<Dict>({});

	const getValue = useCallback(
		(name: string): any => {
			return filters[name] || '';
		},
		[filters]
	);

	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>): void => {
			setFilters({
				...filters,
				[event.target.name]: event.target.value,
			});
		},
		[filters, setFilters]
	);

	const handleFilter = useCallback(() => {
		onFilter(filters);
	}, [filters, onFilter]);

	const handleClear = useCallback(() => {
		setFilters({});
		onFilter(filters);
	}, [setFilters, onFilter, filters]);

	// todo: name and price fields are broken, to fix

	return (
		<div className='filters'>
			<input
				type='string'
				name='name'
				placeholder='Name'
				value={getValue('name')}
				onChange={handleChange}
			/>
			<input
				type='number'
				name='price'
				min='0'
				max='200'
				placeholder='Price'
				value={getValue('price')}
				onChange={handleChange}
				style={{ width: '100px' }}
			/>
			<input
				type='number'
				name='quantity'
				min='0'
				max='200'
				placeholder='Quantity'
				value={getValue('quantity')}
				onChange={handleChange}
				style={{ width: '100px' }}
			/>

			<button onClick={handleFilter}>Filter</button>
			<button onClick={handleClear}>Clear</button>
		</div>
	);
};

export default Filters;
