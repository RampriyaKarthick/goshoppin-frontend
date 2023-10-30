import axios from "axios"
import { productsFail, productsRequest, productsSuccess } from "../slices/slices/productsSlice"

export const getProducts = (currentPage) => async(dispatch) =>{
    try{
        dispatch( productsRequest())
       const {data} = await axios.get(`/api/v1/products?page=${currentPage}`)
       dispatch(productsSuccess(data))
    }catch(error){
dispatch(productsFail(error.response.data.message))
    }

}