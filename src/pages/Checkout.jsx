import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder, getCartItems } from "../api/apis.js";
import { toast } from "react-toastify";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    pinCode: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await getCartItems();
        setCartItems(response.data);
      } catch {
        toast.error("Failed to load cart items");
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    const orderData = {
      userId: localStorage.getItem("userId"),
      products: cartItems.map((item) => ({
        img1: item.img1,
        title: item.title,
        productId: item._id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: Math.round(calculateTotal()),
      shippingAddress: `${formData.address}, ${formData.city}, ${formData.pinCode}`,
      paymentStatus: "Pending",
      orderStatus: "Pending",
    };

    try {
      await createOrder(orderData);
      toast.success("Order placed successfully!");
      navigate("/order-placed");

    } catch {
      toast.error("Failed to place order");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">First Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="firstName"
                required
                className="block w-full rounded-md px-5 py-3 border border-gray-400 outline-none mt-1"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm">Last Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="lastName"
                required
                className="block w-full rounded-md px-5 py-3 border border-gray-400 outline-none mt-1"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                required
                className="block w-full rounded-md px-5 py-3 border border-gray-400 outline-none mt-1"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm">Address <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="address"
                required
                className="block w-full rounded-md px-5 py-3 border border-gray-400 outline-none mt-1"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm">City <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="city"
                required
                className="block w-full rounded-md px-5 py-3 border border-gray-400 outline-none mt-1"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm">Pin Code <span className="text-red-500">*</span></label>
              <input
                type="number"
                name="pinCode"
                required
                maxLength={6}
                className="block w-full rounded-md px-5 py-3 border border-gray-400 outline-none mt-1"
                value={formData.pinCode}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">Payment Method</h2>
          <p>Cash On Delivery</p>
        </div>

        <div className="flex justify-between items-center mt-8">
          <p className="text-lg font-semibold">Total: ₹ {Math.round(calculateTotal())}</p>

          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
