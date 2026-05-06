import React from 'react';
import { Link } from 'react-router-dom';

export default function InventoryTable({ items, onDelete }) {
    return (
        <table className="admin-table">
            <thead>
            <tr>
                <th>Фото</th>
                <th>Назва</th>
                <th>Опис</th>
                <th>Дії</th>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => (
                <tr key={item.id}>
                    <td>
                        {item.imageUrl ? <img src={item.imageUrl} alt={item.name} width="50" /> : 'Немає фото'}
                    </td>
                    <td><strong>{item.name}</strong></td>
                    <td>{item.description}</td>
                    <td>
                        <Link to={`/details/${item.id}`} style={{ marginRight: '10px' }}> Перегляд</Link>
                        <Link to={`/edit/${item.id}`} style={{ marginRight: '10px' }}> Редаг.</Link>
                        <button onClick={() => onDelete(item)}>Видал.</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}