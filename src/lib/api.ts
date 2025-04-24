import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/boxes`
console.log('NEXT_PUBLIC_BACKEND_URL:', process.env.NEXT_PUBLIC_BACKEND_URL);
console.log('BACKEND_URL:', process.env.BACKEND_URL);
console.log('API_URL:', API_URL);
// Ensure BACKEND_URL is set in your environment variables

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