import {Module} from '@nestjs/common';
import {SuperheroesController} from './superheroes.controller';
import {SuperheroesService} from './superheroes.service';
import {FileModule} from "../file/file.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {Superhero} from "./superhero.model";

@Module({
    controllers: [SuperheroesController],
    providers: [SuperheroesService],
    imports: [
        SequelizeModule.forFeature([Superhero]),
        FileModule
    ]
})
export class SuperheroesModule {
}
