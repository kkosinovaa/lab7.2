import React, { useEffect, useState } from 'react';
import { inventoryApi } from '../services/inventoryApi';
import { InventoryCard } from '../components/gallery/InventoryCard';
import { InventoryQuickView } from '../components/gallery/InventoryQuickView';
import { useFavorites } from '../hooks/useFavorites';

export default function Gallery() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const { toggleFavorite, isFavorite } = useFavorites();

    useEffect(() => {
        inventoryApi.getAll()
            .then(res => setItems(res.data))
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className="skeleton-container"><div className="skeleton"></div><div className="skeleton"></div><div className="skeleton"></div></div>; // Skeleton loading [cite: 160]
    if (error) return <div className="empty-state">Помилка завантаження даних (Error State)</div>; // Error state [cite: 161]
    if (items.length === 0) return <div className="empty-state">Галерея порожня (Empty State)</div>; // Empty state [cite: 161]

    return (
        <div className="gallery-page">
            <h1>Галерея інвентарю</h1>
            <div className="gallery-grid">
                {items.map(item => (
                    <InventoryCard
                        key={item.id}
                        item={item}
                        isFav={isFavorite(item.id)}
                        onToggleFav={toggleFavorite}
                        onClick={setSelectedItem}
                    />
                ))}
            </div>
            {selectedItem && (
                <InventoryQuickView item={selectedItem} onClose={() => setSelectedItem(null)} />
            )}
        </div>
    );
}