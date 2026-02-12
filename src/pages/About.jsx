import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GiStarMedal, GiShield, GiFallingLeaf, GiMicroscope,
} from 'react-icons/gi';
import { FaAward, FaCertificate, FaMedal } from 'react-icons/fa';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import AnimatedSection, { StaggerItem } from '../components/AnimatedSection';
import FloatingElements from '../components/FloatingElements';
import TiltCard from '../components/animations/TiltCard';

const timeline = [
  { year: '1998', title: 'Kuruluş', desc: 'Egebey Yem Fabrikası, Aksaray\'da küçük bir tesiste üretime başladı.' },
  { year: '2003', title: 'İlk Büyüme', desc: 'Üretim kapasitesi 2 katına çıkarıldı, yeni ürün hatları eklendi.' },
  { year: '2008', title: 'ISO Sertifikası', desc: 'ISO 9001 ve ISO 22000 kalite belgelerini almaya hak kazandık.' },
  { year: '2013', title: 'Modern Tesis', desc: 'Ortaköy OSB\'deki yeni modern üretim tesisimize taşınarak kapasitemizi 5 katına çıkardık.' },
  { year: '2018', title: 'Ar-Ge Merkezi', desc: 'Bünyemizde Ar-Ge merkezi kurarak inovatif ürün geliştirmeye başladık.' },
  { year: '2023', title: 'Pazar Lideri', desc: 'İç Anadolu Bölgesi\'nin en büyük yem üreticilerinden biri konumuna yükseldik.' },
];

const values = [
  { icon: GiStarMedal, title: 'Kalite', desc: 'Uluslararası standartlarda üretim yaparak ürünlerimizin kalitesini garanti altına alıyoruz.', color: 'bg-green-100 text-green-600' },
  { icon: GiShield, title: 'Güvenilirlik', desc: '25 yıllık tecrübemiz ve binlerce memnun müşterimizle güvenilir bir iş ortağıyız.', color: 'bg-blue-100 text-blue-600' },
  { icon: GiFallingLeaf, title: 'Sürdürülebilirlik', desc: 'Çevreye duyarlı üretim süreçlerimizle gelecek nesillere yaşanabilir bir dünya bırakıyoruz.', color: 'bg-amber-100 text-amber-600' },
  { icon: GiMicroscope, title: 'İnovasyon', desc: 'Sürekli Ar-Ge çalışmalarımızla sektörde yenilikçi ürünler geliştiriyoruz.', color: 'bg-purple-100 text-purple-600' },
];

const certificates = [
  { icon: FaAward, name: 'ISO 9001:2015', desc: 'Kalite Yönetim Sistemi' },
  { icon: FaCertificate, name: 'ISO 22000', desc: 'Gıda Güvenliği Yönetimi' },
  { icon: FaMedal, name: 'GMP+', desc: 'İyi Üretim Uygulamaları' },
  { icon: FaAward, name: 'HACCP', desc: 'Tehlike Analizi ve Kritik Kontrol' },
  { icon: FaCertificate, name: 'TSE Belgesi', desc: 'Türk Standartları Uygunluk' },
  { icon: FaMedal, name: 'Helal Sertifikası', desc: 'Helal Gıda Belgesi' },
];

const TimelineDot = ({ index, scrollYProgress }) => {
  const start = index * 0.12;
  const end = start + 0.08;
  const scale = useTransform(scrollYProgress, [start, end], [0, 1]);
  const dotOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.div
      style={{ scale, opacity: dotOpacity }}
      className="absolute left-4 md:left-1/2 w-5 h-5 bg-primary-500 rounded-full border-4 border-white shadow -translate-x-2.5 md:-translate-x-2.5 mt-2 z-10"
    />
  );
};

const About = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(timelineProgress, [0, 1], ['0%', '100%']);

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
              <span className="text-white">Hakkımızda</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Hakkımızda</h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              25 yılı aşkın tecrübemiz, misyonumuz ve değerlerimizle tanışın.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection effect="blur-in" className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Hikayemiz</span>
            <h2 className="heading-primary mt-2 mb-4">Kuruluştan Bugüne</h2>
            <p className="text-body max-w-2xl mx-auto">
              1998'den bu yana süregelen yolculuğumuzda attığımız her adım, kalite ve güven üzerine inşa edildi.
            </p>
          </AnimatedSection>

          <div ref={timelineRef} className="relative">
            {/* Animated draw line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-100 md:-translate-x-0.5">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-primary-400 origin-top"
              />
            </div>

            {timeline.map((item, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.1}
                effect={i % 2 === 0 ? 'slide-rotate' : 'fade-scale'}
              >
                <div className={`relative flex items-start gap-6 mb-10 md:mb-16 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block bg-primary-100 text-primary-700 font-bold text-lg px-4 py-1 rounded-full mb-2"
                    >
                      {item.year}
                    </motion.div>
                    <h3 className="text-xl font-bold text-primary-700 mb-2">{item.title}</h3>
                    <p className="text-dark-light">{item.desc}</p>
                  </div>

                  <TimelineDot index={i} scrollYProgress={timelineProgress} />

                  <div className="md:hidden pl-10">
                    <div className="inline-block bg-primary-100 text-primary-700 font-bold text-lg px-4 py-1 rounded-full mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-primary-700 mb-2">{item.title}</h3>
                    <p className="text-dark-light">{item.desc}</p>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection effect="slide-rotate">
              <TiltCard tiltIntensity={8}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="card p-8 border border-primary-100 hover:border-primary-300 h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                    <GiStarMedal className="text-2xl text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-700 mb-4">Misyonumuz</h3>
                  <p className="text-dark-light leading-relaxed">
                    Doğal ve bilimsel temelli yem çözümleri ile Türk hayvancılık sektörüne
                    katkıda bulunmak, çiftçilerimizin verimliliğini artırmak ve hayvan
                    sağlığını en üst düzeyde tutmak. Sürdürülebilir tarım uygulamalarını
                    destekleyerek geleceğe yatırım yapmak temel misyonumuzdur.
                  </p>
                </motion.div>
              </TiltCard>
            </AnimatedSection>

            <AnimatedSection effect="fade-scale">
              <TiltCard tiltIntensity={8}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="card p-8 border border-primary-100 hover:border-primary-300 h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                    <GiFallingLeaf className="text-2xl text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-700 mb-4">Vizyonumuz</h3>
                  <p className="text-dark-light leading-relaxed">
                    Türkiye'nin en güvenilir ve yenilikçi yem üreticisi olmak, uluslararası
                    standartlarda üretimimizle dünya pazarlarında söz sahibi olmak. Ar-Ge
                    yatırımlarımızla sektörde öncü konumda kalarak, hayvancılık sektörünün
                    gelişimine liderlik etmek hedefimizdir.
                  </p>
                </motion.div>
              </TiltCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection effect="blur-in" className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Temel İlkelerimiz</span>
            <h2 className="heading-primary mt-2 mb-4">Değerlerimiz</h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <StaggerItem key={i}>
                <TiltCard tiltIntensity={10}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="card p-6 text-center border border-primary-100 hover:border-primary-300 glow-hover"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <item.icon className="text-2xl" />
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

      {/* Certificates */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection effect="blur-in" className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Kalite Güvencesi</span>
            <h2 className="heading-primary mt-2 mb-4">Sertifika & Belgelerimiz</h2>
            <p className="text-body max-w-2xl mx-auto">
              Uluslararası geçerliliğe sahip sertifikalarımız, kalitemizin en büyük kanıtıdır.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger staggerDelay={0.06} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certificates.map((cert, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-all border border-primary-50 glow-hover"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <cert.icon className="text-3xl text-primary-500 mx-auto mb-3" />
                  </motion.div>
                  <h4 className="font-bold text-primary-700 text-sm mb-1">{cert.name}</h4>
                  <p className="text-xs text-dark-light">{cert.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
