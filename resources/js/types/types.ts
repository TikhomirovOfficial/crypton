export interface IcartProductProps {
    id: number
    title: string
    price: number
    count: number | 0
    stockCount: number | 0
}

export interface IProductsContextProps {
    cartProducts: IcartProductProps[]
    likedProducts: IcartProductProps[]
    totalSum: number
    handleFavoriteProduct: (props: IcartProductProps) => void
    removeCartProduct: (id: number) => void
    reduceCartProductCount: (id: number, count: number) => void
    addCartProduct: (props: IcartProductProps) => void
}

export interface IMainContextProps {
    cartIsOpened: boolean,
    handleCartOpen: () => void,
    sendToOrderRequest: () => any
}
