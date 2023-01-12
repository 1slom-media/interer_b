import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETPROJECTS,
    POSTPROJECTS,
    PUTPROJECTS,
    DELETEPROJECTS
} from "./query.js";

const GET = async ({projectId=0}) => {
    try {
        return await fetchAll(GETPROJECTS, [projectId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ project_img,project_title_uz,project_title_en,project_title_ru,project_description_uz,project_description_en,project_description_ru,category_id}) => {
    try {
      return await fetch(POSTPROJECTS, [ project_img,project_title_uz,project_title_en,project_title_ru,project_description_uz,project_description_en,project_description_ru,category_id]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({projectId},{project_img,project_title_uz,project_title_en,project_title_ru,project_description_uz,project_description_en,project_description_ru,category_id}) => {
    try {
      return await fetch(PUTPROJECTS, [projectId,project_img,project_title_uz,project_title_en,project_title_ru,project_description_uz,project_description_en,project_description_ru,category_id]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({projectId}) => {
    try {
      return await fetch(DELETEPROJECTS, [projectId]);
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