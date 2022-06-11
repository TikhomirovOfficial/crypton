import Instance from "./Instance";
import {IcartProductProps} from "../types/types";

export class Api {
    static async getAllCartProducts() {
        return await Instance.get<IcartProductProps[]>('products')
    }

}