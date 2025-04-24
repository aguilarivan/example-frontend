'use client';

import { useState, useEffect } from 'react';
import { getAllBoxes, Box } from '@/lib/api';
import BoxForm from '@/components/BoxForm';
import BoxList from '@/components/BoxList';
import {BoxIcon} from 'lucide-react';

export default function Home() {
    const [boxes, setBoxes] = useState<Box[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Fetch boxes on mount
    useEffect(() => {
        const fetchBoxes = async () => {
            try {
                const data = await getAllBoxes();
                setBoxes(data);
                setError(null);
            } catch {
                setError('Failed to fetch boxes');
            }
        };
        fetchBoxes();
    }, []);

    // Handle box creation
    const handleBoxCreated = (newBox: Box) => {
        setBoxes((prev) => [...prev, newBox]);
    };

    // Handle box deletion
    const handleBoxDeleted = (id: number) => {
        setBoxes((prev) => prev.filter((box) => box.id !== id));
    };

    return (
        <main className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 flex items-center space-x-2">
                <BoxIcon className="w-8 h-8" />
                <span>Box App</span>
            </h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <BoxForm onBoxCreated={handleBoxCreated} />
            <BoxList boxes={boxes} onBoxDeleted={handleBoxDeleted} />
        </main>
    );
}