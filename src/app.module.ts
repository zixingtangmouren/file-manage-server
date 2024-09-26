import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BucketModule } from './bucket/bucket.module';

@Module({
  imports: [UserModule, BucketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
