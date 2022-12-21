import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETTUBE,
    POSTTUBE,
    PUTTUBE,
    DELETETUBE
} from "./query.js";

const GET = async ({tubeId=0}) => {
    try {
        return await fetchAll(GETTUBE, [tubeId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ tube_title_uz,tube_title_en,tube_title_ru,tube_video}) => {
    try {
      return await fetch(POSTTUBE, [ tube_title_uz,tube_title_en,tube_title_ru,tube_video]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({tubeId},{tube_title_uz,tube_title_en,tube_title_ru,tube_video}) => {
    try {
      return await fetch(PUTTUBE, [tubeId,tube_title_uz,tube_title_en,tube_title_ru,tube_video]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({tubeId}) => {
    try {
      return await fetch(DELETETUBE, [tubeId]);
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