import { Module } from '@nestjs/common';
import { DeliveryPethodService } from './delivery_pethod.service';
import { DeliveryPethodController } from './delivery_pethod.controller';

@Module({
  controllers: [DeliveryPethodController],
  providers: [DeliveryPethodService],
})
export class DeliveryPethodModule {}
