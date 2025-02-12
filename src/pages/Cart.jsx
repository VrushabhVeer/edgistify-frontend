import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCartItems, deleteCartItem } from "../api/apis.js";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch Cart Items
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await getCartItems();
        setCartItems(response.data);
      } catch {
        toast.error("Failed to load cart items");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (itemId) => {
    try {
      await deleteCartItem(itemId);
      setCartItems(cartItems.filter((item) => item._id !== itemId));
      toast.success("Item removed from cart");
    } catch {
      toast.error("Failed to remove item");
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
          <button
            onClick={() => navigate("/products")}
            className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {cartItems.map((item) => (
            <div key={item._id} className="">
              <div className="flex space-x-4">
                <img
                  src={item.img1}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p>₹ {item.price}</p>
                  <p>Qty: {item.quantity}</p>
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="text-red-600 hover:text-red-800 mt-6"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="">
            <p className="text-xl font-semibold">
              Total: ₹ {Math.round(calculateTotal())}
            </p>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 mt-4"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
