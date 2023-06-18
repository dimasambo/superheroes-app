import {Module} from "@nestjs/common";
import {FileModule} from "./file/file.module";
import * as path from 'path'
import {ServeStaticModule} from "@nestjs/serve-static";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {SuperheroesModule} from './superheroes/superheroes.module';
import {Superhero} from "./superheroes/superhero.model";

/*@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
        MongooseModule.forRoot('mongodb+srv://dimaruy:dimMongodb3@cluster0.nycsqpv.mongodb.net/?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ]
})*/
@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static')
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            /*host: process.env.POSTGRES_HOST,*/
            host: 'localhost',
            /*port: Number(process.env.POSTGRES_PORT),*/
            port: 5432,
            /*username: process.env.POSTGRES_USER,*/
            username: 'postgres',
            /*password: process.env.POSTGRES_PASSWORD,*/
            password: 'root',
            /*database: process.env.DB,*/
            database: 'superheroes',
            models: [Superhero],
            autoLoadModels: true,
            synchronize: true
        }),
        FileModule,
        SuperheroesModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {}