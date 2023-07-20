import axios from 'axios';
import queryString from 'query-string';
import { SeatInterface, SeatGetQueryInterface } from 'interfaces/seat';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSeats = async (query?: SeatGetQueryInterface): Promise<PaginatedInterface<SeatInterface>> => {
  const response = await axios.get('/api/seats', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSeat = async (seat: SeatInterface) => {
  const response = await axios.post('/api/seats', seat);
  return response.data;
};

export const updateSeatById = async (id: string, seat: SeatInterface) => {
  const response = await axios.put(`/api/seats/${id}`, seat);
  return response.data;
};

export const getSeatById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/seats/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSeatById = async (id: string) => {
  const response = await axios.delete(`/api/seats/${id}`);
  return response.data;
};
