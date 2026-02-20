import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import logoImg from '../assets/IMG_6729.PNG';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src={logoImg}
                alt="Egebey Yem"
                className="h-16 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-primary-200/80 text-sm leading-relaxed mb-6">
              2013'ten bu yana doğal ve kaliteli yem üretiminde
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
                <div>
                  <a href="tel:03823512298" className="text-primary-200/80 text-sm hover:text-white transition-colors block">
                    0382 351 22 98
                  </a>
                  <a href="tel:05465830001" className="text-primary-200/80 text-sm hover:text-white transition-colors block">
                    0546 583 00 01
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <HiMail className="text-primary-400 text-lg shrink-0" />
                <a href="mailto:egebeyyem@hotmail.com" className="text-primary-200/80 text-sm hover:text-white transition-colors">
                  egebeyyem@hotmail.com
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
            <Link to="/gizlilik" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link to="/kullanim-sartlari" className="hover:text-white transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
