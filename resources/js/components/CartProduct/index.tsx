import {FC, useContext, useState} from 'react';

import './CartProduct.scss';
import pathStatic from "../../utils/pathStatic";
import {IcartProductProps} from "../../types/types";
import {ProductsStorageContext} from "../../AppMain";


const CartProduct: FC<IcartProductProps> = ({id, title, price, stockCount }) => {
    const {likedProducts, addCartProduct, handleFavoriteProduct} = useContext(ProductsStorageContext)
    const inLiked = likedProducts?.some((item: { id: number; }) => item.id === id)

    const [isLiked, setIsLiked] = useState<boolean>(inLiked || false)

    const handleLike = () => {
        handleFavoriteProduct({id, title, price, count: 1, stockCount})
        setIsLiked(!isLiked)
    }

    return (
        <div className="Cart flex-column gap-10">
            <img onClick={handleLike} className="favorite cur-pointer" src={pathStatic(`icons/${isLiked? 'liked' : 'unliked'}.svg`)} alt=""/>
            <img className="Cart__image" src={pathStatic('nb.jpg')} alt=""/>
            <p className="Cart__title">
                {title}
            </p>
            <div className="flex-row-betw">
                <div className="flex-column">
                    <p>ЦЕНА:</p>
                    <h3>{~~(price)} руб.</h3>
                </div>
                <img onClick={() => addCartProduct({id, title, price, count: 1, stockCount})} src={pathStatic('icons/add.svg')} className="cur-pointer Cart__add" alt=""/>
            </div>
            <p className="stockCount">В наличии {stockCount} шт.</p>
        </div>
    );
};

export default CartProduct;
