import React from 'react';
import '../../assets/css/App.css';
import { connect} from 'react-redux';
import { addToCart } from '../../redux/shopping/shopping-actions';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })
 
function Card({product,index,addToCart}){
        
        return (
            <div key={product.id.toString()} className={index== 0 ? "carousel-item col-md-3 col-sm-6 active":"carousel-item col-md-3 col-sm-6 "}>
                <div className="panel panel-default">
                    <div className="panel panel-default card">
                        <div className="panel-thumbnail ">
                            <a href="#" title="image 3" className="thumb">
                                <img 
                                    src={product.image}
                                    alt={product.title}
                                />
                            </a>
                            <div className="tooltips">
                                {product.sellos.map((sello,index)=> {
                                    return (
                                        <div key={index} className="mytooltip">
                                            <img  
                                                className="sello "
                                                src={sello.image}
                                                alt={sello.name}
                                            />
                                            
                                            <span >
                                                <h5>Producto</h5>
                                                {sello.name}
                                            </span>
                                            
                                            
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                
                <div className="info">
                <hr></hr>
                    <div className="color-superfud info-header">
                        SuperFüds
                            <span className="net-content"> {product.net_content}</span>
                    </div>
                    <p className="product-title">
                        {product.title}<br></br>
                        
                    </p>
                    
                    <p>
                        <span className="h4">
                        <span className="color-superfud">$</span>{formatter.format(product.price_real).replace(',','.').replace('COP' ,'')}  
                        </span>
                        <span className="light-font small">  x {product.units_sf} unids - {product.net_content}</span>
                    </p>
                </div>
                    <button className="bg-superfud" onClick={ () => addToCart(product)}>Agregar al carrito </button>
                    </div>
                    </div>
                    </div>
                    );
    
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart : (product) => {
            dispatch(addToCart(product))
        }
    }
}

export default connect(null,mapDispatchToProps)(Card);