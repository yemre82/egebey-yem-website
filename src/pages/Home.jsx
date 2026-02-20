import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  GiWheat, GiShield, GiFallingLeaf, GiStarMedal,
  GiChemicalDrop, GiFactory, GiMicroscope, GiEcology,
} from 'react-icons/gi';
import { FaTruck, FaHandshake, FaAward, FaSeedling } from 'react-icons/fa';
import { HiArrowRight, HiChevronDown } from 'react-icons/hi';
import AnimatedSection, { StaggerItem } from '../components/AnimatedSection';
import CountUp from '../components/CountUp';
import FloatingElements from '../components/FloatingElements';
import TextReveal from '../components/animations/TextReveal';
import MagneticButton from '../components/animations/MagneticButton';
import TiltCard from '../components/animations/TiltCard';
import { products } from '../data/products';
import SEO from '../components/SEO';

import factoryAerial from '../assets/factory-aerial.jpeg';
import farmerWithCow from '../assets/farmer-with-cow.jpeg';
import productBags from '../assets/product-bags.jpeg';
import milkingCow from '../assets/milking-cow.jpeg';
import sheepFarmer from '../assets/sheep-farmer.jpeg';
import calfProduct from '../assets/calf-product.jpeg';
import truckFleet from '../assets/truck-fleet.jpeg';
import goatBarn from '../assets/goat-barn.jpeg';
import factoryExterior from '../assets/factory-exterior.jpeg';

const highlights = [
  { icon: GiStarMedal, title: 'Üstün Kalite', desc: 'ISO standartlarında üretim ve sürekli kalite kontrol.' },
  { icon: GiShield, title: 'Güvenilirlik', desc: '2013\'ten bu yana süregelen tecrübe ve binlerce memnun müşteri.' },
  { icon: GiFallingLeaf, title: 'Doğallık', desc: '%100 doğal hammaddeler ile üretim garantisi.' },
  { icon: GiWheat, title: 'Deneyim', desc: 'Alanında uzman ekibimizle sürekli Ar-Ge çalışmaları.' },
];

const stats = [
  { value: 2013, suffix: '', label: 'Kuruluş Yılı' },
  { value: 500, suffix: '+', label: 'Mutlu Çiftçi' },
  { value: 30, suffix: '+', label: 'Ürün Çeşidi' },
  { value: 10000, suffix: '', label: 'Ton/Ay Kapasite' },
];

const whyUs = [
  { icon: FaSeedling, title: 'Doğal Hammadde', desc: 'Tüm ürünlerimizde doğal ve kontrollü hammaddeler kullanıyoruz.' },
  { icon: GiMicroscope, title: 'Ar-Ge Çalışmaları', desc: 'Sürekli araştırma ve geliştirme ile formüllerimizi iyileştiriyoruz.' },
  { icon: GiChemicalDrop, title: 'Laboratuvar Sistemi', desc: 'Kendi laboratuvarımızda her partide analiz yaparak kaliteyi garanti altına alıyoruz.' },
  { icon: GiFactory, title: 'Modern Üretim', desc: 'Aylık 10.000 ton kapasiteli modern üretim hatlarıyla yüksek verimli üretim.' },
  { icon: FaTruck, title: 'Saha Satış Ekibi', desc: 'Profesyonel saha satış ekibimizle çiftçilerimize yerinde hizmet sunuyoruz.' },
  { icon: FaHandshake, title: 'Müşteri Memnuniyeti', desc: 'Satış sonrası destek ve teknik danışmanlık hizmeti sunuyoruz.' },
];

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  return (
    <div>
      <SEO
        title="Ana Sayfa"
        description="Egebey Yem Fabrikası - Aksaray Ortaköy'de 2013'ten bu yana aylık 10.000 ton kapasiteyle besi yemi, süt yemi, buzağı yemi ve kanatlı yemi üretimi. 30+ ürün çeşidi ile Türkiye'nin güvenilir yem markası."
        keywords="yem, yem fabrikası, hayvan yemi, besi yemi, süt yemi, buzağı yemi, tavuk yemi, Aksaray yem, Ortaköy yem, Egebey Yem, kaliteli yem, doğal yem, yem üreticisi, yem satışı, yem fiyatları"
      />
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={factoryAerial}
            alt="Egebey Yem Fabrikası"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/70 to-primary-700/60" />
        </div>
        <FloatingElements />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6 shimmer">
              2013'ten Bu Yana Kaliteli Yem Üretimi
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <TextReveal text="Doğadan Sofraya, Kaliteli Yem Üretimi" delay={0.4} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Büyükbaş, küçükbaş, kanatlı ve özel yem çözümleriyle
            hayvanlarınızın sağlığını ve verimliliğini en üst düzeye çıkarıyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton>
              <Link
                to="/urunler"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 text-lg"
              >
                Ürünlerimizi Keşfedin
                <HiArrowRight />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to="/iletisim"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Bize Ulaşın
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <HiChevronDown className="text-white/60 text-3xl" />
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection effect="blur-in" className="text-center mb-12">
            <h2 className="heading-primary mb-4">Neden Egebey?</h2>
            <p className="text-body max-w-2xl mx-auto">
              Kalite, güven ve doğallığı bir arada sunan değerlerimizle fark yaratıyoruz.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <StaggerItem key={i}>
                <TiltCard tiltIntensity={10}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="card p-6 text-center border border-primary-100 hover:border-primary-300 glow-hover"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4"
                    >
                      <item.icon className="text-2xl text-primary-600" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-primary-700 mb-2">{item.title}</h3>
                    <p className="text-sm text-dark-light">{item.desc}</p>
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* About Short */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection effect="slide-rotate">
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Hakkımızda</span>
              <h2 className="heading-primary mt-2 mb-6">
                Türkiye'nin Güvenilir Yem Üreticisi
              </h2>
              <p className="text-body mb-4">
                Egebey Yem Fabrikası olarak 2013'ten bu yana Aksaray'dan
                tüm Türkiye'ye kaliteli ve doğal yem ürünleri sunuyoruz. Aylık 10.000 ton
                kapasiteli modern tesislerimizde, uluslararası standartlarda üretim yapıyoruz.
              </p>
              <p className="text-body mb-8">
                Hayvan sağlığını ve çiftçi memnuniyetini ön planda tutarak, sürekli Ar-Ge
                çalışmalarımızla ürün gamımızı geliştiriyoruz.
              </p>
              <MagneticButton>
                <Link to="/hakkimizda" className="btn-primary">
                  Daha Fazla Bilgi
                  <HiArrowRight />
                </Link>
              </MagneticButton>
            </AnimatedSection>

            <AnimatedSection effect="fade-scale">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="rounded-3xl aspect-[4/3] overflow-hidden shadow-2xl"
                >
                  <img
                    src={factoryExterior}
                    alt="Egebey Yem Modern Üretim Tesisi"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: 0.3 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center">
                    <FaAward className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-primary-700">ISO 9001</p>
                    <p className="text-xs text-dark-light">Sertifikalı Üretim</p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Product Categories Slider */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection effect="blur-in" className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Ürünlerimiz</span>
            <h2 className="heading-primary mt-2 mb-4">Geniş Ürün Yelpazemiz</h2>
            <p className="text-body max-w-2xl mx-auto">
              Her hayvan türü için özel olarak formüle edilmiş, bilimsel temelli yem çözümlerimizi keşfedin.
            </p>
          </AnimatedSection>

          <AnimatedSection effect="fade-up">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="pb-12"
            >
              {products.slice(0, 8).map((product) => (
                <SwiperSlide key={product.id}>
                  <Link to="/urunler" className="block">
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="card border border-primary-100 hover:border-primary-300 glow-hover"
                    >
                      <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                        {product.image ? (
                          <motion.img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain p-3"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.4 }}
                          />
                        ) : (
                          <GiWheat className="text-5xl text-primary-300 opacity-40" />
                        )}
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-primary-500 font-semibold mb-1">{product.category}</p>
                        <h3 className="font-bold text-primary-700">{product.name}</h3>
                        <p className="text-sm text-dark-light mt-1 line-clamp-2">{product.shortDesc}</p>
                      </div>
                    </motion.div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimatedSection>

          <AnimatedSection effect="spring-up" className="text-center mt-4">
            <MagneticButton>
              <Link to="/urunler" className="btn-outline">
                Tüm Ürünleri Gör
                <HiArrowRight />
              </Link>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding gradient-bg text-white relative overflow-hidden">
        <FloatingElements />
        <div className="container-custom relative z-10">
          <AnimatedSection effect="zoom-blur" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Rakamlarla Egebey</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Başarılarımızı rakamlarla ifade ediyoruz.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger staggerDelay={0.12} className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-white/80 font-medium">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery / Showcase */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <AnimatedSection effect="blur-in" className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Galeri</span>
            <h2 className="heading-primary mt-2 mb-4">Sahadan Kareler</h2>
            <p className="text-body max-w-2xl mx-auto">
              Çiftçilerimizden, tesislerimizden ve ürünlerimizden görüntüler.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
            {[
              { src: productBags, alt: 'Egebey Yem Ürün Çeşitleri', span: 'col-span-2' },
              { src: farmerWithCow, alt: 'Çiftçimiz ve Egebey Besi Yemi', span: 'row-span-2' },
              { src: milkingCow, alt: 'Süt Sağımında Egebey Süt Yemi', span: '' },
              { src: sheepFarmer, alt: 'Küçükbaş Hayvancılıkta Egebey', span: '' },
              { src: calfProduct, alt: 'Buzağı Büyütme Tomurcuk', span: '' },
              { src: truckFleet, alt: 'Egebey Yem Lojistik Filosu', span: 'col-span-2' },
              { src: goatBarn, alt: 'Keçi Çiftliğinde Egebey Yem', span: '' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                className={`relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer ${item.span}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection effect="blur-in" className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Avantajlarımız</span>
            <h2 className="heading-primary mt-2 mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="text-body max-w-2xl mx-auto">
              Kaliteli üretim sürecimiz ve müşteri odaklı yaklaşımımızla fark yaratıyoruz.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <StaggerItem key={i}>
                <TiltCard tiltIntensity={8}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="card p-6 border border-primary-100 hover:border-primary-300 glow-hover"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4"
                    >
                      <item.icon className="text-xl text-primary-600" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-primary-700 mb-2">{item.title}</h3>
                    <p className="text-sm text-dark-light">{item.desc}</p>
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection effect="zoom-blur">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            >
              <GiEcology className="text-5xl text-white/30 mx-auto mb-6" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Hayvanlarınız İçin En İyisi
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Ücretsiz teknik danışmanlık ve ürün önerileri için hemen bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Link
                  to="/iletisim"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all duration-300 text-lg"
                >
                  İletişime Geçin
                  <HiArrowRight />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  to="/urunler"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
                >
                  Ürünleri İnceleyin
                </Link>
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
