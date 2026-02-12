import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HiHome, HiChevronRight, HiLocationMarker,
  HiPhone, HiMail, HiClock,
} from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import AnimatedSection, { StaggerItem } from '../components/AnimatedSection';
import FloatingElements from '../components/FloatingElements';
import TiltCard from '../components/animations/TiltCard';

const contactInfo = [
  {
    icon: HiLocationMarker,
    title: 'Adres',
    lines: ['Ortaköy Organize Sanayi Bölgesi', 'Ortaköy / Aksaray'],
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: HiPhone,
    title: 'Telefon',
    lines: ['+90 (382) 123 45 67', '+90 (382) 123 45 68'],
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: HiMail,
    title: 'E-posta',
    lines: ['info@egebeyyem.com', 'satis@egebeyyem.com'],
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: HiClock,
    title: 'Çalışma Saatleri',
    lines: ['Pazartesi - Cuma: 08:00 - 18:00', 'Cumartesi: 09:00 - 14:00', 'Pazar: Kapalı'],
    color: 'bg-purple-100 text-purple-600',
  },
];

const confettiPieces = Array.from({ length: 20 }, (_, i) => ({
  x: Math.random() * 300 - 150,
  y: -(Math.random() * 200 + 100),
  rotate: Math.random() * 720 - 360,
  delay: Math.random() * 0.3,
  color: ['#40916C', '#52B788', '#95D5B2', '#D8F3DC', '#FFD700'][i % 5],
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'İsim alanı zorunludur.';
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta alanı zorunludur.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon alanı zorunludur.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Konu alanı zorunludur.';
    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj alanı zorunludur.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalıdır.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const inputClasses = (field) =>
    `w-full px-4 py-3 rounded-xl border transition-all duration-300 text-dark ${
      errors[field]
        ? 'border-red-300 bg-red-50'
        : focusedField === field
        ? 'border-primary-400 bg-white ring-2 ring-primary-400/30 shadow-md shadow-primary-500/10'
        : 'border-primary-200 bg-white'
    } focus:outline-none`;

  return (
    <div>
      {/* Hero Banner */}
      <section className="page-hero">
        <FloatingElements />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                <HiHome /> Ana Sayfa
              </Link>
              <HiChevronRight />
              <span className="text-white">İletişim</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">İletişim</h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              Sorularınız, önerileriniz ve siparişleriniz için bize ulaşın.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, i) => (
              <StaggerItem key={i}>
                <TiltCard tiltIntensity={10}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="card p-6 text-center border border-primary-100 hover:border-primary-300 glow-hover"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      className={`w-14 h-14 rounded-2xl ${info.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <info.icon className="text-2xl" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-primary-700 mb-3">{info.title}</h3>
                    {info.lines.map((line, j) => (
                      <p key={j} className="text-sm text-dark-light">{line}</p>
                    ))}
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            ))}
          </AnimatedSection>

          {/* Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AnimatedSection effect="slide-rotate">
              <div className="bg-secondary-50 rounded-2xl p-6 md:p-8">
                <h2 className="heading-secondary mb-2">Bize Yazın</h2>
                <p className="text-dark-light mb-6">
                  Formu doldurarak bize mesaj gönderin. En kısa sürede size dönüş yapacağız.
                </p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="bg-primary-100 rounded-xl p-8 text-center relative overflow-hidden"
                    >
                      {/* Confetti */}
                      {confettiPieces.map((piece, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                          animate={{
                            opacity: [1, 1, 0],
                            x: piece.x,
                            y: piece.y,
                            rotate: piece.rotate,
                            scale: [1, 1, 0.5],
                          }}
                          transition={{ duration: 1.5, delay: piece.delay, ease: 'easeOut' }}
                          className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full pointer-events-none"
                          style={{ backgroundColor: piece.color }}
                        />
                      ))}

                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', delay: 0.2 }}
                        className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center mx-auto mb-4"
                      >
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          />
                        </svg>
                      </motion.div>
                      <h3 className="text-xl font-bold text-primary-700 mb-2">Mesajınız Gönderildi!</h3>
                      <p className="text-dark-light">En kısa sürede sizinle iletişime geçeceğiz.</p>
                      <motion.button
                        onClick={() => setSubmitted(false)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary mt-4"
                      >
                        Yeni Mesaj Gönder
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      noValidate
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-primary-700 mb-1">Ad Soyad *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className={inputClasses('name')}
                            placeholder="Adınız Soyadınız"
                          />
                          {errors.name && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-xs mt-1"
                            >
                              {errors.name}
                            </motion.p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-primary-700 mb-1">E-posta *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className={inputClasses('email')}
                            placeholder="ornek@email.com"
                          />
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-xs mt-1"
                            >
                              {errors.email}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-primary-700 mb-1">Telefon *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            className={inputClasses('phone')}
                            placeholder="+90 (5XX) XXX XX XX"
                          />
                          {errors.phone && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-xs mt-1"
                            >
                              {errors.phone}
                            </motion.p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-primary-700 mb-1">Konu *</label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('subject')}
                            onBlur={() => setFocusedField(null)}
                            className={inputClasses('subject')}
                            placeholder="Mesajınızın konusu"
                          />
                          {errors.subject && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-xs mt-1"
                            >
                              {errors.subject}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-primary-700 mb-1">Mesaj *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          rows={5}
                          className={inputClasses('message')}
                          placeholder="Mesajınızı buraya yazın..."
                        />
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-xs mt-1"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary w-full justify-center"
                      >
                        Mesaj Gönder
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>

            <AnimatedSection effect="fade-scale">
              <div className="space-y-6">
                {/* Map Placeholder */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-primary-100 rounded-2xl h-80 flex items-center justify-center overflow-hidden"
                >
                  <div className="text-center text-primary-700">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <HiLocationMarker className="text-5xl mx-auto mb-3 opacity-50" />
                    </motion.div>
                    <p className="font-semibold opacity-60">Google Maps</p>
                    <p className="text-sm opacity-40">Ortaköy / Aksaray</p>
                  </div>
                </motion.div>

                {/* Working Hours */}
                <div className="card p-6 border border-primary-100">
                  <h3 className="text-lg font-bold text-primary-700 mb-4 flex items-center gap-2">
                    <HiClock className="text-primary-500" />
                    Çalışma Saatleri
                  </h3>
                  <div className="space-y-3">
                    {[
                      { day: 'Pazartesi - Cuma', hours: '08:00 - 18:00', active: true },
                      { day: 'Cumartesi', hours: '09:00 - 14:00', active: true },
                      { day: 'Pazar', hours: 'Kapalı', active: false },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between py-2 border-b border-primary-50 last:border-0"
                      >
                        <span className="text-dark-light font-medium">{item.day}</span>
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          item.active
                            ? 'bg-primary-100 text-primary-700'
                            : 'bg-red-100 text-red-600'
                        }`}>
                          {item.hours}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="card p-6 border border-primary-100">
                  <h3 className="text-lg font-bold text-primary-700 mb-4">Sosyal Medya</h3>
                  <div className="flex gap-3">
                    {[
                      { Icon: FaFacebookF, label: 'Facebook' },
                      { Icon: FaInstagram, label: 'Instagram' },
                      { Icon: FaTwitter, label: 'Twitter' },
                      { Icon: FaLinkedinIn, label: 'LinkedIn' },
                    ].map(({ Icon, label }, i) => (
                      <motion.a
                        key={label}
                        href="#"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -4, scale: 1.1 }}
                        className="w-11 h-11 rounded-xl bg-primary-100 hover:bg-primary-500 text-primary-600 hover:text-white flex items-center justify-center transition-all duration-300"
                        title={label}
                      >
                        <Icon />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
