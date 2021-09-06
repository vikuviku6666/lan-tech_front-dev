import { Dict } from '../types';

/**
 * for a given filters key/value object, generates a callback function
 * @param filters
 * @returns (item: Dict) => boolean
 */

const filterProduct =
	(filters: Dict) =>
	(product: Dict): boolean => {
		// 		const filterObject = (obj: Dict, fn: any) =>
		// 			Object.fromEntries(Object.entries(obj).filter(([key, val]) => fn(val, key)));

		// 		const filterPrice = filterObject(
		// 			product,
		// 			(val: any, key: String) => key === 'price' && val >= filters.price
		// 		);
		// 		console.log(filterPrice);

		// console.log('filterProducts.ts', filters);
		// console.log('filterProducts.ts', product);
		//console.log(product.price && product.price >= filters.price);
		// console.log(
		// 	!filters.name ||
		// 		(product.name &&
		// 			product.name.toLowerCase().includes(filters.name && filters.name.toLowerCase()))
		// );
		// todo: implement filter by `price` and `quantity`
		// if (filters.price !== "") {
		// 	const filterPrice = product.filter((item: Dict) => item.price === filters.price);
		// 	return filterPrice;
		// }
		// if (filters.quantity) {
		// 	const filterPrice = product.filter((item: Dict) => item.quantity === filters.quantity);
		// 	return filterPrice;
		// }
		// if (filters.name) {
		// 	const filterPrice = product.filter((item: Dict) => item.name === filters.name);
		// 	return filterPrice;
		// }
		// todo: make filter by `name` a case-insensitive
		// const products =
		// 	product &&
		// 	product.filter((product: Dict) => {
		// 		if (filters.name === '') {
		// 			return product;
		// 		} else if (product.name.toLowerCase().includes(filters.name.toLowerCase())) {
		// 			return product;
		// 		}
		// 	});
		// return products;

		if (filters.price !== '' || filters.quantity !== '' || filters.name !== '') {
			return (
				(filters.price === '' || product.price >= filters.price) &&
				(filters.quantity === '' || product.quantity >= filters.quantity) &&
				(filters.name === '' || product.name.toLowerCase().includes(filters.name.toLowerCase()))
			);
		} else {
			return true;
		}

		// return (
		// 	// product.price >= filters.price &&
		// 	// product.quantity >= filters.quantity &&
		// 	filters.name === '' || product.name.toLowerCase().includes(filters.name.toLowerCase())
		// );
	};

export default filterProduct;

// if (filters.name !== '' || filters.price !== '' || filters.quantity !== '') {
		// 	return (
		// 		(filters.price && filters.price >= product.price) ||
		// 		(filters.quantity && filters.quantity >= product.quantity) ||
		// 		(product.name && product.name.toLowerCase().includes(filters.name.toLowerCase()))
		// 	);
		// } else if(filters.name !== '' && filters.price !== '' && filters.quantity !== '') {
		// 	return (
		// 		filters.price &&
		// 		filters.price >= product.price &&
		// 		filters.quantity &&
		// 		filters.quantity >= product.quantity &&
		// 		filters.name &&
		// 		product.name.toLowerCase().includes(filters.name.toLowerCase())
		// 	);
		// } else {
		// 	return true;
		// }
		// return (
		// 	filters.price &&
		// 	filters.price >= product.price &&
		// 	filters.quantity &&
		// 	filters.quantity >= product.quantity &&
		// 	filters.name &&
		// 	product.name.toLowerCase().includes(filters.name.toLowerCase())
		// );

			// if (filters.price !== '') {
		// 	return filters.price && filters.price >= product.price;
		// }
		// if (filters.quantity !== '') {
		// 	return filters.quantity && filters.quantity >= product.quantity;
		// }

		// if (filters.name !== '') {
		// 	return !filters.name || product.name.toLowerCase().includes(filters.name.toLowerCase());
		// }
		// return true;

		// const handleSort = useCallback(
		// 	(x) => {
		// 		if (order.val === 'ace') {
		// 			setOrder(Object.assign(order, { val: 'dec', key: x }));
		// 		} else {
		// 			setOrder(Object.assign(order, { val: 'ace', key: x }));
		// 		}
		// 		onSort(order);
		// 	},
		// 	[setOrder, onSort, order]
		// );