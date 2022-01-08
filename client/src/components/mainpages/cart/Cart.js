import {useContext} from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'

const Cart = () => {
    const state = useContext(GlobalState)
    const [cart] = state.UserAPI.cart

    if(cart.length === 0) {
        return <h2 style={{textAling : "center", fontSize: "5rem"}}>Cart Empty</h2>
    }

    return (
        <div>
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                    <img src={product.images.url} alt="" className='img_container'/>
                    <div className="box-detail">
                      <div className="row">
                        <h2>{product.title}</h2>
                      </div>
                      <h3> $ {product.price * product.quantity}</h3>
                      <p>{product.description}</p>
                      <p>{product.content}</p>
                      <div className='amount'>
                          <button> - </button>
                          <span>{product.quantity}</span>
                          <button> + </button>

                      </div>
                      <div className='delete'>X</div>
                    </div>
                  </div>
                ))
            }
            <div className='total'>
            <h3>Total: $ 0</h3>
            <Link to="#!">Payment</Link>
            </div>
        </div>
    )
}

export default Cart
