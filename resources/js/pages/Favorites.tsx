import React, {FC, useContext, useEffect, useState} from 'react';
import CartProduct from "../components/CartProduct";
import pathStatic from '../utils/pathStatic';
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { ProductsStorageContext } from '../AppMain';
import List from '../components/List/List';

const Favorites: FC = () => {
    const {likedProducts} = useContext(ProductsStorageContext)
    return (
        <>
            <Header/>
            <div className="ProductsSection">
                <div className="d-f al-center SectionTitle gap-15">
                    <Link to="/">
                        <img src={pathStatic('icons/backArrow.svg')} alt="" />
                    </Link>

                    <h1>Избранное</h1>
                </div>
                <List items={likedProducts} render={({id, title, price, count = 1, stockCount}) => <CartProduct stockCount={stockCount} count={count} id={id} key={id}  title={title} price={price}/>}  className={"Carts flex-row-betw flex-wrap "}/>
            </div>
        </>

    );
};

export default Favorites;
