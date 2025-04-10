// components/Cart.jsx
import { useCart } from './CartContext';
import './styles.css'; // Import the CSS file

const Cart = () => {
    const { cartItems, removeItem, totalPrice } = useCart();

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>{item.quantity} x ${item.price.toFixed(2)}</p>
                                </div>
                                <button onClick={() => removeItem(item.id)} className="remove-btn">
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
