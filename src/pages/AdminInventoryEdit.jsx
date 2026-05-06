import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useInventory } from '../store/InventoryContext';
import InventoryForm from '../components/inventory/InventoryForm';

export default function AdminInventoryEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getItemById, saveInventoryItem, saveInventoryPhoto } = useInventory();
    const item = getItemById(id);

    const handleTextSubmit = async (data) => {
        await saveInventoryItem(id, { name: data.name, description: data.description });
        alert("Текст оновлено!");
    };

    const handlePhotoChange = async (e) => {
        if (e.target.files[0]) {
            await saveInventoryPhoto(id, e.target.files[0]);
            alert("Фото оновлено!");
        }
    };

    if (!item) return <p>Завантаження...</p>;

    return (
        <div>
            <button onClick={() => navigate('/')}>← Назад</button>
            <h2>Редагування: {item.name}</h2>

            <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc' }}>
                <h3>Текстові дані</h3>
                <InventoryForm initialValues={item} onSubmit={handleTextSubmit} isEdit={true} />
            </div>

            <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc' }}>
                <h3>Оновити фото</h3>
                <input type="file" onChange={handlePhotoChange} accept="image/*" />
            </div>
        </div>
    );
}