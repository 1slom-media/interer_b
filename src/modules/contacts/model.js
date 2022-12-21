import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETCONTACTS,
    POSTCONTACTS,
    PUTCONTACTS,
    DELETECONTACTS
} from "./query.js";

const GET = async ({contactsId=0}) => {
    try {
        return await fetchAll(GETCONTACTS, [contactsId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({contact_name,phone_number}) => {
    try {
      return await fetch(POSTCONTACTS, [ contact_name,phone_number]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({contactsId},{contact_name,phone_number}) => {
    try {
      return await fetch(PUTCONTACTS, [contactsId,contact_name,phone_number]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({contactsId}) => {
    try {
      return await fetch(DELETECONTACTS, [contactsId]);
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