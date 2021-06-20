import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConnectionOptions } from "typeorm";


console.log("DATABASE_URL ADALAH " + process.env.DATABASE_URL)

const config: TypeOrmModuleOptions = {
    type: 'postgres',
    entities: ['dist/**/*.entity.js'],
    synchronize: false,
    url: process.env.DATABASE_URL,
    ssl: false
}

export default config;