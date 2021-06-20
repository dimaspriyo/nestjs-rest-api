import { ApiProperty } from "@nestjs/swagger";

export class CreateSatuanRequest {
    @ApiProperty()
    name: string;
}