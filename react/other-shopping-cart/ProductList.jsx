// components/ProductList.jsx
import { useCart } from './CartContext';
import './styles.css'; // Import the CSS file

const ProductList = ({ products }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <h3>{product.name}</h3>
                    <p>${product.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
