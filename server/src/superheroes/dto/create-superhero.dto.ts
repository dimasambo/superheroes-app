import {ApiProperty} from "@nestjs/swagger";

export class CreateSuperheroDto {
    @ApiProperty({example: 'spider-man', description: `Nickname`})
    readonly nickname: string

    @ApiProperty({example: 'Peter Parker', description: `Real name`})
    readonly realName: string

    @ApiProperty({example: 'man with net in hand', description: 'Description of superhero'})
    readonly originDescription: string

    @ApiProperty({example: 'net, flying', description: 'Superhero\'s power'})
    readonly superpowers: string

    @ApiProperty({example: "I'm spider-man!", description: 'Superhero\'s unique phrase'})
    readonly catchPhrase: string
}