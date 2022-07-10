import React from 'react';
import shoeImg from '../images/image-product-1.jpg'


function ProductDetails(props) {
    return ( 
        
        <div className="container">
            <div className="product-gallery">
<img src={shoeImg} style={{width: "calc(100% + 50px)", margin: '0 -25px'}} alt="" />
            </div>
            <div className="product-copy">
                
            </div>
            </div>
     );
}

export default ProductDetails;