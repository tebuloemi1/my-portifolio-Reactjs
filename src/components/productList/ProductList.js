import "./ProductList.css";
import{products} from "../../data";

import React from 'react';

function ProductList() {
    return (
        <><div className="pl">
            <div className="pl-texts"></div>
            <h1 className="pl-title">Create & Inspire. Its Emile</h1>
            <p className="pl-desc"> Emile is a creative portifolio that your work has been waiting!</p>

        </div><div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />


                ))}

                <Product />
                <Product />
                <Product />
                <Product />
            </div></>


    );
};

export default ProductList