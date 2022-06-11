import {IcartProductProps} from "../types/types";

export const defaultMainContextValue = {
    cartIsOpened: false,
    handleCartOpen(): void {},
    sendToOrderRequest(): any {}
}

export const defaultProductsContextValue = {
    cartProducts: [],
    likedProducts: [],
    addCartProduct(props: IcartProductProps): void {},
    handleFavoriteProduct(props: IcartProductProps): void {},
    removeCartProduct(id: number): void {},
    reduceCartProductCount(id: number, count: number): void {},
    totalSum: 0
}
