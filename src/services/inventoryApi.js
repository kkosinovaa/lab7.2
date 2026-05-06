const API_BASE_URL = '';
const INVENTORY_STORAGE_KEY = 'inventory-items';
const USE_MOCK_STORAGE = true;

const seedInventory = [
    {
        id: '1001',
        name: 'Ноутбук Dell',
        description: 'Робочий ноутбук для адміністратора.',
        imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
    }
];

function readStoredInventory() {
    const storedValue = window.localStorage.getItem(INVENTORY_STORAGE_KEY);
    if (!storedValue) {
        window.localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(seedInventory));
        return seedInventory;
    }
    return JSON.parse(storedValue);
}

function writeStoredInventory(items) {
    window.localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(items));
    return items;
}

function toDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

export function fetchInventory() {
    return Promise.resolve(readStoredInventory());
}

export async function createItem(data) {
    const file = data.photo;
    const imageUrl = file ? await toDataUrl(file) : '';
    const newItem = {
        id: String(Date.now()),
        name: data.name,
        description: data.description || '',
        imageUrl: imageUrl
    };
    const currentItems = readStoredInventory();
    writeStoredInventory([newItem, ...currentItems]);
    return newItem;
}

export async function updateItem(id, data) {
    const updatedItems = readStoredInventory().map((item) =>
        String(item.id) === String(id) ? { ...item, ...data } : item
    );
    writeStoredInventory(updatedItems);
    return updatedItems.find((item) => String(item.id) === String(id));
}

export async function updateItemPhoto(id, photo) {
    const imageUrl = photo ? await toDataUrl(photo) : '';
    const updatedItems = readStoredInventory().map((item) =>
        String(item.id) === String(id) ? { ...item, imageUrl } : item
    );
    writeStoredInventory(updatedItems);
}

export async function deleteItem(id) {
    const remainingItems = readStoredInventory().filter((item) => String(item.id) !== String(id));
    writeStoredInventory(remainingItems);
}