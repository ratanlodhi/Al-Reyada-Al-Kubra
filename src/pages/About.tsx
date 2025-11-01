import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t('about_title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto"></div>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-yellow-600/20"
            >
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{t('about_mission')}</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {t('about_mission_text')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-yellow-600/20"
            >
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{t('about_vision')}</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {t('about_vision_text')}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-xl border border-yellow-600/20"
          >
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-16 h-16 rounded-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-white">{t('about_experience')}</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              {t('about_experience_text')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">500+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
