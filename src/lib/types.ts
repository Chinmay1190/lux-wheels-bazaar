
export interface Product {
  id: string;
  name: string;
  category: "car" | "bike";
  type: "sport" | "luxury" | "superbike";
  brand: string;
  price: number;
  description: string;
  features: string[];
  specifications: {
    engine?: string;
    power?: string;
    torque?: string;
    transmission?: string;
    acceleration?: string;
    topSpeed?: string;
    fuelConsumption?: string;
  };
  images: string[];
  discount?: number;
  available: boolean;
  rating: number;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderSummary {
  subtotal: number;
  discount: number;
  tax: number;
  shipping: number;
  total: number;
}
