import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETTEAMS,
    POSTTEAMS,
    PUTTEAMS,
    DELETETEAMS
} from "./query.js";

const GET = async ({teamId=0}) => {
    try {
        return await fetchAll(GETTEAMS, [teamId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ team_name,team_position,team_img}) => {
    try {
      return await fetch(POSTTEAMS, [ team_name,team_position,team_img]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({teamId},{team_name,team_position,team_img}) => {
    try {
      return await fetch(PUTTEAMS, [teamId,team_name,team_position,team_img]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({teamId}) => {
    try {
      return await fetch(DELETETEAMS, [teamId]);
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