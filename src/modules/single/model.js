import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETSINGLE,
    POSTSINGLE,
    PUTSINGLE,
    DELETESINGLE
} from "./query.js";

const GET = async ({singleId=0}) => {
    try {
        return await fetchAll(GETSINGLE, [singleId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ single_img1,single_img2,single_title_uz,single_title_en,single_title_ru,single_description_uz,single_description_en,single_description_ru}) => {
    try {
      return await fetch(POSTSINGLE, [ single_img1,single_img2,single_title_uz,single_title_en,single_title_ru,single_description_uz,single_description_en,single_description_ru]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({singleId},{single_img1,single_img2,single_title_uz,single_title_en,single_title_ru,single_description_uz,single_description_en,single_description_ru}) => {
    try {
      return await fetch(PUTSINGLE, [singleId,single_img1,single_img2,single_title_uz,single_title_en,single_title_ru,single_description_uz,single_description_en,single_description_ru]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({singleId}) => {
    try {
      return await fetch(DELETESINGLE, [singleId]);
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