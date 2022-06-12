export interface Product {
  id: number;
  title: string;
  author: string;
  description: string;
  imgUrl: string;
  price: number;
  quantity: number;
}

export interface Cart {
  products: Product[];
  total: number;
}