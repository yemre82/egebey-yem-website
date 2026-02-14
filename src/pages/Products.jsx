import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import FloatingElements from '../components/FloatingElements';
import { products, categories } from '../data/products';

import productBags from '../assets/product-bags.jpeg';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProducts = activeCategory === 'Tümü'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={productBags} alt="Egebey Yem Ürünleri" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-800/70 to-primary-700/50" />
        </div>
        <FloatingElements />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                <HiHome /> Ana Sayfa
              </Link>
              <HiChevronRight />
              <span className="text-white">Ürünler</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Ürünlerimiz</h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              Her hayvan türü için özel olarak formüle edilmiş, bilimsel temelli yem çözümlerimiz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Tabs */}
          <AnimatedSection className="mb-10">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={handleProductClick}
                  index={i}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-dark-light text-lg">Bu kategoride ürün bulunamadı.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Products;
