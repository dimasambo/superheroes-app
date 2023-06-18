import {ApiProperty} from "@nestjs/swagger";

export class DeleteImageDto {
    @ApiProperty({example: '/picture/123.png', description: `Image  path`})
    readonly imagePath: string
}