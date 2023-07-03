export interface ShoppingStore {
  id: number;
  placeName: string;
  address: Address;
  availability: number;
  workingHours: string;
  distance?: number;
}

export interface Address {
  lat: number;
  lng: number;
  location: string;
}
