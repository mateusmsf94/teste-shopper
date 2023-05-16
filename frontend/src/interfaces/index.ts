export interface Product {
    code: number;
    name: string;
    sales_price: number;
    newPrice: number;
  }
  
export interface Pack {
    pack_id: number;
    product_id: number;
    qty: number;
    products: PackProduct[];
  }
  
export interface PackProduct {
    product_id: number;
    name: string;
    sales_price: number;
    newPrice: number;
    quantity: number;
  }
  