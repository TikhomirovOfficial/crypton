import {FC, useEffect, useState} from 'react';
import {IcartProductProps} from "../types/types";
import {Api} from "../http/Api";
import List from "../components/List/List";
import CartProduct from "../components/CartProduct";
import { SkeletonCartProduct } from '../components/CartProduct/skeleton';
import pathStatic from '../utils/pathStatic';
import Header from "../components/Header";

const Main: FC = () => {
    const [products, setProducts] = useState<IcartProductProps[]>([])
    const [searchValue, setSearchValue] = useState<string>('')
    const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(false)

    useEffect(() => {
        setIsLoadingProducts(true)
        Api.getAllCartProducts()
            .then(({data}) => {
                setProducts(data)
                setIsLoadingProducts(false)
            })
    }, [])

    return (
        <>
            <Header/>
            <div className="ProductsSection">
                <div className="flex-row-betw">
                    <h1 className="SectionTitle">Товары</h1>
                    <div className="d-f a-c gap-10">
                        <img src={pathStatic('icons/search.svg')} alt="" />
                        <input placeholder='Поиск...' type="text" value={searchValue} onChange={e=>setSearchValue(e.target.value)}/>
                    </div>
                </div>
                {
                    isLoadingProducts ?
                    <List items={Array(8).fill('')} render={( ) => <SkeletonCartProduct />}  className={"Carts flex-row-betw flex-wrap "}/>
                    :
                    <List items={products.filter(item => item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))} className={"Carts flex-row-betw flex-wrap "}
                    render={({id, title, price, stockCount, count = 1}) => <CartProduct stockCount={stockCount} count={count} id={id} title={title} price={price}/>}/>
                }
            </div>
        </>
        
    );
};

export default Main;