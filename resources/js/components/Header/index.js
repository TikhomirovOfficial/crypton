import React, {useContext} from 'react';
import styles from './Header.module.scss'
import useStatic from "../../utils/pathStatic";
import {MainContext, ProductsStorageContext} from "../../AppMain";
import { Link } from "react-router-dom";

const Header = () => {
    const {totalSum, likedProducts} = useContext(ProductsStorageContext)
    const {handleCartOpen} = useContext(MainContext)


    return (
        <div className={styles.Header}>
            <div className="wrapper">
                <div className="flex-row-betw">
                    <div className="d-f al-center gap-10">
                        <img width={40} height={40} src={useStatic('icons/logo.png')} alt=""/>
                        <div className="flex-column">
                            <h2>CRYPTON</h2>
                            <p className="fw-5">Магазин лучших ноутбуков</p>
                        </div>
                    </div>
                    <div className="f-center-row gap-30">
                        <div onClick={handleCartOpen} className="d-f gap-10 al-center cur-pointer">
                            <img src={useStatic('icons/cart.svg')} alt=""/>
                            <p className="fw-6">{totalSum} руб.</p>
                        </div>
                        <Link to="/favorites">
                            <div className="d-f gap-10 al-center cur-pointer">
                                <img className="cur-pointer" src={useStatic('icons/favorites.svg')} alt=""/>
                                <p className="fw-6">{likedProducts.length}</p>
                            </div>
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
