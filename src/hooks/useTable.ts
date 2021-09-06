import { useCallback, useEffect, useState } from 'react';
import { Dict } from '../types';

const ITEMS_PER_PAGE = 10;

const useTable = (dataUrl: string, itemsPerPage: number = ITEMS_PER_PAGE) => {
	const [loading, load] = useState<boolean>(false);
	const [data, setData] = useState<Dict[]>([]);
	const [items, setItems] = useState<Dict[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(0);
	const [pages, setPages] = useState<number>(0);

	const filter = useCallback(
		(fn: (item: Dict, index: number) => boolean): void => {
			//console.log(fn());
			setItems(data.filter(fn));
			//console.log('useTable.ts-filterfn, 17', items);
		},
		[data]
	);

	const sort = useCallback(
		(fn: (left: Dict, right: Dict) => number): void => {
			//console.log('useTable.ts',fn);
			//debugger;
			setItems(data.sort(fn));
			//console.log('useTable.ts-data', data);
		//	console.log('useTable.ts-sortfn-28', items);
		},
		[data]
	);

	useEffect(() => {
		load(true);
		fetch(dataUrl)
			.then((response: Response): Promise<[]> => response.json())
			.then((data: Dict[]) => {
				setData(data);
				setItems(data);
				load(false);
			})
			.catch(() => {
				load(false);
			});
	}, [dataUrl, itemsPerPage, setPages]);

	useEffect(() => {
		// todo: fix typescript error
		setPages(Math.ceil(items.length / itemsPerPage));
	}, [items, itemsPerPage]);
	//console.log('useTable.ts-data-51', data);
	//console.log('useTable.ts-items-52', items);
	return {
		loading,
		pages,
		currentPage,
		items: items.slice(currentPage * itemsPerPage, itemsPerPage + currentPage * itemsPerPage),
		setCurrentPage,
		filter,
		sort,
	};
};

export default useTable;
