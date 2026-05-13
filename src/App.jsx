// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import AdminInventory from './pages/AdminInventory';
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventoryEdit from './pages/AdminInventoryEdit';
import AdminInventoryDetails from './pages/AdminInventoryDetails';
import Gallery from './pages/Gallery';
import Favorites from './pages/Favorites';
import './App.css';

function App() {
    return (
        <div className="app-container">

            <nav className="main-nav">
                <div className="user-nav">
                    <Link to="/gallery">Галерея</Link> |
                    <Link to="/favorites">Улюблені</Link>
                </div>
                <div className="admin-nav">
                    <Link to="/">Адмінка</Link> |
                    <Link to="/create">Додати товар</Link>
                </div>
            </nav>

            <Routes>
                {/* Користувацькі маршрути */}
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/favorites" element={<Favorites />} />

                {/* Адмінські маршрути */}
                <Route path="/" element={<AdminInventory />} />
                <Route path="/create" element={<AdminInventoryCreate />} />
                <Route path="/edit/:id" element={<AdminInventoryEdit />} />
                <Route path="/details/:id" element={<AdminInventoryDetails />} />
            </Routes>
        </div>
    );
}

export default App;