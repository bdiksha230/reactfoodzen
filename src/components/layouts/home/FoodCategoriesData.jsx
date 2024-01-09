import React from "react";
import FoodCategeries from "./FoodCategeries";

const FoodCategoriesData = () => {

    const categorydata =[
        {
            categoryimg: 'assets/img/categories/pizza.webp',
            caption:'pizza'
        },
        {
            categoryimg: 'assets/img/categories/burger.webp',
            caption:'burger'
        },
        {
            categoryimg: 'assets/img/categories/garlic-bread.webp',
            caption:'garlic-bread'
        }, 
        {
            categoryimg: 'assets/img/categories/sandwich.webp',
            caption:'sandwich'
        },
        {
            categoryimg: 'assets/img/categories/fries.webp',
            caption:'fries'
        }
        
    ]

    return(
        <div>
            <FoodCategeries categoryprops={categorydata} />
        </div>
    )
}

export default FoodCategoriesData