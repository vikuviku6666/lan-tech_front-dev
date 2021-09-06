import { Dict } from '../types';

/**
 * for a given order key/value object, generates a callback function
 * @param order
 * @returns (item: Dict) => number
 */

const sortProduct =
	(order: Dict) =>
		(a: Dict, b: Dict): number => {
			 //console.log(order);
			//console.log(a, b);
		// todo: implement sort by `price` and `quantity`
		// todo: make sort by `name` a case-insensitive
			//console.log('sortProduct.ts-start',order.key, order.val);
			if (!a.hasOwnProperty(order.key) || !b.hasOwnProperty(order.key)) {
				// property doesn't exist on either object
				return 0;
			}

			const varA = typeof a[order.key] === 'string' ? a[order.key].toUpperCase() : a[order.key];
      //console.log("🚀 ~ file: sortProduct.ts ~ line 23 ~ varA", varA)
			const varB = typeof a[order.key] === 'string' ? b[order.key].toUpperCase() : b[order.key];
      //console.log("🚀 ~ file: sortProduct.ts ~ line 25 ~ varB", varB)

			let comparison = 0;
			if (varA > varB) {
				comparison = 1;
			} else if (varA < varB) {
				comparison = -1;
			}
			//console.log('sortProduct.ts-end', comparison, order.val);
			return (order.val === 'desc') ? (comparison * -1) : comparison;
		
	};

export default sortProduct;
