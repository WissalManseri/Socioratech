import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary hover:opacity-80 transition">
          SocioraTech<span className="text-secondary">.</span>
        </Link>

        <nav className="hidden md:text-lg md:flex space-x-8 font-medium">
          <Link
            to="/"
            className={`hover:text-secondary transition ${isActive('/') ? 'text-secondary' : ''}`}
          >
            Accueil
          </Link>
          <Link
            to="/produits"
            className={`hover:text-secondary transition ${isActive('/produits') ? 'text-secondary' : ''}`}
          >
            Produits
          </Link>
          <Link
            to="/a-propos"
            className={`hover:text-secondary transition ${isActive('/a-propos') ? 'text-secondary' : ''}`}
          >
            À propos
          </Link>
          <Link
            to="/contact"
            className={`hover:text-secondary transition ${isActive('/contact') ? 'text-secondary' : ''}`}
          >
            Contact
          </Link>
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-block md:text-lg bg-secondary text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition transform hover:scale-105"
        >
          Demander une démo
        </Link>

        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden text- bg-white border-t">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link
              to="/"
              className={`hover:text-secondary transition ${isActive('/') ? 'text-secondary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/produits"
              className={`hover:text-secondary transition ${isActive('/produits') ? 'text-secondary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Produits
            </Link>
            <Link
              to="/a-propos"
              className={`hover:text-secondary transition ${isActive('/a-propos') ? 'text-secondary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className={`hover:text-secondary transition ${isActive('/contact') ? 'text-secondary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-secondary text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demander une démo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
