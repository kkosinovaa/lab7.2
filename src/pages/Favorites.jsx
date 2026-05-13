import React, { useState } from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { InventoryCard } from '../components/gallery/InventoryCard';
import { InventoryQuickView } from '../components/gallery/InventoryQuickView';

export default function Favorites() {
    const { favorites, toggleFavorite, isFavorite } = useFavorites();
    const [selectedItem, setSelectedItem] = useState(null);

    if (favorites.length === 0) return <div className="empty-state">У вас немає улюблених товарів.</div>; // Empty state [cite: 161]

    return (
        <div className="gallery-page">
            <h1>Улюблені ({favorites.length})</h1>
            <div className="gallery-grid">
                {favorites.map(item => (
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