import {
  IsString,
  MinLength,
  MaxLength,
  IsInt,
  IsOptional,
} from 'class-validator';

export class TagsDto {
  @IsString()
  @MinLength(3)
  @MaxLength(10)
  name: string;
 
  @IsInt() 
  id: number;
}
