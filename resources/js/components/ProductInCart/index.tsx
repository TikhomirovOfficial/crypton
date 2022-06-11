import React, {FC, useContext, useEffect, useState} from 'react';
import {IcartProductProps} from "../../types/types";
import pathStatic from "../../utils/pathStatic";
import './productInCart.scss'
import { ProductsStorageContext } from '../../AppMain';

const ProductInCart:FC<IcartProductProps> = ({id, price, title, count = 1, stockCount}) => {
    const {removeCartProduct, reduceCartProductCount} = useContext(ProductsStorageContext)
    const [countProduct, setCountProduct] = useState<number>(count)

    useEffect(() => {
        reduceCartProductCount(id, countProduct)
    }, [countProduct])

    return (
        <div key={id} className="flex-row-betw ProductInCart">
            <div className="d-f gap-30 al-center">
                <img src={pathStatic('nb.jpg')} className="ProductImage" alt=""/>
                <div className="flex-column gap-10">
                    <p>{title}</p>
                    <b>{~~price * count} руб.</b>
                </div>
            </div>
            <div className="flex-column al-end">
                <img width={27} height={27} onClick={() => removeCartProduct(id)} className="cur-pointer" src={pathStatic('icons/remove.svg')} alt=""/>
                <div className="CountBlock d-f a-c gap-10">
                    <button disabled={countProduct === 1} onClick={() => setCountProduct(prev => prev > 1 ? prev - 1 : prev)}>-</button>
                    <div className="count">{countProduct}</div>
                    <button onClick={() => setCountProduct(prev => countProduct < stockCount ? prev + 1 : prev)}>+</button>
                </div>
            </div>

        </div>
    );
};

export default ProductInCart
