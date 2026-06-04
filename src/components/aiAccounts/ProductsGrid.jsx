import ProductCard from "./ProductCard";

const ProductsGrid = ({ products, darkModeShadow, isDarkMode }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="animate-fadeInUp"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <ProductCard
            product={product}
            darkModeShadow={darkModeShadow}
            isDarkMode={isDarkMode}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
