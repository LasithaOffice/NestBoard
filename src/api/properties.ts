import { PropertyItem } from "../types/properties";
import { apiClient } from "./apiClient"

export const PropertyAPI = {
  getAllProperties: async () => {
    const d = await apiClient.get<PropertyItem[]>('properties')
    return d.data;
  },

  getSingleProperty: async (id: string) => {
    const d = await apiClient.get<PropertyItem[]>('properties/' + id)
    return d.data;
  },
}