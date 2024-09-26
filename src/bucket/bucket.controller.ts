import { Controller, Get, UseGuards } from '@nestjs/common';
import { BucketService } from './bucket.service';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('bucket')
@UseGuards(AuthGuard)
export class BucketController {
  constructor(private readonly bucketService: BucketService) {}

  @Get('list')
  list() {
    return '';
  }
}
