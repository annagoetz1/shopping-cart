import { useEffect, useState } from "react";
import AddToCartButton from './components/AddToCartButton';
import { CartContext } from './CartContext.js';
import { useCart } from "./CartContext";


function App() {
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const { cartItems, onAddToCart } = useCart();

  return (
    <CartContext.Provider value={{ cartItems, onAddToCart }}>
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

        {cartItems.length > 0 && (
          <div
            className="cart"
            style={{
              border: "2px solid red",
              padding: "1rem",
              marginTop: "2rem",
            }}
          >
            <h2>Shopping Cart</h2>
            <p>
              Items in cart:{" "}
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </p>
          </div>
        )}
      </div>
    </CartContext.Provider>
  );
}

export default App;
