import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentPethodService } from './payment_pethod.service';
import { CreatePaymentPethodDto } from './dto/create-payment_pethod.dto';
import { UpdatePaymentPethodDto } from './dto/update-payment_pethod.dto';

@Controller('payment-pethod')
export class PaymentPethodController {
  constructor(private readonly paymentPethodService: PaymentPethodService) {}

  @Post()
  create(@Body() createPaymentPethodDto: CreatePaymentPethodDto) {
    return this.paymentPethodService.create(createPaymentPethodDto);
  }

  @Get()
  findAll() {
    return this.paymentPethodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentPethodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentPethodDto: UpdatePaymentPethodDto) {
    return this.paymentPethodService.update(+id, updatePaymentPethodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentPethodService.remove(+id);
  }
}
