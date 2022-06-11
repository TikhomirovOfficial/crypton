import {IcartProductProps} from "../types/types";

export const CalculateSumTotal = (cart:IcartProductProps[]) => {
    if(!cart) {
        return 0
    }
    return cart.reduce((acc, cur) => acc + (cur.count*cur.price), 0)
}