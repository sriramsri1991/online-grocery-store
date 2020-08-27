
export interface Products {
  id: number;
  name: string;
  imagePath: string;
  description: string;
  longDescription: string;
  price: number;
  quantity: number;
}

export interface MockProducts {
 products: Products[];
}
