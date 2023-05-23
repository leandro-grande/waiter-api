

export interface OrderDTO {
	table: string;
	orderItem: {
		product_id: string;
		qtd: number;
	}[]
}