import React from "react";
import { useState, useEffect } from "react";
import fooddata from "../Product/FoodProductData";

const Productcard = ({ produtItemsPerPage, onProductClick }) => {

    const [productItem, setProductItem] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        const totalItems = fooddata.length;
        const mockCart = Array.from({ length: totalItems }, (_, index) => ({
            id: index + 1,
            name: `Item ${index + 1}`,

        }));
        setProductItem(mockCart);


    }, []);

    const [selectedCategory, setSelectedCategory] = useState('');
    const filterProducts = selectedCategory
        ? fooddata.filter(product => product.category === selectedCategory) : fooddata;

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }

    const itemsPerPage = produtItemsPerPage || 9;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstPage = indexOfLastItem - itemsPerPage;
    const currentProducts = filterProducts.slice(indexOfFirstPage, indexOfLastItem);
    // fetch data from foodProductdata - fooddata

    const totalPages = Math.ceil(productItem.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
 
    // const handleSearch = (e) =>{
    //     const term = e.target.value;
    //     setSearchTerm(term);

    //     const filteredProducts = fooddata.filter((product) =>
    //     product.name.toLowerCase().includes(term.toLowerCase())
    //   );
    //     setProductItem(filteredProducts);
    // }
    

   

    return (
        <div className="row">
            <div className="col-12">
                {/* <input type="text"  onchange={handleSearch}  placeholder="Search for products" /> */}
            </div>

            <div className="col-lg-3 border_left">
                <h3>Categories</h3>
                <div className="categories">
                    <button className="btn category__btn" onClick={() => handleCategoryClick('')}>all</button>
                    <button className="btn category__btn" onClick={() => handleCategoryClick('pizza')}>pizza</button>
                    <button className="btn category__btn" onClick={() => handleCategoryClick('burger')}>burger</button> 
                    <button className="btn category__btn" onClick={() => handleCategoryClick('sandwich')}>sandwich</button>
                    <button className="btn category__btn" onClick={() => handleCategoryClick('garlicbread')}>garlic bread</button>
                    <button className="btn category__btn" onClick={() => handleCategoryClick('fries')}>fries</button> 

                </div>
            </div>
            <div className="col-lg-9">

                <div className="product_section">
                    <div className="row">
                        {currentProducts.map((product) => (
                            <div className="col-6 col-md-4" key={product.id} >
                                <div className="product" >
                                    <img className="product_img" src={product.productimg} alt="img" />
                                    <div className="product_title_wrap">
                                        <h4 className="product__title">{product.productTitle}</h4>
                                        <span className="price">₹ {product.price}</span>
                                        <button className="btn product_btn">Add to Cart</button>
                                    </div>

                                </div>
                            </div>
                        ))}



                        <nav aria-label="..." >
                            <ul className="pagination">
                                <li className="page-item  ">
                                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                                </li>
                                <li className="page-item">

                                    <div>
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                                            <button
                                                key={pageNumber}
                                                onClick={() => handlePageChange(pageNumber)}
                                                style={{
                                                    margin: '5px',
                                                    padding: '5px 10px',
                                                    backgroundColor: currentPage === pageNumber ? 'lightblue' : 'white',
                                                    border: '1px solid #ccc',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                {pageNumber}
                                            </button>
                                        ))}
                                    </div>
                                </li>

                                <li className="page-item">
                                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Productcard