import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('contact_enquiries').insert([
        {
          ...formData,
          language,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service_type: '',
        message: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t('contact_title')}
          </h1>
          <p className="text-xl text-gray-300">{t('contact_subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mt-4"></div>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">{t('contact_info')}</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{t('contact_address')}</h3>
                    <p className="text-gray-400">{t('contact_address_value')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{t('contact_phone')}</h3>
                    <p className="text-gray-400">+971 XX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{t('contact_email')}</h3>
                    <p className="text-gray-400">info@alreyadaalkubra.ae</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68282179694!2d54.89782933658222!3d25.076280268162483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1635789012345!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-yellow-600/20"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      {t('contact_name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      {t('contact_email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2">
                      {t('contact_phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="service_type" className="block text-white font-semibold mb-2">
                      {t('contact_service')}
                    </label>
                    <select
                      id="service_type"
                      name="service_type"
                      value={formData.service_type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    >
                      <option value="">{t('contact_service')}</option>
                      <option value="Air Freight">{t('service_option_air')}</option>
                      <option value="Sea Freight">{t('service_option_sea')}</option>
                      <option value="Road Transport">{t('service_option_land')}</option>
                      <option value="Customs Clearance">{t('service_option_customs')}</option>
                      <option value="Warehousing">{t('service_option_warehouse')}</option>
                      <option value="Other">{t('service_option_other')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      {t('contact_message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
                      {t('contact_success')}
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
                      {t('contact_error')}
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-6 py-4 rounded-lg transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 rtl:space-x-reverse"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{isSubmitting ? t('contact_submitting') : t('contact_submit')}</span>
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
