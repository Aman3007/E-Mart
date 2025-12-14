// lib/api.js
const API_URL = https://e-mart-backend-f8uc.onrender.com/api';

export async function registerUser(name, email, password) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ name, email, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Registration failed');
  }

  return res.json();
}

export async function loginUser(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Login failed');
  }

  return res.json();
}

export async function logoutUser() {
  const res = await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Logout failed');
  }

  return res.json();
}

export async function getCurrentUser() {
  const res = await fetch(`${API_URL}/auth/me`, {
    credentials: 'include',
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export async function getProducts(params) {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) searchParams.append(key, value.toString());
  });

  const res = await fetch(`${API_URL}/products?${searchParams}`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function getLatestProducts(limit = 10) {
  const res = await fetch(`${API_URL}/products/latest?limit=${limit}`);
  if (!res.ok) throw new Error('Failed to fetch latest products');
  return res.json();
}

export async function getProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}`);
  if (!res.ok) throw new Error('Product not found');
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${API_URL}/categories`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export async function getBrands() {
  const res = await fetch(`${API_URL}/brands`);
  if (!res.ok) throw new Error('Failed to fetch brands');
  return res.json();
}
