import { Dict } from '../types';

/**
 * for a given filters key/value object, generates a callback function
 * @param filters
 * @returns (item: Dict) => boolean
 */

const filterProduct =
	(filters: Dict) =>
		(product: Dict): boolean => {
			return (
				(!filters.price || filters.price >= product.price) &&
				(!filters.quantity || filters.quantity >= product.quantity) &&
				(!filters.name || product.name.toLowerCase().includes(filters.name.toLowerCase()))
			);
		// todo: implement filter by `price` and `quantity`
	
		// todo: make filter by `name` a case-insensitive
	};

export default filterProduct;
