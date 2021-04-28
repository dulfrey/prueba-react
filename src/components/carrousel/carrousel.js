import React , {useEffect} from 'react';
import '../../assets/css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { requesApiData } from '../../redux/shopping/shopping-actions'
import Card from './card';
import { connect } from 'react-redux'


function Carrousel({products , fetchProducts}) {
        useEffect( ()=>{
            fetchProducts()
        },[])
        return (
        <div className="carrousel-container">
            <h2>Nuevo en SuperFüds <span className="small-link color-superfud">Ver más</span></h2>
            
            <div className="container-fluid">
                <div id="carouselSuperfuds" className="carousel slide" data-ride="carousel" data-interval="9000">
                    <div className="carousel-inner row w-110 mx-auto">
                {products.map((product,index)=> {
                                        return(
                                            <Card key={product.id} index={index} product={product}/>
                                    )})
                                }
                       
                       </div>
                    <a className="carousel-control-prev" href="#carouselSuperfuds" role="button" data-slide="prev">
                        <FontAwesomeIcon icon={faAngleLeft} size="3x" className="color-superfud" />
                        
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next text-faded" href="#carouselSuperfuds" role="button" data-slide="next">
                        <FontAwesomeIcon icon={faAngleRight} size="3x" className="color-superfud" />
                        
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        </div>
        );
    
}

const mapStateToProps = state =>{
    return {
        products : state.shop.products
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProducts : ( ) => {
            dispatch(requesApiData())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Carrousel);