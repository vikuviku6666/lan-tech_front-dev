export type Dict = {
  [key: string]: any;
};

export type Column = {
  name: string;
  description: string;
  width?: number | string;
};

export type TableProps = {
	data: Array<Object>;
	columns: Column[];
	onSort: (order: { [key: string]: any }) => void;
};

export type FilterProps = {
  onFilter: (filters: { [key: string]: any }) => void;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type PaginationProps = {
  pages: number;
  paginate: (page: number) => void;
}
