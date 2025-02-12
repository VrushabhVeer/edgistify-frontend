// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getOrder } from "../api/apis";
// import { toast } from "react-toastify";

// function Placed() {
//   const [order, setOrder] = useState(null);

//   useEffect(() => {
//     const fetchOrder = async () => {
//       try {
//         const response = await getOrder();
//         setOrder(response.data);
//         console.log("order----", response.data.data)
//       } catch {
//         toast.error("Failed to load Order");
//       }
//     };

//     fetchOrder();
//   }, []);

//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow text-center">
//         <div className="flex flex-col items-center">
//           <div className="rounded-full bg-green-100 p-4">
//             <svg
//               className="h-12 w-12 text-green-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//           </div>
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
//             Order Placed!
//           </h2>
//           <p className="mt-2 text-gray-600">
//             Thank you for your purchase. Your order has been successfully
//             placed.
//           </p>
//         </div>

//         <div className="mt-8">
//           <Link
//             to="/products"
//             className="inline-block bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700"
//           >
//             Continue Shopping
//           </Link>
//         </div>
//       </div>

//       <div>
//         {order && (
//           <div className="mt-6 bg-gray-100 p-4 rounded-md text-left">
//             <h3 className="text-lg font-semibold">Order Details</h3>
//             <p>
//               <span className="font-medium">Order ID:</span> {order._id}
//             </p>
//             <p>
//               <span className="font-medium">Total Price:</span> ${order.totalPrice}
//             </p>
//             <p>
//               <span className="font-medium">Shipping Address:</span> {order.shippingAddress}
//             </p>
//             <p>
//               <span className="font-medium">Payment Status:</span> {order.paymentStatus}
//             </p>
//             <p>
//               <span className="font-medium">Order Status:</span> {order.orderStatus}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Placed;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrder } from "../api/apis";
import { toast } from "react-toastify";

function Placed() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await getOrder();

        if (response.data.length > 0) {
          const latestOrder = response.data[response.data.length - 1]; // Get latest order
          setOrder(latestOrder);
        } else {
          toast.error("No orders found.");
        }
      } catch {
        toast.error("Failed to load Order");
      }
    };

    fetchOrder();
  }, []);

  return (
    <div className="bg-slate-100 flex flex-col items-center justify-center py-4 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md text-center">
        {/* Success Icon */}
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-green-100 p-4">
            <svg
              className="h-14 w-14 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            🎉 Order Placed Successfully!
          </h2>
          <p className="mt-2 text-gray-600">
            Thank you for your purchase. Your order has been confirmed.
          </p>
        </div>

        {order && (
          <div className="mt-6 text-left">
            <h3 className="text-lg font-semibold text-gray-800">
              Order Summary
            </h3>
            <div className="mt-3 text-gray-700 space-y-2 text-sm">
              <p>
                <span className="font-medium">Order ID:</span> {order._id}
              </p>
              <p>
                <span className="font-medium">Total Price:</span>{" "}
                <span className="text-green-600 font-bold">
                  ₹{order.totalPrice}
                </span>
              </p>
              <p>
                <span className="font-medium">Shipping Address:</span>{" "}
                {order.shippingAddress}
              </p>
              <p>
                <span className="font-medium">Payment Status:</span>{" "}
                <span
                  className={`font-semibold ${
                    order.paymentStatus === "Paid"
                      ? "text-blue-500"
                      : order.orderStatus === "Shipped"
                      ? " text-purple-500"
                      : " text-yellow-500"
                  }`}
                >
                  {order.paymentStatus}
                </span>
              </p>
              <p>
                <span className="font-medium">Order Status:</span>{" "}
                <span
                  className={`font-semibold${
                    order.orderStatus === "Delivered"
                      ? "text-blue-500"
                      : order.orderStatus === "Shipped"
                      ? " text-purple-500"
                      : " text-yellow-500"
                  }`}
                >
                  {order.orderStatus}
                </span>
              </p>
            </div>

            {/* Ordered Products */}
            <h3 className="mt-5 text-lg font-semibold text-gray-800">
              Products Ordered
            </h3>
            <div className="mt-3 space-y-4">
              {order.products.map((product) => (
                <div key={product._id} className="flex items-center">
                  <img
                    src={product.img1}
                    alt="Product"
                    className="w-20 h-20 object-cover rounded-sm border"
                  />
                  <div className="ml-4 text-sm">
                    <p className="font-medium text-base">{product.title}</p>
                    <p className="font-medium">Quantity: {product.quantity}</p>
                    <p>
                      Price:{" "}
                      <span className="font-semibold text-green-600">
                        ₹{product.price}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <Link
            to="/products"
            className="inline-block bg-indigo-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Placed;
