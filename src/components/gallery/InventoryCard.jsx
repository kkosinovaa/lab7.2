import React from 'react';

export const InventoryCard = ({ item, onClick, isFav, onToggleFav }) => {
    const photoUrl = item.imageUrl ? item.imageUrl : 'https://via.placeholder.com/300x200?text=No+Image';

    return (
        <div className="card">
            <div className="card-image-wrapper" onClick={() => onClick(item)}>
                <img src={photoUrl} alt={item.name} className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{item.name}</h3>
                <button
                    className={`fav-btn ${isFav ? 'active' : ''}`}
                    onClick={(e) => {
                        e.stopPropagation(); // Щоб клік на кнопку не відкривав Quick View
                        onToggleFav(item);
                    }}
                >
                    {isFav ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
    );
};