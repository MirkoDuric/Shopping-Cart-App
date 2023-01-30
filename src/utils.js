export const decrease = (cart, product, setCart) => {
  const updatedCart = cart.map((item) => {
    if (item.sku === product.sku) {
      return { ...item, qty: Math.max(item.qty - 1, 0) };
    }
    return item;
  });
  return setCart(updatedCart.filter((item) => item.qty > 0));
};

export const increase = (cart, product, setCart) => {
  let alreadyInCart = false;
  const updatedCart = cart.map((item) => {
    if (item.sku === product.sku) {
      alreadyInCart = true;
      return { ...item, qty: Math.min(item.qty + 1, product.stock) };
    }
    return item;
  });
  if (!alreadyInCart) {
    updatedCart.push({ ...product, qty: 1 });
  }
  return setCart(updatedCart);
};

export const getTotalPrice = (cart) =>
  cart.reduce((total, item) => total + item.price * item.qty, 0);

export const getTotalItems = (cart) => {
  if (!cart) return 0;
  return cart.reduce((total, item) => total + item.qty, 0);
};
