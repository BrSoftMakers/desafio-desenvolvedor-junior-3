import { IsOptional } from 'class-validator';

export class OrderByDto {
  @IsOptional()
  orderBy: string;
}
