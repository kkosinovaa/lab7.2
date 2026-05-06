import React, { useState } from 'react';

export default function InventoryForm({ initialValues = {}, onSubmit, isEdit = false }) {
    const [name, setName] = useState(initialValues.name || '');
    const [description, setDescription] = useState(initialValues.description || '');
    const [photo, setPhoto] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, description, photo });
    };

    return (
        <form onSubmit={handleSubmit} className="inventory-form">
            <div>
                <label>Назва *</label>
                <input required type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Опис</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="4" />
            </div>
            {!isEdit && (
                <div>
                    <label>Фото *</label>
                    <input required type="file" onChange={(e) => setPhoto(e.target.files[0])} accept="image/*" />
                </div>
            )}
            <button type="submit" style={{ marginTop: '15px' }}>
                {isEdit ? 'Зберегти зміни' : 'Створити позицію'}
            </button>
        </form>
    );
}