import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Target, Eye, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

function FounderVision() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullVision = `A Message from the Founder

“When I first entered the world of logistics, I noticed something missing — the human touch. Freight was being moved, but the connection was being lost. Behind every shipment lies a person, a dream, a promise waiting to be fulfilled. I wanted to build a company that never forgets that.”

Al Reyada Al Kubra Freight Broker L.L.C. was founded on that very belief — that logistics should go beyond routes and rates; it should be about trust, transparency, and care.

From our humble beginnings to becoming a reliable partner in freight and logistics, our journey has been driven by one clear mission: to ensure every client feels valued, every shipment is handled with precision, and every delivery strengthens trust.

Today, our passionate team continues to move goods across regions with the same dedication that started it all — combining innovative logistics solutions with genuine human connection. We believe in clear communication, fair partnerships, and services that serve people — not just systems.

The world never stops moving, and neither do we — forward, responsibly, and with heart. Because at Al Reyada Al Kubra Freight Broker L.L.C., we don’t just deliver cargo. We deliver trust.

— Kenza Zekraoui Hassani
Founder & Managing Director`;

  const shortVision = fullVision.split('\n').slice(0, 6).join('\n') + '...';

  return (
    <div className="text-gray-400 leading-relaxed text-lg">
      <p className="mb-4 whitespace-pre-line">
        {isExpanded ? fullVision : shortVision}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
      >
        <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
    </div>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Header Section */}
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
            About Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto"></div>
        </motion.div>
      </section>

      {/* Founder Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-xl border border-yellow-600/20"
      >
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 rtl:space-x-reverse">
          <div className="flex-shrink-0">
            <img
              src="/founder.jpeg"
              alt="Founder"
              className="w-80 h-96 object-cover border-4 border-yellow-400 rounded-lg"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Founder</h2>
            <FounderVision />
          </div>
        </div>
      </motion.div>

      {/* Mission & Vision */}
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
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                At Al Reyada Al Kubra Freight Broker L.L.C., our mission is to bridge global markets 
                through reliable, efficient, and customer-centered freight solutions. We are committed 
                to simplifying logistics with transparency, speed, and a dedication to excellence — ensuring 
                every shipment arrives safely, on time, and with trust at its core.
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
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                We aim to redefine the logistics experience by combining technology, integrity, and human 
                values. Our vision is to be the region’s most trusted freight partner — empowering businesses, 
                connecting continents, and creating a sustainable future for global trade.
              </p>
            </motion.div>
          </div>

          {/* Experience Section */}
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
              <h2 className="text-3xl font-bold text-white">Our Experience</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              With over a decade of expertise in freight brokerage and logistics, Al Reyada Al Kubra has 
              built a strong reputation for reliability and professionalism. Our network spans across 
              continents, offering air, sea, and land freight solutions tailored to each client’s needs. 
              We take pride in our people, our technology, and our commitment to quality service that goes 
              beyond delivery — ensuring peace of mind every step of the way.
            </p>
          </motion.div>



          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">10+</div>
              <div className="text-gray-400">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <div className="text-gray-400">Global Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">500+</div>
              <div className="text-gray-400">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">24/7</div>
              <div className="text-gray-400">Customer Support</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
