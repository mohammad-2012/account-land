import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  onUpdateProduct,
  onCancelEdit,
  onToggleActive,
  onDeleteProduct,
  editingProductId,
  setEditingProduct,
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:gap-4">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isEditing={editingProductId === product.id}
          onEdit={setEditingProduct}
          onUpdate={onUpdateProduct}
          onCancel={onCancelEdit}
          onToggleActive={onToggleActive}
          onDelete={onDeleteProduct}
        />
      ))}
    </div>
  );
}
