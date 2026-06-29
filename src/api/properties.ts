import { Property, PropertyItem, PropertyListResponse } from "../types/properties";
import { apiClient } from "./apiClient"

export const PropertyAPI = {
  getAllProperties: async (page: number, limit: number) => {

    const params = new URLSearchParams();
    params.append("page", page + "");
    params.append("limit", limit + "");
    //properties?page=1&limit=4&abc=xyz

    const d = await apiClient.get<PropertyListResponse>('properties?' + params.toString())
    return d.data;
  },

  getSingleProperty: async (id: string) => {
    const d = await apiClient.get<Property>('properties/' + id)
    return d.data;
  },
}