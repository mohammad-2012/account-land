const ProductImage = ({ product }) => {
  return (
    <div className="relative mb-6 overflow-hidden rounded-xl h-64">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4"
        onError={(e) => {
          e.target.src = `https://placehold.co/600x400/0891b2/white?text=${encodeURIComponent(product.name)}`;
        }}
      />
    </div>
  );
};

export default ProductImage;
