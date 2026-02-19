import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { GiChemicalDrop, GiMeal } from 'react-icons/gi';
import { MdTipsAndUpdates } from 'react-icons/md';

const contentStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const contentItem = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 100, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: 60, rotateX: 4, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ perspective: 1200 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-72 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden"
            >
              {product.image ? (
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', delay: 0.2, stiffness: 200 }}
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain p-4"
                />
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="text-center text-primary-400"
                >
                  <span className="text-7xl block mb-2">📦</span>
                  <p className="text-sm opacity-50">{product.name}</p>
                </motion.div>
              )}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <IoClose size={24} />
              </motion.button>
            </motion.div>

            <motion.div
              variants={contentStagger}
              initial="hidden"
              animate="visible"
              className="p-6 md:p-8"
            >
              <motion.div variants={contentItem} className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-100 text-primary-700">
                    {product.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mt-3">
                    {product.name}
                  </h2>
                </div>
              </motion.div>

              <motion.p variants={contentItem} className="text-dark-light leading-relaxed mb-6">
                {product.description}
              </motion.p>

              <div className="space-y-6">
                <motion.div variants={contentItem} className="bg-primary-50 rounded-xl p-5">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-primary-700 mb-3">
                    <GiChemicalDrop className="text-primary-500" />
                    Besin Değerleri
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.nutrition && Object.entries(product.nutrition).map(([key, value]) => (
                      <div key={key} className="flex justify-between bg-white rounded-lg p-3">
                        <span className="text-sm text-dark-light">{key}</span>
                        <span className="text-sm font-semibold text-primary-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={contentItem} className="bg-amber-50 rounded-xl p-5">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-amber-700 mb-3">
                    <GiMeal className="text-amber-500" />
                    Kullanım Alanı
                  </h3>
                  <p className="text-dark-light text-sm">{product.usage}</p>
                </motion.div>

                <motion.div variants={contentItem} className="bg-blue-50 rounded-xl p-5">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-blue-700 mb-3">
                    <MdTipsAndUpdates className="text-blue-500" />
                    Kullanım Önerisi
                  </h3>
                  <p className="text-dark-light text-sm">{product.recommendation}</p>
                </motion.div>
              </div>

              <motion.button
                variants={contentItem}
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center mt-6"
              >
                Kapat
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
