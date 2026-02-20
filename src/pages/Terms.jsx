import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';
import FloatingElements from '../components/FloatingElements';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <div>
      <SEO
        title="Kullanım Şartları"
        description="Egebey Yem Fabrikası web sitesi kullanım şartları ve koşulları."
        keywords="kullanım şartları, kullanım koşulları, Egebey Yem"
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
              <span className="text-white">Kullanım Şartları</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Kullanım Şartları</h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection effect="fade-up">
            <div className="prose prose-lg max-w-none text-dark-light leading-relaxed space-y-8">

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">1. Genel Hükümler</h2>
                <p>
                  Bu web sitesi Egebey Yem Fabrikası tarafından işletilmektedir. Siteyi kullanarak
                  aşağıdaki şartları kabul etmiş sayılırsınız. Bu şartları kabul etmiyorsanız
                  lütfen siteyi kullanmayınız.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">2. Fikri Mülkiyet Hakları</h2>
                <p>
                  Bu web sitesindeki tüm içerik, görseller, logolar, tasarımlar ve metinler Egebey Yem
                  Fabrikası'na aittir. İzinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır.
                  Egebey Yem markası ve logosu tescilli marka olup izinsiz kullanılamaz.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">3. Site İçeriği</h2>
                <p>
                  Web sitesinde yer alan ürün bilgileri, besin değerleri ve teknik veriler bilgilendirme
                  amaçlıdır. Ürün formülasyonları ve içerikleri önceden haber verilmeksizin
                  değiştirilebilir. Güncel ve detaylı bilgi için bizimle iletişime geçmenizi öneririz.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">4. Kullanıcı Sorumlulukları</h2>
                <p>Siteyi kullanırken aşağıdaki kurallara uymanız gerekmektedir:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Siteyi yasal amaçlarla kullanmak</li>
                  <li>İletişim formunda doğru ve güncel bilgi vermek</li>
                  <li>Sitenin güvenliğini tehlikeye atacak eylemlerden kaçınmak</li>
                  <li>Otomatik veri toplama araçları kullanmamak</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">5. Sorumluluk Sınırlaması</h2>
                <p>
                  Egebey Yem Fabrikası, web sitesindeki bilgilerin doğruluğunu sağlamak için azami
                  özeni göstermekle birlikte, içerikteki olası hata veya eksikliklerden dolayı
                  sorumluluk kabul etmez. Site üzerinden verilen bilgiler profesyonel veteriner
                  veya zootekni danışmanlığının yerini tutmaz.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">6. Harici Bağlantılar</h2>
                <p>
                  Web sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin
                  içeriklerinden ve gizlilik uygulamalarından Egebey Yem Fabrikası sorumlu değildir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">7. Değişiklikler</h2>
                <p>
                  Egebey Yem Fabrikası, bu kullanım şartlarını önceden haber vermeksizin güncelleme
                  hakkını saklı tutar. Güncellemeler yayınlandığı andan itibaren geçerli olur.
                  Siteyi kullanmaya devam etmeniz, güncellenmiş şartları kabul ettiğiniz anlamına gelir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">8. Uygulanacak Hukuk</h2>
                <p>
                  Bu kullanım şartları Türkiye Cumhuriyeti kanunlarına tabidir. Herhangi bir
                  uyuşmazlık durumunda Aksaray Mahkemeleri ve İcra Daireleri yetkilidir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">9. İletişim</h2>
                <p>
                  Kullanım şartları hakkında sorularınız için:
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

export default Terms;
