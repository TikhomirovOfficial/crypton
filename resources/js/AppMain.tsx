import React, {useState, createContext, useEffect} from 'react';
import Main from "./pages/Main";

import {
    IcartProductProps, IMainContextProps,
    IProductsContextProps

} from "./types/types";

import  {
    defaultProductsContextValue,
    defaultMainContextValue
} from "./contexts/defaultContextsValues"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import {getFromStorage, addToStorage} from "./utils/LocalStorageExplorer"
import {CalculateSumTotal} from "./utils/CalculateSumCart";
import Cart from "./components/Cart";
import Favorites from './pages/Favorites';

export const ProductsStorageContext = createContext<IProductsContextProps>(defaultProductsContextValue)
export const MainContext = createContext<IMainContextProps>(defaultMainContextValue)

const parsedLikedProducts = getFromStorage('liked') || []
const parsedCartProducts = getFromStorage('cart') || []

const App = () => {
    const [likedProducts, setLikedProducts] = useState<IcartProductProps[]>(parsedLikedProducts)
    const [cartProducts, setCartProducts] = useState<IcartProductProps[]>(parsedCartProducts)
    const [totalSum, setTotalSum] = useState<number>(CalculateSumTotal(cartProducts))
    const [cartIsOpened, setCartIsOpened] = useState<boolean>(false)

    const handleCartOpen = () => {
        setCartIsOpened(!cartIsOpened)
    }

    const sendToOrderRequest = () => {
        console.log(cartProducts)
    }

    const handleFavoriteProduct = (obj: IcartProductProps) => {
        if (likedProducts.some(prod => prod.id === obj.id)) {
            setLikedProducts(likedProducts.filter(prod => prod.id !== obj.id))
            return
        }
        setLikedProducts([...likedProducts, obj])
    }

    const addCartProduct = (obj: IcartProductProps) => {
        if (cartProducts.some(prod => prod.id === obj.id)) {
            setCartProducts(prev => [
                ...prev.map((prod) => {
                    if (prod.id === obj.id) {
                        return {
                            ...prod,
                            count: obj.stockCount > prod.count ? prod.count + 1 : prod.count
                        }
                    }
                    return prod
                })
            ])
            return
        }
        setCartProducts(prev => [...prev, obj])
        reduceCartProductCount(obj.id, obj.count + 1)
    }

    const reduceCartProductCount = (id: number, count: number) => {

        if (cartProducts.some(prod => prod.id === id)) {
            console.log('sas')
            setCartProducts(prev => [
                ...prev.map((prod) => {
                    if (prod.id === id && (prod.count > 0 && count)) {
                        return {
                            ...prod,
                            count: count
                        }
                    }
                    return prod
                })
            ])
            return
        }
        setCartProducts(prev => [...prev, ])
    }

    const removeCartProduct = (id: number) => {
        setCartProducts(cartProducts.filter(item => id != item.id))
    }

    useEffect(() => {
        addToStorage('liked', likedProducts)
    }, [likedProducts])

    useEffect(() => {
        addToStorage('cart', cartProducts)
        setTotalSum(CalculateSumTotal(cartProducts))
    }, [cartProducts])

    return (
        <MainContext.Provider value={{cartIsOpened, handleCartOpen, sendToOrderRequest
            }}>
            <ProductsStorageContext.Provider value={
                {
                    likedProducts,
                    cartProducts,
                    totalSum,
                    handleFavoriteProduct,
                    addCartProduct,
                    removeCartProduct,
                    reduceCartProductCount
                }}>

                <div className="wrapper">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Main/>}/>
                            <Route path="favorites" element={<Favorites/>}/>

                        </Routes>
                    </BrowserRouter>
                    {
                        cartIsOpened && <Cart />
                    }
                </div>
            </ProductsStorageContext.Provider>
        </MainContext.Provider>


    );
};

export default App;
