import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-semibold">
            SocioraTech<span className="text-secondary">.</span>
          </h3>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed text">
            SocioraTech conçoit des solutions numériques
            dédiées aux professionnels du secteur socio-médical.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-lg">Produits</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="https://www.orthocabinet.com/" target="_blank" className="hover:text-white transition">
                OrthoCabinet
              </a>
            </li>
            <li>
              <Link to="/produits" className="hover:text-white transition">
                À venir
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-lg">Société</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/a-propos" className="hover:text-white transition">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/mentions-legales"  className="hover:text-white transition">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-lg">Contact</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:contact@sociora.com" className="hover:text-white transition">
                contact@sociora.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Algérie</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>© 2026 SOCIORA SOLUTIONS. Tous droits réservés.</p>
          <p>Solutions numériques socio-médicales</p>
        </div>
      </div>
    </footer>
  );
}
