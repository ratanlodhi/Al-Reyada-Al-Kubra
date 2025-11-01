import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const whatsappNumber = '971XXXXXXXXX';
  const message = 'Hello! I would like to inquire about your freight services.';

  const handleClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 ltr:right-6 rtl:left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
  );
}
