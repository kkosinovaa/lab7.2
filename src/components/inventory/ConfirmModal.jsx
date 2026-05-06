import React from 'react';

export default function ConfirmModal({ isOpen, title, description, onConfirm, onCancel }) {
    if (!isOpen) return null;
    return (
        <div className="modal-backdrop" onClick={onCancel}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                    <button onClick={onCancel}>Скасувати</button>
                    <button onClick={onConfirm} style={{ background: 'red', color: 'white' }}>Видалити</button>
                </div>
            </div>
        </div>
    );
}