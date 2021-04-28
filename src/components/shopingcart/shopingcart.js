import React , { useState , useEffect} from 'react';
import '../../assets/css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux' ;
import { addToCart, removeFromCart,adjustQty } from '../../redux/shopping/shopping-actions'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })

function ShopingCart ({cart,addToCart,removeFromCart,adjustQty}){
         const [cartCount , setCartcount] = useState(0);

         useEffect(()=>{
             let count = 0 ;
             cart.forEach(element => {
                 count += element.qty
             });
             setCartcount(count);
             
         },[cart, cartCount]);
        
    
        return (

            <div className="modal bd-example-modal-lg fade show" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display:'block'}}>
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                    
                    <div className="modal-body">
                        <div className="shoping-cart-container">
                                    <div className="shoping-cart-header">
                                        <Link className="black-color" to="/">  
                                            <div className="backtostore">
                                                <FontAwesomeIcon icon={faAngleLeft} size="2x" className="color-superfud" />
                                                <span>   Volver a la tienda</span>
                                            </div>
                                        </Link>
                                        
                                        <div className="shoping-cart-title">
                                            <h2>Carrito de compras</h2>
                                            <p><span className="color-superfud">{cartCount}</span> items</p>
                                        </div>
                                        <div className="table-container">
                                        <div className="row" >
                                            <div className="col-md-4">
                                                Item
                                            </div>
                                            <div className="col-md-4">
                                                Cantidad
                                            </div>
                                            <div className="col-md-4">
                                                Precio
                                            </div>
                                        </div>
                                        {cart.map( item => {
                                            return(
                                                <div key={item.id} className="row" >
                                                    <div className="col-md-4">
                                                            <div className="item">
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.title}
                                                                />
                                                                <div className="info">
                                                                    <p>
                                                                        <span className="black-color">
                                                                            {item.title}
                                                                        </span><br></br>
                                                                        <span className="light-font">x {item.units_sf} unids - {item.net_content}</span><br></br>
                                                                        <span className="color-superfud">Kibo</span>
                                                                    </p>
                                                                
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 qty">
                                                            <div className={item.qty === 1 ? "qty-button disabled" :"qty-button color-superfud"} onClick={()=>adjustQty(item.id,item.qty-1)} disabled>
                                                                -
                                                            </div>
                                                            <div>
                                                                {item.qty}
                                                            </div>
                                                            <div className="qty-button color-superfud" onClick={()=>addToCart(item)}>
                                                                +
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 price">
                                                            <span className="color-superfud">$ </span> {formatter.format(item.price_real*item.qty).replace(',','.').replace('COP' ,'')}
                                                            <span className="trash-button">
                                                                <FontAwesomeIcon  onClick={ () => removeFromCart(item.id)} icon={faTrashAlt} size="lg" className="color-black" />
                                                            </span>
                                                        </div>
                                                    </div>
                                            )
                                        })}
                                        
                                        </div>
                                    </div>
                                
                                </div>
                        </div>
                    <div className="modal-footer">
                                        <div className="btn bg-superfud">Continuar</div>
                    </div>
                    </div>
                </div>
                </div>


            );
    
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart : (product) => {
            dispatch(addToCart(product))
        },
        removeFromCart : (id) => {
            dispatch(removeFromCart(id))
        },
        adjustQty : (id,value) => {
            dispatch(adjustQty(id,value))
        }

        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( ShopingCart);