export interface ProductModel {
  id?: number;
  title: string;
  longDescription: string;
  price: number;
  photo: string;
}

export interface ProductModelCRM {
  ProductName: string;
  ProductCode?: string;
  ProductPrice: number;
  ProductDetails: string;
  fileName: string;
  documentBody: string;
}

export interface addToCardModel {
  Email: string;
  ProductCode: string;
}
