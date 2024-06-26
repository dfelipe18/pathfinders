export interface IResGetAppliances {
  _id: string;
  name: string;
  brand: string;
  description: string;
  image: null | string;
  price: number;
  quantity: number;
  __v: number;
  imageUrl: null | string;
}

export interface IRequestBodyAppliances {
  name: string;
  brand: string;
  description: string;
  price: number;
}

export interface IModifyBodyAppliances {
  name?: string;
  brand?: string;
  description?: string;
  price?: number;
}

export interface IDeleteAppliance {
  message: string;
}
