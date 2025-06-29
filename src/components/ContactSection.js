// 📞 CONTACT SECTION - Elegant contact information with premium styling
import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG, DESIGN_CONFIG } from '../config/siteContent';

const ContactSection = () => {
  const { contact, colors } = SITE_CONFIG;
  const { typography } = DESIGN_CONFIG;

  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.dark} 100%)`
      }}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${contact.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${colors.secondary}90 0%, ${colors.dark}90 100%)`
        }}
      />

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 0]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + i * 12}%`,
              width: '30px',
              height: '30px',
              background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
              borderRadius: '50%'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 
              className={`${typography.heading} mb-4`}
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.cream} 50%, ${colors.primary} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {contact.title}
            </h2>
            <p 
              className={`${typography.body} max-w-2xl mx-auto`}
              style={{ color: colors.cream }}
            >
              {contact.subtitle}
            </p>
          </motion.div>

          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className={`${DESIGN_CONFIG.glassMorphism.blur} ${DESIGN_CONFIG.glassMorphism.opacity} bg-white ${DESIGN_CONFIG.glassMorphism.border} rounded-3xl p-12 max-w-2xl mx-auto`}
            style={{
              background: `linear-gradient(135deg, ${colors.white}10 0%, ${colors.cream}10 100%)`,
              boxShadow: `0 25px 50px ${colors.dark}50`
            }}
          >
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              {/* Avatar */}
              <div 
                className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  color: colors.white,
                  boxShadow: `0 15px 30px ${colors.primary}40`
                }}
              >
                {contact.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <h3 
                className={`${typography.subheading} mb-2`}
                style={{ color: colors.cream }}
              >
                {contact.name}
              </h3>
              <p 
                className="text-lg font-medium"
                style={{ color: colors.primary }}
              >
                Founder & Curator
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-6"
            >
              {/* Phone */}
              <motion.a
                href={`tel:${contact.phone}`}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: `0 10px 25px ${colors.primary}30`
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-4 p-4 rounded-2xl transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  color: colors.white
                }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-xl font-semibold">{contact.phone}</span>
              </motion.a>

              {/* Email (if provided) */}
              {contact.email && (
                <motion.a
                  href={`mailto:${contact.email}`}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: `${colors.cream}20`
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-4 p-4 rounded-2xl border-2 transition-all duration-300"
                  style={{
                    borderColor: colors.primary,
                    color: colors.cream
                  }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-lg">{contact.email}</span>
                </motion.a>
              )}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 pt-8 border-t"
              style={{ borderColor: `${colors.cream}30` }}
            >
              <p 
                className="text-lg italic"
                style={{ color: colors.cream }}
              >
                "Let's create extraordinary Diwali moments together"
              </p>
            </motion.div>
          </motion.div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-16 text-center"
          >
            <p 
              className="text-lg"
              style={{ color: colors.cream }}
            >
              © 2024 Premium Diwali Hampers. Crafted with ❤️ for celebrations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;