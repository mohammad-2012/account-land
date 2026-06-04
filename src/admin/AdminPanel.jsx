import { useState } from "react";
import { useAdmin } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { FaBoxes, FaPlus } from "react-icons/fa";
import AdminHeader from "../components/admin/AdminHeader.jsx";
import AdminTabs from "../components/admin/AdminTabs.jsx";
import ProductForm from "../components/admin/ProductForm.jsx";
import ProductList from "../components/admin/ProductList.jsx";
import SettingsForm from "../components/admin/SettingsForm.jsx";

export default function AdminPanel() {
  const {
    allProducts,
    siteSettings,
    adminLogout,
    addProduct,
    updateProduct,
    deleteProduct,
    toggleProductActive,
    updateSiteSettings,
  } = useAdmin();

  const navigate = useNavigate();
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [activeTab, setActiveTab] = useState("products");
  const [newProduct, setNewProduct] = useState({
    category: "ai",
    name: "",
    price: "",
    oldPrice: "",
    badge: "",
    shortDesc: "",
    features: [],
    color: "from-blue-500 to-cyan-500",
    icon: null,
    iconColor: "#10a37f",
    purchaseLink: "",
    popular: false,
  });
  const [featureInput, setFeatureInput] = useState("");

  const handleLogout = () => {
    adminLogout();
    navigate("/");
  };

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setNewProduct({
        ...newProduct,
        features: [...newProduct.features, featureInput.trim()],
      });
      setFeatureInput("");
    }
  };

  const handleRemoveFeature = (index) => {
    setNewProduct({
      ...newProduct,
      features: newProduct.features.filter((_, i) => i !== index),
    });
  };

  const handleSubmitNewProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      alert("لطفاً نام و قیمت محصول را وارد کنید");
      return;
    }
    addProduct(newProduct);
    setShowAddForm(false);
    setNewProduct({
      category: "ai",
      name: "",
      price: "",
      oldPrice: "",
      badge: "",
      shortDesc: "",
      features: [],
      color: "from-blue-500 to-cyan-500",
      icon: null,
      iconColor: "#10a37f",
      purchaseLink: "",
      popular: false,
    });
  };

  const handleUpdateProduct = () => {
    if (editingProduct) {
      updateProduct(editingProduct.id, editingProduct);
      setEditingProduct(null);
    }
  };

  const handleCancelEdit = () => setEditingProduct(null);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <AdminHeader onLogout={handleLogout} />
      <div className="px-3 py-4 mx-auto sm:px-4 sm:py-6 md:px-6 max-w-7xl">
        <AdminTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          productsCount={allProducts?.length}
        />

        {activeTab === "products" && (
          <div>
            <div className="flex flex-col items-center justify-between gap-3 mb-4 sm:flex-row sm:mb-6">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 sm:text-2xl dark:text-white">
                <FaBoxes className="text-neon-cyan" />
                محصولات فروشگاه
              </h2>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-white transition-all rounded-xl sm:px-5 sm:py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md"
              >
                <FaPlus /> افزودن محصول جدید
              </button>
            </div>

            {showAddForm && (
              <ProductForm
                newProduct={newProduct}
                setNewProduct={setNewProduct}
                featureInput={featureInput}
                setFeatureInput={setFeatureInput}
                onAddFeature={handleAddFeature}
                onRemoveFeature={handleRemoveFeature}
                onSubmit={handleSubmitNewProduct}
                onCancel={() => setShowAddForm(false)}
              />
            )}

            <ProductList
              products={allProducts}
              onUpdateProduct={handleUpdateProduct}
              onCancelEdit={handleCancelEdit}
              onToggleActive={toggleProductActive}
              onDeleteProduct={deleteProduct}
              editingProductId={editingProduct?.id}
              setEditingProduct={setEditingProduct}
            />
          </div>
        )}

        {activeTab === "settings" && (
          <SettingsForm
            siteSettings={siteSettings}
            updateSiteSettings={updateSiteSettings}
          />
        )}
      </div>
    </div>
  );
}
