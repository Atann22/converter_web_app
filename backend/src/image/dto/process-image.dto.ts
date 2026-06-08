import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, ValidateIf, IsInt, Min, Max, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export enum ActionType { 
  CONVERT = 'convert', 
  COMPRESS = 'compress', 
  RESIZE = 'resize' 
}

export enum TargetFormatType { JPG = 'jpg', PNG = 'png', WEBP = 'webp' }

export class ProcessImageDto {
    @ApiProperty({ description: 'Aksi: convert / compress / resize', enum: ActionType })
    @IsNotEmpty()
    @IsEnum(ActionType)
    action!: ActionType;

    @ApiProperty({ description: 'Format tujuan', enum: TargetFormatType, required: false })
    @ValidateIf(o => o.action === ActionType.CONVERT)
    @IsNotEmpty()
    @IsEnum(TargetFormatType)
    targetFormat?: TargetFormatType;

    @ApiProperty({ description: 'Kualitas 1-100', required: false, example: 80 })
    @ValidateIf(o => o.action === ActionType.COMPRESS)
    @IsNotEmpty()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(100)
    quality?: number;

    @ApiProperty({ description: 'Lebar kustom (px)', required: false, example: 1080 })
    @ValidateIf(o => o.action === ActionType.RESIZE)
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    customWidth?: number;

    @ApiProperty({ description: 'Tinggi kustom (px)', required: false, example: 1080 })
    @ValidateIf(o => o.action === ActionType.RESIZE)
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    customHeight?: number;
}