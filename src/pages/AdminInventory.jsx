import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInventory } from '../store/InventoryContext';
import InventoryTable from '../components/inventory/InventoryTable';
import ConfirmModal from '../components/inventory/ConfirmModal';

export default function AdminInventory() {
    const { items, isLoading, removeInventoryItem } = useInventory();
    const [itemToDelete, setItemToDelete] = useState(null);

    const handleDelete = async () => {
        if (itemToDelete) {
            await removeInventoryItem(itemToDelete.id);
            setItemToDelete(null);
        }
    };

    if (isLoading) return <p>Завантаження...</p>;

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h1>Список інвентарю</h1>
                <Link to="/create"><button>+ Додати товар</button></Link>
            </div>

            <InventoryTable items={items} onDelete={setItemToDelete} />

            <ConfirmModal
                isOpen={!!itemToDelete}
                title="Видалення"
                description={`Ви впевнені, що хочете видалити "${itemToDelete?.name}"?`}
                onConfirm={handleDelete}
                onCancel={() => setItemToDelete(null)}
            />
        </div>
    );
}