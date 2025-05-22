import { Injectable } from '@nestjs/common';
import { CreatePaymentPethodDto } from './dto/create-payment_pethod.dto';
import { UpdatePaymentPethodDto } from './dto/update-payment_pethod.dto';

@Injectable()
export class PaymentPethodService {
  create(createPaymentPethodDto: CreatePaymentPethodDto) {
    return 'This action adds a new paymentPethod';
  }

  findAll() {
    return `This action returns all paymentPethod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentPethod`;
  }

  update(id: number, updatePaymentPethodDto: UpdatePaymentPethodDto) {
    return `This action updates a #${id} paymentPethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentPethod`;
  }
}
