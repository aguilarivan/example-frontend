'use client';

import { useState } from 'react';
import { Box, createBox } from '@/lib/api';

interface BoxFormProps {
  onBoxCreated: (newBox: Box) => void;
}

export default function BoxForm({ onBoxCreated }: BoxFormProps) {
  const [label, setLabel] = useState('');
  const [color, setColor] = useState('#000000');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newBox = await createBox({ label, color });
      setLabel('');
      setColor('#000000');
      setError(null);
      onBoxCreated(newBox);
    } catch {
      setError('Failed to create box');
    }
  };

  return (
    <div className="mb-6 bg-gray-800  rounded-xl p-8 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add New Box</h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div className={"flex space-x-4 justify-between "} >
        <div className={"flex-col w-full"}>
          <label htmlFor="label" className="block text-sm font-medium">
            Label
          </label>
          <input
            id="label"
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="mt-1 block w-full h-10 border border-gray-500 rounded-md p-2 mx-0"
            required
          />
        </div>
        <div className={"flex-col w-50"}>
          <label htmlFor="color" className="block text-sm font-medium">
            Color
          </label>
          <input
            id="color"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="mt-1 block w-full  h-10 border border-gray-500 rounded-md mx-0"
            required
          />
        </div>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create Box
        </button>

      </form>
    </div>
  );
}