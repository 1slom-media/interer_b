import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETPRODUCTS,
    POSTPRODUCTS,
    PUTPRODUCTS,
    DELETEPRODUCTS
} from "./query.js";

const GET = async ({productId=0}) => {
    try {
        const products= await fetchAll(GETPRODUCTS, [productId])

        return products?.map(product => {
            product.images = product.images[0] == null ? [] : product.images
            return product
        })
    } catch (error) {
        console.log(error)
    }
};

const POST = async ({category_id,product_img1,product_title_uz,product_title_en,product_title_ru,product_description_uz,product_description_en,product_description_ru,location,metr,still,design,cols,rows,data_date}) => {
    try {
      return await fetch(POSTPRODUCTS, [category_id,product_img1,product_title_uz,product_title_en,product_title_ru,product_description_uz,product_description_en,product_description_ru,location,metr,still,design,cols,rows,data_date]);
    } catch (error) {
        console.log(error);
    } 
}; 

const PUT = async ({productId},{ category_id,product_img1,product_title_uz,product_title_en,product_title_ru,product_description_uz,product_description_en,product_description_ru,location,metr,still,design,cols,rows,data_date}) => {
    try {
      return await fetch(PUTPRODUCTS, [productId,category_id,product_img1,product_title_uz,product_title_en,product_title_ru,product_description_uz,product_description_en,product_description_ru,location,metr,still,design,cols,rows,data_date]);
    } catch (error) {
        console.log(error); 
    }
}; 


const DELETE = async ({productId}) => {
    try {
      return await fetch(DELETEPRODUCTS, [productId]);
    } catch (error) {
        console.log(error);
    }
};

export default {
    GET,
    POST,
    PUT,
    DELETE
};