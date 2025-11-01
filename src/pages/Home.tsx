import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Plane, Ship, Truck, FileCheck, Warehouse, Package } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services = [
    { icon: Plane, title: t('service_air'), description: t('service_air_desc') },
    { icon: Ship, title: t('service_sea'), description: t('service_sea_desc') },
    { icon: Truck, title: t('service_land'), description: t('service_land_desc') },
    { icon: FileCheck, title: t('service_customs'), description: t('service_customs_desc') },
    { icon: Warehouse, title: t('service_warehouse'), description: t('service_warehouse_desc') },
    { icon: Package, title: t('service_packaging'), description: t('service_packaging_desc') },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center space-x-4 rtl:space-x-reverse mb-6">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 rounded-2xl">
                <Plane className="w-12 h-12 text-black" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('hero_title')}
            </h1>
            <p className="text-xl md:text-2xl text-yellow-400 font-semibold mb-4">
              {t('hero_subtitle')}
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('hero_description')}
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-4 rounded-lg text-lg transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero_cta')}
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t('services_title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-yellow-600/20 hover:border-yellow-500/50 transition-all"
              >
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
