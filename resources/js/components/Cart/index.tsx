import {FC, useContext, useState} from 'react';
import './cart.scss'
import List from "../List/List";
import ProductInCart from "../ProductInCart";
import {MainContext, ProductsStorageContext} from "../../AppMain";
import pathStatic from "../../utils/pathStatic";

const Cart: FC = () => {
    const {cartProducts, totalSum} = useContext(ProductsStorageContext)
    const {handleCartOpen, sendToOrderRequest} = useContext(MainContext)
    const [isSended, setIsSended] = useState<boolean>(false)

    const submitOrderRequest = () => {
        sendToOrderRequest()
        setIsSended(true)
    }

    return (
        <div onClick={handleCartOpen} className="p-fix d-f js-end CartBar w-100p h-100p">
            <div onClick={(e) => e.stopPropagation()} className="CartBlock bg-white flex-col-betw gap-30">
                <div className="flex-row-betw">
                    <h1>Корзина</h1>
                    <img onClick={handleCartOpen} width={25} height={25} className="cur-pointer" src={pathStatic('icons/close.svg')} alt=""/>
                </div>
                {
                    cartProducts.length ?
                    <>
                     <List items={cartProducts} className={"CartProducts flex-column gap-20"} render={({id, price, title, count, stockCount}) => {
                        return <ProductInCart key={id} stockCount={stockCount} id={id} title={title} price={price} count={count}/>
                        }}/>
                        <div className="flex-column gap-20">
                            <div className="CartInfo flex-column gap-10">
                                <div className="flex-row-betw">Итого: <div className="line"></div> <b>{totalSum} руб.</b></div>
                                <div className="flex-row-betw">Налог 5%: <div className="line"></div> <b>{~~(totalSum/100*5)} руб.</b></div>
                            </div>
                            <div onClick={submitOrderRequest} className="CartButton cur-pointer f-center-row gap-30">
                                Оформить заказ <img src={pathStatic('icons/arrow.svg')} alt=""/>
                            </div>
                         </div>
                    </> :
                    <div className="CartEmpty f-center-col gap-20">
                        <img src={pathStatic('emptyCart.png')} alt="" />
                        <h3>Корзина пуста</h3>
                        <p className="txt-center">
                            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                        </p>
                        <div onClick={handleCartOpen} className="CartButton cur-pointer f-center-row gap-30">
                            <img src={pathStatic('icons/arrowLeft.svg')} alt=""/>
                            Вернуться назад
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default Cart;
