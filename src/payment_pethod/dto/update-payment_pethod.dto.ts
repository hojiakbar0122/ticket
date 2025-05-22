import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentPethodDto } from './create-payment_pethod.dto';

export class UpdatePaymentPethodDto extends PartialType(CreatePaymentPethodDto) {}
