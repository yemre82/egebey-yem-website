import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';
import FloatingElements from '../components/FloatingElements';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <div>
      <SEO
        title="Gizlilik Politikası"
        description="Egebey Yem Fabrikası gizlilik politikası - Kişisel verilerinizin korunması ve işlenmesi hakkında bilgilendirme."
        keywords="gizlilik politikası, KVKK, kişisel veri, Egebey Yem gizlilik"
      />

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700" />
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
              <span className="text-white">Gizlilik Politikası</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Gizlilik Politikası</h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection effect="fade-up">
            <div className="prose prose-lg max-w-none text-dark-light leading-relaxed space-y-8">

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">1. Genel Bilgi</h2>
                <p>
                  Egebey Yem Fabrikası olarak kişisel verilerinizin güvenliği konusunda büyük önem gösteriyoruz.
                  Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde toplanan bilgilerin nasıl kullanıldığını
                  ve korunduğunu açıklamaktadır. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında
                  veri sorumlusu olarak hareket etmekteyiz.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">2. Toplanan Bilgiler</h2>
                <p>Web sitemiz üzerinden aşağıdaki bilgiler toplanabilir:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>İletişim formunda paylaştığınız ad, soyad, e-posta, telefon ve mesaj bilgileri</li>
                  <li>Web sitesi ziyaret istatistikleri (anonim olarak)</li>
                  <li>Tarayıcı türü, IP adresi ve erişim zamanı gibi teknik bilgiler</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">3. Bilgilerin Kullanımı</h2>
                <p>Toplanan bilgiler yalnızca aşağıdaki amaçlarla kullanılmaktadır:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>İletişim taleplerinize yanıt vermek</li>
                  <li>Ürün ve hizmetlerimiz hakkında bilgilendirme yapmak</li>
                  <li>Web sitemizi geliştirmek ve kullanıcı deneyimini iyileştirmek</li>
                  <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">4. Bilgilerin Paylaşımı</h2>
                <p>
                  Kişisel verileriniz üçüncü taraflarla paylaşılmaz, satılmaz veya kiralanmaz.
                  Yasal zorunluluklar dışında bilgileriniz gizli tutulur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">5. Çerezler (Cookies)</h2>
                <p>
                  Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerez kullanabilir.
                  Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz. Çerezler kişisel
                  bilgilerinizi içermez.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">6. Veri Güvenliği</h2>
                <p>
                  Kişisel verilerinizin güvenliğini sağlamak için gerekli teknik ve idari tedbirler
                  alınmaktadır. SSL sertifikası ile verileriniz şifreli olarak iletilmektedir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">7. Haklarınız</h2>
                <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>İşlenmiş ise buna ilişkin bilgi talep etme</li>
                  <li>Verilerin düzeltilmesini veya silinmesini isteme</li>
                  <li>İşlemenin kısıtlanmasını talep etme</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">8. İletişim</h2>
                <p>
                  Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                </p>
                <ul className="list-none space-y-1 mt-3">
                  <li><strong>E-posta:</strong> egebeyyem@hotmail.com</li>
                  <li><strong>Telefon:</strong> 0382 351 22 98</li>
                  <li><strong>Adres:</strong> Ortaköy Organize Sanayi Bölgesi, Ortaköy / Aksaray</li>
                </ul>
              </div>

              <p className="text-sm text-dark-light/60 pt-4 border-t border-primary-100">
                Son güncelleme: Şubat 2026
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
