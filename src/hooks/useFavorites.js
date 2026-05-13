import {useState, useEffect} from 'react';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState(()=>{
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (item) => {
        setFavorites(prev => {
            const isExist = prev.find(i => i.id === item.id);
            if(isExist){
                return prev.filter((fav) => fav.id !== item.id)
            }
            return [...prev, item];
        });
    };

    const isFavorite = (id)=>{
        return favorites.some((fav) => fav.id === id);
    };

    return {favorites, toggleFavorite, isFavorite};
}