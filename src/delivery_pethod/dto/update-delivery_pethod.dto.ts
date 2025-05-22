import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliveryPethodDto } from './create-delivery_pethod.dto';

export class UpdateDeliveryPethodDto extends PartialType(CreateDeliveryPethodDto) {}
