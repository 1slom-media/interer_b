import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETCLIENT,
    POSTCLIENT,
    PUTCLIENT,
    DELETECLIENT
} from "./query.js";

const GET = async ({clientId=0}) => {
    try {
        return await fetchAll(GETCLIENT, [clientId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ client_text_uz,client_text_en,client_text_ru,client_video}) => {
    try {
      return await fetch(POSTCLIENT, [ client_text_uz,client_text_en,client_text_ru,client_video]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({clientId},{client_text_uz,client_text_en,client_text_ru,client_video}) => {
    try {
      return await fetch(PUTCLIENT, [clientId,client_text_uz,client_text_en,client_text_ru,client_video]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({clientId}) => {
    try {
      return await fetch(DELETECLIENT, [clientId]);
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