import { Link } from 'react-router-dom';
import { GiWheat } from 'react-icons/gi';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center">
                <GiWheat className="text-xl text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Egebey</span>
                <span className="text-xs block -mt-1 text-primary-300">Yem Fabrikası</span>
              </div>
            </Link>
            <p className="text-primary-200/80 text-sm leading-relaxed mb-6">
              25 yılı aşkın tecrübemizle, doğal ve kaliteli yem üretiminde
              Türkiye'nin güvenilir markası olmaya devam ediyoruz.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-800 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Hızlı Linkler</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Ana Sayfa', path: '/' },
                { name: 'Hakkımızda', path: '/hakkimizda' },
                { name: 'Ürünler', path: '/urunler' },
                { name: 'Üretim & Kalite', path: '/uretim' },
                { name: 'İletişim', path: '/iletisim' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-200/80 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Ürünlerimiz</h3>
            <ul className="space-y-2.5">
              {['Büyükbaş Yem', 'Küçükbaş Yem', 'Kanatlı Yem', 'Özel Yemler'].map((item) => (
                <li key={item}>
                  <Link
                    to="/urunler"
                    className="text-primary-200/80 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="text-primary-400 text-lg mt-0.5 shrink-0" />
                <span className="text-primary-200/80 text-sm">
                  Ortaköy Organize Sanayi Bölgesi, Ortaköy / Aksaray
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="text-primary-400 text-lg shrink-0" />
                <a href="tel:+903821234567" className="text-primary-200/80 text-sm hover:text-white transition-colors">
                  +90 (382) 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiMail className="text-primary-400 text-lg shrink-0" />
                <a href="mailto:info@egebeyyem.com" className="text-primary-200/80 text-sm hover:text-white transition-colors">
                  info@egebeyyem.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-300/60 text-sm">
            &copy; {new Date().getFullYear()} Egebey Yem Fabrikası. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm text-primary-300/60">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
