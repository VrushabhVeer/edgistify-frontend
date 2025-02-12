import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addToCart, getProductById } from "../api/apis.js";
import { toast } from "react-toastify";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const { id } = useParams();
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data);
      } catch {
        toast.error("Failed to fetch product details");
        navigate("/products");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  const handleAddToCart = async () => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart.");
      return;
    }

    const payload = {
      userId,
      productId: product._id,
      img1: product.img1,
      title: product.title,
      price: product.price,
      quantity,
      size: selectedSize,
    };

    try {
      const res = await addToCart(payload);
      console.log("response", res);
      toast.success(res.data.message);
    } catch {
      toast.error("Error adding to cart");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-col lg:flex-row gap-8">
        <div className="w-full md:full lg:w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
          <img
            src={product.img1}
            alt={product.title}
            className="w-full"
            loading="lazy"
          />
          <img
            src={product.img2}
            alt={product.title}
            className="w-full"
            loading="lazy"
          />
          <img
            src={product.img3}
            alt={product.title}
            className="w-full"
            loading="lazy"
          />
          <img
            src={product.img4}
            alt={product.title}
            className="w-full"
            loading="lazy"
          />
        </div>
        <div className="w-full md:full lg:w-4/12">
          <p className="text-xl text-yellow-400">{product.reviews}</p>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-2xl font-semibold text-indigo-600 mb-2">
            ₹ {product.price}
          </p>
          <p className=" mb-6">{product.title2}</p>

          <p className="font-medium mb-1">Select Quantity</p>
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              className="px-4 py-1 border border-gray-500 rounded-sm"
            >
              -
            </button>
            {quantity}
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-4 py-1 border border-gray-500 rounded-sm"
            >
              +
            </button>
          </div>

          <p className="font-medium mb-1">Select Size</p>
          <div className="flex items-center flex-wrap gap-1 mb-8">
            {[7, 8, 9].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-1 border rounded-sm ${selectedSize === size
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-gray-500"
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-200"
            disabled={!userId}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
