// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class ImageService {}
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import sharp from 'sharp';
import { ProcessImageDto, ActionType } from './dto/process-image.dto';

@Injectable()
export class ImageService {
    async process(file: Express.Multer.File, payload: ProcessImageDto) {
        try {
            let imageProcessing = sharp(file.buffer);
            let finalMimeType = file.mimetype;
            let extension = file.originalname.split('.').pop();

            if (payload.action === ActionType.CONVERT && payload.targetFormat) {
                const format = payload.targetFormat.toLowerCase() as keyof sharp.FormatEnum;
                imageProcessing = imageProcessing.toFormat(format);
                finalMimeType = `image/${format}`;
                extension = format;
            } 
            else if (payload.action === ActionType.COMPRESS && payload.quality) {
                const currentFormat = finalMimeType.split('/')[1] as keyof sharp.FormatEnum;
                imageProcessing = imageProcessing.toFormat(currentFormat, { quality: payload.quality });
            }
            else if (payload.action === ActionType.RESIZE && (payload.customWidth || payload.customHeight)) {
                imageProcessing = imageProcessing.resize({
                width: payload.customWidth,
                height: payload.customHeight,
                fit: 'cover',
                });
            }

            const processedBuffer = await imageProcessing.toBuffer();
                    width: payload.customWidth,
                    height: payload.customHeight,
                    fit: 'cover',
                });
            }

            let processedBuffer = await imageProcessing.toBuffer();
            // Logika Smart Compress
            if (payload.action === ActionType.COMPRESS) {
                // Ukuran asli
                const originalSize = file.size;
                // Jika hasil kompres lebih besar atau sama dengan aslinya
                if (processedBuffer.length >= originalSize) {
                    // Kembalikan gambar asli 
                    processedBuffer = file.buffer;
                }
            }

            const baseName = file.originalname.substring(0, file.originalname.lastIndexOf('.')) || file.originalname;
            
            return {
                buffer: processedBuffer,
                mimeType: finalMimeType,
                fileName: `${baseName}-smartconvert.${extension}`
            };
        } catch (error) {
            throw new InternalServerErrorException('Mesin Sharp gagal memproses gambar');
        }
    }
}