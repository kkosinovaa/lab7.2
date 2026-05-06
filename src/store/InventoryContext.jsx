import { createContext, useContext, useEffect, useState } from 'react';
import { fetchInventory, createItem, deleteItem, updateItem, updateItemPhoto } from '../services/inventoryApi';

const InventoryContext = createContext(null);

export function InventoryProvider({ children }) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadInventory = async () => {
        setIsLoading(true);
        const inventory = await fetchInventory();
        setItems(inventory);
        setIsLoading(false);
    };

    useEffect(() => { loadInventory(); }, []);

    const addInventoryItem = async (data) => {
        await createItem(data);
        await loadInventory();
    };

    const removeInventoryItem = async (id) => {
        await deleteItem(id);
        setItems((curr) => curr.filter((i) => String(i.id) !== String(id)));
    };

    const saveInventoryItem = async (id, data) => {
        await updateItem(id, data);
        await loadInventory();
    };

    const saveInventoryPhoto = async (id, photo) => {
        await updateItemPhoto(id, photo);
        await loadInventory();
    };

    const getItemById = (id) => items.find((item) => String(item.id) === String(id)) || null;

    return (
        <InventoryContext.Provider value={{
            items, isLoading, addInventoryItem, removeInventoryItem,
            saveInventoryItem, saveInventoryPhoto, getItemById, refresh: loadInventory
        }}>
            {children}
        </InventoryContext.Provider>
    );
}

export const useInventory = () => useContext(InventoryContext);