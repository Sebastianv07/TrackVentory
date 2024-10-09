export interface Product {
    reference: string;
    name: string;
    price: number;
    category: { code: string; name: string }; // Dependiendo de cómo esté definido `ProductCategory`
    variations: any[]; // O define un modelo para `ProductVariation` si es necesario
  }
  