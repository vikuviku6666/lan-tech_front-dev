import { Dict } from '../types';

/**
 * for a given order key/value object, generates a callback function
 * @param order
 * @returns (item: Dict) => number
 */

const sortProduct =
	(order: Dict) =>
	(a: Dict, b: Dict): number => {
		// todo: implement sort by `price` and `quantity`
		// todo: make sort by `name` a case-insensitive
	if (!a.hasOwnProperty(order.key) || !b.hasOwnProperty(order.key)) {
			return 0;
		}

		const varA = typeof a[order.key] === 'string' ? a[order.key].toUpperCase() : a[order.key];
		const varB = typeof a[order.key] === 'string' ? b[order.key].toUpperCase() : b[order.key];

		let comparison = 0;
		if (varA > varB) {
			comparison = 1;
		} else if (varA < varB) {
			comparison = -1;
		}

		return order.val === 'desc' ? comparison * -1 : comparison;
	};

export default sortProduct;
