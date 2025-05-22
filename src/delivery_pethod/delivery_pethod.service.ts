import { Injectable } from '@nestjs/common';
import { CreateDeliveryPethodDto } from './dto/create-delivery_pethod.dto';
import { UpdateDeliveryPethodDto } from './dto/update-delivery_pethod.dto';

@Injectable()
export class DeliveryPethodService {
  create(createDeliveryPethodDto: CreateDeliveryPethodDto) {
    return 'This action adds a new deliveryPethod';
  }

  findAll() {
    return `This action returns all deliveryPethod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliveryPethod`;
  }

  update(id: number, updateDeliveryPethodDto: UpdateDeliveryPethodDto) {
    return `This action updates a #${id} deliveryPethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliveryPethod`;
  }
}
