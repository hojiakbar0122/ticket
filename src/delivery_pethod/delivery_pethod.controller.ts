import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryPethodService } from './delivery_pethod.service';
import { CreateDeliveryPethodDto } from './dto/create-delivery_pethod.dto';
import { UpdateDeliveryPethodDto } from './dto/update-delivery_pethod.dto';

@Controller('delivery-pethod')
export class DeliveryPethodController {
  constructor(private readonly deliveryPethodService: DeliveryPethodService) {}

  @Post()
  create(@Body() createDeliveryPethodDto: CreateDeliveryPethodDto) {
    return this.deliveryPethodService.create(createDeliveryPethodDto);
  }

  @Get()
  findAll() {
    return this.deliveryPethodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryPethodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliveryPethodDto: UpdateDeliveryPethodDto) {
    return this.deliveryPethodService.update(+id, updateDeliveryPethodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryPethodService.remove(+id);
  }
}
