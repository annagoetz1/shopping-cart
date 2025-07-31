import { useEffect, useState } from "react";
import AddToCartButton from './components/AddToCartButton';





function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const onAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

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

{cartItems.length > 0 && (
  <div className="cart" style={{ border: "2px solid red", padding: "1rem", marginTop: "2rem" }}>
    <h2>Shopping Cart</h2>
    <p>Items in cart: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
  </div>
)}
</div>
  );
}

export default App;
