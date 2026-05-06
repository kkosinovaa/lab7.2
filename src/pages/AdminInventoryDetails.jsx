import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useInventory } from '../store/InventoryContext';

export default function AdminInventoryDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getItemById } = useInventory();
    const item = getItemById(id);

    if (!item) return <p>Товар не знайдено</p>;

    return (
        <div>
            <button onClick={() => navigate('/')}>← Назад</button>
            <h1>{item.name}</h1>
            <p><strong>Опис:</strong> {item.description}</p>
            {item.imageUrl && (
                <img src={item.imageUrl} alt={item.name} style={{ maxWidth: '400px', marginTop: '20px' }} />
            )}
        </div>
    );
}