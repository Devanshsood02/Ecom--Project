export const PRODUCT_STORAGE_KEY = "v_shop_products";

export const getStorageItem = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const setStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};