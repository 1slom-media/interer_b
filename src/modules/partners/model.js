import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETPARTNERS,
    POSTPARTNERS,
    PUTPARTNERS,
    DELETEPARTNERS
} from "./query.js";

const GET = async ({partnerId=0}) => {
    try {
        return await fetchAll(GETPARTNERS, [partnerId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ partners_img}) => {
    try {
      return await fetch(POSTPARTNERS, [ partners_img]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({partnerId},{partners_img}) => {
    try {
      return await fetch(PUTPARTNERS, [partnerId,partners_img]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({partnerId}) => {
    try {
      return await fetch(DELETEPARTNERS, [partnerId]);
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