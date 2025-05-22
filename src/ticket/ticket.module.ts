import { Module } from "@nestjs/common";
import { TicketService } from "./ticket.service";
import { TicketController } from "./ticket.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Ticket, TicketSchema } from "./schemas/ticket.schema";
import {
  TicketStatus,
  TicketStatusSchema,
} from "../ticket_status/schemas/ticket_status.schema";
import { Seat, SeatSchema } from "../seat/schemas/seat.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ticket.name, schema: TicketSchema },
      { name: TicketStatus.name, schema: TicketStatusSchema },
      { name: Seat.name, schema: SeatSchema },
    ]),
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
