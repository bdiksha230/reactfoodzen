import React from "react";
import fooddata from "../Product/FoodProductData";



const HomeProduct = () => {

    const displayFiveProducts = fooddata.slice(0, 6);
 

    return(
      <div className="row">
            {displayFiveProducts.map((product, index) => (
                <div className="col-6 col-md-4" key={index}>
                    <div className="product">
                        <img className="product_img" src={product.productimg} alt="img" />
                        <div className="product_title_wrap">
                            <h4 className="product__title">{product.productTitle}</h4>
                            <span className="price">{product.price}</span>
                        </div>
                        <button className="btn product_btn" onClick={() => product.id} >Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
} 

export default HomeProduct