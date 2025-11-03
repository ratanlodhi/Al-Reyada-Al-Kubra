import { Link } from 'react-router-dom';
import { Plane, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white border-t border-yellow-600/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="">
              <img src="/logo.jpeg" alt="Logo" className="w-80 h-auto" />
              </div>
              <img src="/title.png" alt="Al Reyada Al Kubra" className="h-6 md:h-8 w-auto" />
            </div>
            <p className="text-gray-400 text-sm">{t('footer_tagline')}</p>
          </div>

          <div>
            <h3 className="font-semibold text-yellow-500 mb-4">{t('footer_quicklinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  {t('nav_home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  {t('nav_about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  {t('nav_contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-yellow-500 mb-4">{t('footer_services')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{t('service_air')}</li>
              <li>{t('service_sea')}</li>
              <li>{t('service_land')}</li>
              <li>{t('service_customs')}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-yellow-500 mb-4">{t('footer_contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 rtl:space-x-reverse text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t('contact_address_value')}</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+971 50 456 5567</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@alreyadaalkubra.ae</span>
              </li>
            </ul>
            <div className="flex space-x-4 rtl:space-x-reverse mt-4">
              <a
                href="https://www.facebook.com/share/17LTKizWwB/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/arak_.cargo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>{t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
}
