import { ApiProperty } from "@nestjs/swagger";

export class UpdateSatuanRequest {
    @ApiProperty()
    name: string;
}