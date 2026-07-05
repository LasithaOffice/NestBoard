import { Property, PropertyItem, PropertyListResponse, RoomType } from "../types/properties";
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

  getPropertyRoomTypes: async (id: string) => {
    const d = await apiClient.get<RoomType[]>('properties/' + id + '/room-types')
    return d.data;
  },

  getSingleRoomType: async (proprtyId: string, roomTypeId: string) => {
    const d = await apiClient.get<RoomType>(`properties/${proprtyId}/room-types/${roomTypeId}`)
    return d.data;
  },

}