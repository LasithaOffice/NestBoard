import { PropertyType } from "./common";

export type PropertyItem = {
  id: string;
  title: string;
  location: string;
  type: string;
  price: string;
  rating: number;
  image: string;
  lat: number;
  lng: number;
}

export interface Room {
  id: string;
  propertyId: string;
  name: string;
  pricePerMonth: string;
  seatCapacity: number;
  hasAC: boolean;
  createdAt: string;
}

export interface Property {
  id: string;
  vendorId: string;
  title: string;
  description: string;
  address: string;
  city: string;
  type: "APARTMENT" | "HOUSE" | "VILLA" | "HOTEL" | string;
  rating: string;
  amenities: string[];
  latitude: number;
  longitude: number;
  imageUrl: string;
  minStay: string;
  isActive: boolean;
  createdAt: string;
  rooms: Room[];
}