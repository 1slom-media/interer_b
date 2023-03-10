import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT ?? 7000;

const pgConfig = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
};

export {
    PORT, pgConfig
}