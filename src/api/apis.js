import axios from "axios";

const api = axios.create({
  baseURL: "https://edgistify-backend-gamma.vercel.app",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const login = async (credentials) => {
  return await api.post("/user/login", credentials);
};

export const signup = async (userData) => {
  return await api.post("/user/signup", userData);
};

export const getProducts = async () => {
  return await api.get("/products");
};

export const getProductById = async (id) => {
  return await api.get(`/products/${id}`);
};

export const addToCart = async (cartItems) => {
  return await api.post("/cart/add", cartItems);
};

export const getCartItems = async () => {
  return await api.get("/cart");
};

export const deleteCartItem = async (itemId) => {
  return await api.delete(`/cart/${itemId}`);
};

export const clearCart = async () => {
  return await api.delete("/cart/clear");
};

export const createOrder = async (orderData) => {
  return await api.post("/order/place", orderData);
};

export const getOrder = async () => {
  return await api.get("/order");
};

export default api;
