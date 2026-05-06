import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useInventory } from '../store/InventoryContext';
import InventoryForm from '../components/inventory/InventoryForm';

export default function AdminInventoryCreate() {
    const { addInventoryItem } = useInventory();
    const navigate = useNavigate();

    const handleCreate = async (data) => {
        await addInventoryItem(data);
        navigate('/');
    };

    return (
        <div>
            <button onClick={() => navigate('/')}>← Назад</button>
            <h2>Створення нової позиції</h2>
            <InventoryForm onSubmit={handleCreate} />
        </div>
    );
}