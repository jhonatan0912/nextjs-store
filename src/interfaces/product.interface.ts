export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  images: ProductImages;
  quantity: number;
}

export interface ProductImages {
  mobile: string;
  tablet: string;
  desktop: string;
  thumbnail: string;
}
