import React, { useCallback, useState } from 'react';
import { Dict, TableProps } from '../types';

const Table = ({ columns, data, onSort }: TableProps) => {
	//console.log(data, columns);
	const [order, setOrder] = useState({ val: 'ace', key: 'name' });

	const handleSort = useCallback((x: string) => {
		//debugger;
	//console.log('Table.tsx-x', x);
	if (order.val === 'ace') {
		setOrder(Object.assign(order, { val: 'desc', key : x }));
	} else {
		setOrder(Object.assign(order, { val: 'ace', key : x }));
	}
		onSort(order);
		//console.log('Table.tsx-order', order);
	}, [onSort, order, setOrder]);
	
	//console.log('Table.tsx-order', order);
	//console.log('Table.tsx-data', data);
	return (
		<table>
			<thead>
				<tr>
					{columns.map((column) => (
						<th key={column.name}>
							{column.description} <button onClick={() =>handleSort(column.name)}>Sort</button>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((item: Dict) => {
					// todo: fix warnings
					return (
						<tr key={item.id}>
							{columns.map((column) => (
								<td key={column.name} width={column.width}>
									{item[column.name]}
								</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
