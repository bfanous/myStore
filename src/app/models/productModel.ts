export interface ProductModelCRM {
  ProductName: string;
  ProductCode?: string;
  ProductPrice: number;
  ProductDetails: string;
  fileName: string;
  documentBody: string;
  Email: string;
  Amount: number;
}

export interface MyProductListModelCRM {
  ProductName: string;
  documentBody: string;
  fileName: string;
  ProductDetails: string;
  ProductPrice: number;
  Amount: number;
  Email: string;
}
