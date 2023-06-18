import { Model } from "sequelize-typescript";
interface SuperheroCreationAttrs {
    nickname: string;
    realName: string;
    originDescription: string;
    superpowers: string;
    catchPhrase: string;
    images: string[];
}
export declare class Superhero extends Model<Superhero, SuperheroCreationAttrs> {
    id: number;
    nickname: string;
    realName: string;
    originDescription: string;
    superpowers: string;
    catchPhrase: string;
    images: string[];
}
export {};
