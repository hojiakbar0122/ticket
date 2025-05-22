import { Injectable } from '@nestjs/common';
import { CreateTicketStatusDto } from './dto/create-ticket_status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket_status.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TicketStatus } from './schemas/ticket_status.schema';
import { Model } from 'mongoose';

@Injectable()
export class TicketStatusService {
    constructor(@InjectModel(TicketStatus.name) private readonly ticketStatusSchema:Model<TicketStatus>){}
  create(createTicketStatusDto: CreateTicketStatusDto) {
    return this.create(createTicketStatusDto);
  }

  findAll() {
    return this.ticketStatusSchema.find();
  }

  findOne(id: number) {
    return this.ticketStatusSchema.findOne({id});
  }

  update(id: number, updateTicketStatusDto: UpdateTicketStatusDto) {
    return this.ticketStatusSchema.findOneAndUpdate({id}, updateTicketStatusDto, {new:true});
  }

  remove(id: number) {
    return this.ticketStatusSchema.findOneAndDelete({id});
  }
}
