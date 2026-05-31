import { Property, PropertyListResponse } from "../types/properties";
import { apiClient } from "./apiClient";

export const propertyAPI = {
  getAllProperties: async (page: number): Promise<PropertyListResponse> => {
    const res = await apiClient.get<PropertyListResponse>('properties', {
      params: {
        page,
        limit: 5
      }
    });
    return res.data;
  }
}