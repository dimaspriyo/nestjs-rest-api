import { ApiProperty } from "@nestjs/swagger";

export class SatuanResponse {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;
}