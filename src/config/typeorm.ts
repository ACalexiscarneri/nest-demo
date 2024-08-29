import {DataSource, DataSourceOptions } from "typeorm";
import {DB_NAME,DB_HOST,DB_PORT,DB_USERNAME,DB_PASSWORD} from "./envs"
import { registerAs } from "@nestjs/config";

const config = {
    type:"postgres",
    database: DB_NAME,
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD ,
    autoLoadEntities: true,
    synchronize:false,
    logging:true,
    entities:["dist/**/*.entity{.js,.ts}"],
    migrations:["dist/migrations/*{.js,.ts}"],
    //dropSchema:true,

}
export default registerAs("typeorm" , () => config);

export const connection = new DataSource(config as DataSourceOptions)

