import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GiWheat, GiChemicalDrop, GiFactory, GiMicroscope,
  GiCardboardBox, GiCheckMark,
} from 'react-icons/gi';
import { FaTruck, FaFlask, FaCogs, FaClipboardCheck } from 'react-icons/fa';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import AnimatedSection, { StaggerItem } from '../components/AnimatedSection';
import CountUp from '../components/CountUp';
import FloatingElements from '../components/FloatingElements';
import TiltCard from '../components/animations/TiltCard';

const processSteps = [
  {
    icon: GiWheat,
    title: 'Hammadde Seçimi',
    desc: 'Tedarikçilerimizden gelen hammaddeler titizlikle seçilir. Kalite kriterlerimize uymayan hammaddeler kabul edilmez.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: FaFlask,
    title: 'Laboratuvar Analizi',
    desc: 'Her gelen hammadde partisi laboratuvarımızda detaylı analize tabi tutulur. Besin değerleri, toksin ve kalite testleri yapılır.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: FaCogs,
    title: 'Üretim',
    desc: 'Modern üretim hatlarımızda, bilgisayar kontrollü sistemlerle hassas formülasyonla yem üretimi gerçekleştirilir.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: FaClipboardCheck,
    title: 'Kalite Kontrol',
    desc: 'Üretilen her parti, son kontrol laboratuvarımızda test edilir. Standartlara uygun olmayan ürünler sevk edilmez.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: GiCardboardBox,
    title: 'Paketleme',
    desc: 'Ürünler hijyenik koşullarda, uygun ambalajlarla paketlenir. Etiketleme ve lot takibi yapılır.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: FaTruck,
    title: 'Dağıtım',
    desc: 'Lojistik ağımız ile ürünler en kısa sürede, uygun koşullarda müşterilerimize ulaştırılır.',
    color: 'bg-teal-100 text-teal-600',
  },
];

const qualityItems = [
  { icon: GiMicroscope, title: 'Laboratuvar Testleri', desc: 'Her partide mikotoksin, ağır metal ve besin değeri analizleri' },
  { icon: GiCheckMark, title: 'HACCP Sistemi', desc: 'Tehlike analizi ve kritik kontrol noktaları sürekli izlenir' },
  { icon: GiChemicalDrop, title: 'Formül Doğrulama', desc: 'Bilgisayar kontrollü tartım ve karışım doğrulama sistemi' },
  { icon: FaClipboardCheck, title: 'İzlenebilirlik', desc: 'Hammaddeden son ürüne kadar tam lot takip sistemi' },
];

const capacityStats = [
  { value: 10000, suffix: '+', label: 'Ton/Yıl Kapasite' },
  { value: 50, suffix: '+', label: 'Ürün Çeşidi' },
  { value: 3, suffix: '', label: 'Üretim Hattı' },
  { value: 24, suffix: '/7', label: 'Üretim Süresi' },
];

const Production = () => {
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
              <span className="text-white">Üretim & Kalite</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Üretim & Kalite</h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              Modern üretim sürecimiz ve sıkı kalite kontrol standartlarımızla tanışın.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Production Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection effect="blur-in" className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Sürecimiz</span>
            <h2 className="heading-primary mt-2 mb-4">Üretim Süreci</h2>
            <p className="text-body max-w-2xl mx-auto">
              Hammaddeden son ürüne kadar her aşamada kaliteyi garanti altına alıyoruz.
            </p>
          </AnimatedSection>

          <div className="relative">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1} effect={i % 2 === 0 ? 'fade-up' : 'blur-in'}>
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{ rotate: -30, scale: 0.8 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shrink-0 shadow-md`}
                    >
                      <step.icon className="text-2xl" />
                    </motion.div>
                    {i < processSteps.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-0.5 h-8 bg-primary-200 mt-2 origin-top"
                      />
                    )}
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-primary-500 bg-primary-50 px-3 py-1 rounded-full">
                        Adım {i + 1}
                      </span>
                      <h3 className="text-xl font-bold text-primary-700">{step.title}</h3>
                    </div>
                    <p className="text-dark-light max-w-xl">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection effect="blur-in" className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Kalite Güvence</span>
            <h2 className="heading-primary mt-2 mb-4">Kalite Kontrol Sistemimiz</h2>
            <p className="text-body max-w-2xl mx-auto">
              Her aşamada uygulanan sıkı kalite kontrol süreçleriyle ürün güvenliğini garanti altına alıyoruz.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityItems.map((item, i) => (
              <StaggerItem key={i}>
                <TiltCard tiltIntensity={8}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="card p-6 flex items-start gap-5 border border-primary-100 hover:border-primary-300 glow-hover"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center shrink-0"
                    >
                      <item.icon className="text-xl text-primary-600" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-primary-700 mb-2">{item.title}</h3>
                      <p className="text-dark-light text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Factory Capacity */}
      <section className="section-padding gradient-bg text-white relative overflow-hidden">
        <FloatingElements />
        <div className="container-custom relative z-10">
          <AnimatedSection effect="zoom-blur" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Fabrika Kapasitemiz</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Modern tesisimizde yüksek kapasiteli, kesintisiz üretim yapıyoruz.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger staggerDelay={0.12} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {capacityStats.map((stat, i) => (
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

      {/* R&D */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection effect="fade-scale">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl aspect-[4/3] flex items-center justify-center"
              >
                <div className="text-center text-primary-700">
                  <GiMicroscope className="text-7xl mx-auto mb-4 opacity-50" />
                  <p className="font-semibold text-lg opacity-60">Ar-Ge Laboratuvarı</p>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection effect="slide-rotate">
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Araştırma & Geliştirme</span>
              <h2 className="heading-primary mt-2 mb-6">Ar-Ge Çalışmalarımız</h2>
              <p className="text-body mb-4">
                Bünyemizdeki Ar-Ge merkezimizde, alanında uzman veteriner hekimler, zootekni
                mühendisleri ve gıda mühendislerinden oluşan ekibimiz ile sürekli yeni formüller
                geliştiriyoruz.
              </p>
              <p className="text-body mb-6">
                Hayvan besleme bilimindeki en son gelişmeleri takip ederek, ürünlerimizi sürekli
                iyileştiriyoruz. Üniversiteler ve araştırma kurumları ile işbirliği yaparak
                bilimsel temelli çözümler sunuyoruz.
              </p>

              <div className="space-y-3">
                {[
                  'Yeni ürün formülasyonu ve geliştirme',
                  'Mevcut ürün optimizasyonu',
                  'Hammadde alternatifi araştırmaları',
                  'Hayvan besleme denemeleri',
                  'Akademik işbirlikleri ve projeler',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0"
                    >
                      <GiCheckMark className="text-xs text-primary-600" />
                    </motion.div>
                    <span className="text-dark-light">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Production;
