import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Plane, Ship, Truck, FileCheck, Warehouse, Package, Star } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services = [
  { icon: Plane, title: t('Express International Delivery'), description: t('Fast and reliable air and sea delivery across the globe.') },
  { icon: FileCheck, title: t('Customs Clearance Support'), description: t('Efficient documentation and customs handling for smooth delivery.') },
  { icon: Package, title: t('Real-Time Tracking'), description: t('Track your shipment anytime, anywhere with live updates.') },
  { icon: Truck, title: t('service_land'), description: t('service_land_desc') },
  { icon: Warehouse, title: t('service_warehouse'), description: t('service_warehouse_desc') },
  { icon: Ship, title: t('Freight & Cargo Handling'), description: t('Comprehensive logistics support for all types of freight and cargo.') },
];

  const testimonials = [
    {
      name: "John Doe",
      company: "Global Logistics Inc.",
      message: "Excellent service and timely deliveries. Highly recommended!",
      rating: 5
    },
    {
      name: "Jane Smith",
      company: "International Trade Co.",
      message: "Professional team and seamless customs clearance.",
      rating: 5
    },
    {
      name: "Mike Johnson",
      company: "Export Solutions Ltd.",
      message: "Reliable and efficient shipping solutions.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          src="/cargo.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="container px-4 text-left relative z-20 flex items-center justify-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center justify-center space-x-4 rtl:space-x-reverse mb-6">
              <div className="bg-yellow-500 p-4 rounded-2xl shadow-lg">
                <Plane className="w-12 h-12 text-black" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('hero_title')}
            </h1>
            <p className="text-xl md:text-2xl text-yellow-400 font-semibold mb-4">
              {t('hero_subtitle')}
            </p>
            <p className="text-lg text-gray-300 mb-8">
              {t('hero_description')}
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg text-lg transition-all shadow-lg hover:bg-yellow-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero_cta')}
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Trusted by Leading Companies
            </h3>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          </motion.div>
          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[
                'FedEx', 'DHL', 'UPS', 'Maersk', 'MSC', 'CMA CGM', 'Hapag-Lloyd', 'Evergreen', 'COSCO', 'ONE', 'Kuehne+Nagel', 'DSV', 'DB Schenker', 'Expeditors', 'Panalpina',
                'FedEx', 'DHL', 'UPS', 'Maersk', 'MSC', 'CMA CGM', 'Hapag-Lloyd', 'Evergreen', 'COSCO', 'ONE', 'Kuehne+Nagel', 'DSV', 'DB Schenker', 'Expeditors', 'Panalpina'
              ].map((company, index) => (
                <span key={index} className="text-yellow-500 font-bold text-lg mx-8">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        ` }} />
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
                className="bg-black p-8 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all shadow-lg"
              >
                <div className="bg-yellow-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black p-8 rounded-xl shadow-lg border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.message}"</p>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
