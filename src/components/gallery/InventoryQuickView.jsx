import React from 'react';

export const InventoryQuickView = ({ item, onClose }) => {
    if (!item) return null;
    const photoUrl = item.imageUrl ? item.imageUrl : 'https://via.placeholder.com/600x400?text=No+Image';

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content quick-view" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>
                <img src={photoUrl} alt={item.name} className="quick-view-image" />
                <div className="quick-view-info">
                    <h2>{item.name}</h2>
                    <p>{item.description || 'Опис відсутній'}</p>
                </div>
            </div>
        </div>
    );
};