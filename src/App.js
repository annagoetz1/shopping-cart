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
    </div>
  );
}
{cartItems.length > 0 && (
  <div className="cart">
    <h2>Shopping Cart</h2>
    {cartItems.map((item) => (
      <div key={item.id}>
        <p>
          {item.title} x {item.quantity}
        </p>
      </div>
    ))}
  </div>
)}
</div>


export default App;
