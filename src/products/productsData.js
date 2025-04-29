
const defaultProducts = [  //productos por defecto
  { id: 1, name: "Espada mágica", price: 100, category: "Armas" },
  { id: 2, name: "Poción de invisibilidad", price: 50, category: "Pociones" }
];

//funcion para cargar productos (siempre restaurar los productos por defecto al refrescar)
export const getProductsFromStorage = () => {
  localStorage.setItem("products", JSON.stringify(defaultProducts));
  return defaultProducts;
};

//funcion para guardar productos (no la usaremos porque siempre restauramos, pero la dejamos si luego quieres modificar comportamiento)
export const saveProductsToStorage = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};
