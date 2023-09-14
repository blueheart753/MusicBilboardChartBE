import { Controller, Get } from '@nestjs/common';

@Controller('file')
export class FileController {
  @Get()
  getAll(): string {
    return 'ALL FICTION';
  }
}
