import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETCALCULATE,
    POSTCALCULATE,
    PUTCALCULATE,
    DELETECALCULATE
} from "./query.js";

const GET = async ({calculateId=0}) => {
    try {
        return await fetchAll(GETCALCULATE, [calculateId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ calculate_name,phone_number,room_type,house_type,room_area,coment}) => {
    try {
      return await fetch(POSTCALCULATE, [ calculate_name,phone_number,room_type,house_type,room_area,coment]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({calculateId},{calculate_name,phone_number,room_type,house_type,room_area,coment}) => {
    try {
      return await fetch(PUTCALCULATE, [calculateId,calculate_name,phone_number,room_type,house_type,room_area,coment]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({calculateId}) => {
    try {
      return await fetch(DELETECALCULATE, [calculateId]);
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