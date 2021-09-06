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
			setItems(data.filter(fn));
		},
		[data]
	);

	const sort = useCallback(
		(fn: (left: Dict, right: Dict) => number): void => {
			setItems([...items.sort(fn)]);
		},
		[items]
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
