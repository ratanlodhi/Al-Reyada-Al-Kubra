import { Link, useLocation } from 'react-router-dom';
import { Plane, Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-600/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="">
              <img src="/logo.jpeg" alt="Logo" className="w-24 h-18" />
            </div>
            <span className="text-white font-bold text-lg">
              {language === 'en' ? 'Al Reyada Al Kubra' : 'الريادة الكبرى'}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-yellow-500' : 'text-white hover:text-yellow-400'
              }`}
            >
              {t('nav_home')}
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about') ? 'text-yellow-500' : 'text-white hover:text-yellow-400'
              }`}
            >
              {t('nav_about')}
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isActive('/contact') ? 'text-yellow-500' : 'text-white hover:text-yellow-400'
              }`}
            >
              {t('nav_contact')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-black rounded-lg transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="font-semibold">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pt-4 pb-2">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors ${
                    isActive('/') ? 'text-yellow-500' : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {t('nav_home')}
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors ${
                    isActive('/about') ? 'text-yellow-500' : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {t('nav_about')}
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors ${
                    isActive('/contact') ? 'text-yellow-500' : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {t('nav_contact')}
                </Link>
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-black rounded-lg transition-colors w-fit"
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-semibold">{language === 'en' ? 'AR' : 'EN'}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
