import axios from 'axios';

const API_URL = `https://example-backend.railway.internal/boxes`

export interface Box {
  id?: number;
  label: string;
  color: string;
}

export const getAllBoxes = async (): Promise<Box[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createBox = async (box: Box): Promise<Box> => {
  const response = await axios.post(API_URL, box);
  return response.data;
};

export const deleteBox = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};