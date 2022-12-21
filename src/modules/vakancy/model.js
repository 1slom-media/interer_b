import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETVAKANCY,
    POSTVAKANCY,
    PUTVAKANCY,
    DELETEVAKANCY
} from "./query.js";

const GET = async ({vakancyId=0}) => {
    try {
        return await fetchAll(GETVAKANCY, [vakancyId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ vakancy_title_uz,vakancy_title_en,vakancy_title_ru,vakancy_description_uz,vakancy_description_en,vakancy_description_ru}) => {
    try {
      return await fetch(POSTVAKANCY, [ vakancy_title_uz,vakancy_title_en,vakancy_title_ru,vakancy_description_uz,vakancy_description_en,vakancy_description_ru]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({vakancyId},{vakancy_title_uz,vakancy_title_en,vakancy_title_ru,vakancy_description_uz,vakancy_description_en,vakancy_description_ru}) => {
    try {
      return await fetch(PUTVAKANCY, [vakancyId,vakancy_title_uz,vakancy_title_en,vakancy_title_ru,vakancy_description_uz,vakancy_description_en,vakancy_description_ru]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({vakancyId}) => {
    try {
      return await fetch(DELETEVAKANCY, [vakancyId]);
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