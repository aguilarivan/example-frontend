'use client';

import { Box, deleteBox } from '@/lib/api';
import { useState } from 'react';
import {Trash} from "lucide-react";

interface BoxListProps {
  boxes: Box[];
  onBoxDeleted: (id: number) => void;
}

export default function BoxList({ boxes, onBoxDeleted }: BoxListProps) {
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (id: number) => {
    try {
      await deleteBox(id);
      setError(null);
      onBoxDeleted(id);
    } catch {
      setError('Failed to delete box');
    }
  };

  return (
    <div className={"mb-6 bg-gray-800  rounded-xl p-8 shadow-md"}>
      <h2 className="text-xl font-semibold mb-4">Box List</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {boxes.length === 0 ? (
        <p>No boxes available.</p>
      ) : (
        <ul className="space-y-2">
          {boxes.map((box) => (
            <li
              key={box.id}
              className="flex justify-between items-center p-2 rounded-md text-white"
              style={{ backgroundColor: box.color }}
            >
              <div className={"flex flex-row bg-gray-800/50 rounded-xl px-4 py-2 shadow-md w-full space-x-8 mx-4"}>
                <p>
                  <strong>ID:</strong> {box.id}
                </p>
                <p>
                  <strong>Label:</strong> {box.label}
                </p>
                <p>
                  <strong>Color:</strong> {box.color}
                </p>
              </div>
              <button
                  onClick={() => box.id && handleDelete(box.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 flex items-center justify-center "
              >
                <Trash className="w-6 h-5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}