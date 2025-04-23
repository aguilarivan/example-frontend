'use client';

import { Box, deleteBox } from '@/lib/api';

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
    <div>
      <h2 className="text-xl font-semibold mb-4">Box List</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {boxes.length === 0 ? (
        <p>No boxes available.</p>
      ) : (
        <ul className="space-y-4">
          {boxes.map((box) => (
            <li
              key={box.id}
              className="flex justify-between items-center p-4 rounded-md text-white"
              style={{ backgroundColor: box.color }}
            >
              <div>
                <p>
                  <strong>Label:</strong> {box.label}
                </p>
                <p>
                  <strong>Color:</strong> {box.color}
                </p>
              </div>
              <button
                onClick={() => box.id && handleDelete(box.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}