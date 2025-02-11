import knex from "knex";
import config from "../knexfile";

const environment = process.env.NODE_ENV || "development";
const knexInstance = knex(config[environment]);


export default knexInstance;
