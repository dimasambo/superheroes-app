import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface SuperheroCreationAttrs {
    nickname: string
    realName: string
    originDescription: string
    superpowers: string
    catchPhrase: string
    images: string[]
}

@Table({tableName: 'superheroes'})
export class Superhero extends Model<Superhero, SuperheroCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'spider-man', description: `Nickname`})
    @Column({type: DataType.STRING})
    nickname: string;

    @ApiProperty({example: 'Peter Parker', description: `Real name`})
    @Column({type: DataType.STRING})
    realName: string;

    @ApiProperty({example: 'man with net in hand', description: `Description of superhero`})
    @Column({type: DataType.STRING})
    originDescription: string;

    @ApiProperty({example: 'net, flying', description: `Superhero's power`})
    @Column({type: DataType.STRING})
    superpowers: string;

    @ApiProperty({example: "I'm spider-man!", description: `Superhero's unique phrase`})
    @Column({type: DataType.STRING})
    catchPhrase: string

    @ApiProperty({example: "[1.png, 2.png]", description: `Array of superhero's images`})
    @Column({type: DataType.ARRAY(DataType.STRING)})
    images: string[]
}