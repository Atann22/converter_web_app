// import { Controller } from '@nestjs/common';

// @Controller('image')
// export class ImageController {}
import { Controller, Post, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, Body, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiBody, ApiTags } from '@nestjs/swagger';
import type { Response } from 'express';
import 'multer';
import { ProcessImageDto } from './dto/process-image.dto';
import { ImageService } from './image.service';

@ApiTags('Image Processor')
@Controller('api/v1/images')
export class ImageController {
  
    constructor(private readonly imageService: ImageService) {}

    @Post('process')
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: { 
                type: 'string', 
                format: 'binary', 
                description: 'Gambar maksimal 10MB' 
                },
                action: { 
                type: 'string', 
                example: 'resize', 
                description: 'Ketik salah satu: convert | compress | resize' 
                },
                targetFormat: { 
                type: 'string', 
                example: 'webp', 
                description: 'Ketik salah satu: jpg | png | webp. Wajib diisi JIKA action = convert.' 
                },
                quality: { 
                type: 'number', 
                example: 80, 
                description: 'Isi angka 1-100. Wajib diisi JIKA action = compress.' 
                },
                customWidth: { 
                type: 'number', 
                example: 1080, 
                description: 'Isi angka piksel. Preset Lebar: 1080 (IG Post, IG Story, TikTok), 1280 (YouTube). Wajib diisi JIKA action = resize.' 
                },
                customHeight: { 
                type: 'number', 
                example: 1080, 
                description: 'Isi angka piksel. Preset Tinggi: 1080 (IG Post), 1920 (IG Story, TikTok), 720 (YouTube). Wajib diisi JIKA action = resize.' 
                }
            },
        },
    })
    async processImage(
        @UploadedFile(
        new ParseFilePipe({
            validators: [
            new MaxFileSizeValidator({ maxSize: 10 * 1024 * 1024 }),
            new FileTypeValidator({ fileType: '.(png|jpeg|jpg|webp)' }),
            ],
        }),
        ) file: Express.Multer.File,
        @Body() payload: ProcessImageDto,
        @Res() res: Response 
    ) {
        const result = await this.imageService.process(file, payload);
        
        res.set({
        'Content-Type': result.mimeType,
        'Content-Disposition': `attachment; filename="${result.fileName}"`,
        });
        res.send(result.buffer);
    }
}