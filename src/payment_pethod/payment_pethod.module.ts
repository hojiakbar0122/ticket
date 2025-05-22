import { Module } from '@nestjs/common';
import { PaymentPethodService } from './payment_pethod.service';
import { PaymentPethodController } from './payment_pethod.controller';

@Module({
  controllers: [PaymentPethodController],
  providers: [PaymentPethodService],
})
export class PaymentPethodModule {}
