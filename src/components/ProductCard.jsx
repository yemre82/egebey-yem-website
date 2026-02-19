import { motion } from 'framer-motion';
import { GiWheat } from 'react-icons/gi';
import TiltCard from './animations/TiltCard';

const categoryColors = {
  'Besi Yemlerimiz': 'bg-red-100 text-red-800',
  'Süt Yemlerimiz': 'bg-green-100 text-green-800',
  'Buzağı Yemlerimiz': 'bg-blue-100 text-blue-800',
  'Kanatlı Yemlerimiz': 'bg-amber-100 text-amber-800',
};

const ProductCard = ({ product, onClick, index = 0 }) => {
  return (
    <TiltCard>
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5, delay: index * 0.06 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="card cursor-pointer group"
        onClick={() => onClick(product)}
      >
        <div className="h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="text-center text-primary-400">
              <GiWheat className="text-5xl mx-auto mb-2 opacity-40" />
              <p className="text-xs opacity-40 font-medium">{product.name}</p>
            </div>
          )}
          <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/5 transition-all duration-300" />
        </div>
        <div className="p-5">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[product.category] || 'bg-gray-100 text-gray-800'}`}>
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-primary-700 mt-3 mb-2 group-hover:text-primary-500 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-dark-light line-clamp-2">{product.shortDesc}</p>
          {product.weight && (
            <span className="inline-block mt-2 text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-lg">
              {product.weight}
            </span>
          )}
          <div className="mt-3 flex items-center text-primary-500 text-sm font-semibold group-hover:text-primary-600 transition-colors">
            Detayları Gör
            <motion.svg
              className="w-4 h-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: 4 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
};

export default ProductCard;
