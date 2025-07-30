import { useEffect, useState } from "react";
import AddToCartButton from './components/AddToCartButton';

const [cartItems, setCartItems] = useState([]);

const onAddToCart = (product) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If the product is already in the cart, increase quantity
      return prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // If it's a new product, add it with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    }
  });
};

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h1>Fake Store Products</h1>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} width={100} />
              <p>${product.price}</p>
              <AddToCartButton onAdd={() => onAddToCart(product)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
