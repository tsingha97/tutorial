import './index.css'

const CartSummary = props => {
  const {cartList} = props

  const totalCost = cartList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )
  const totalItems = cartList.length

  return (
    <div className="cart-summary">
      <h1 className="order-total">
        Order Total: <span className="total-amount">Rs {totalCost}/-</span>
      </h1>
      <p className="total-items">{totalItems} Items in cart</p>
      <button type="button" className="checkout-button">
        Checkout
      </button>
    </div>
  )
}

export default CartSummary
