import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { HydratedDocument } from "mongoose"
import { Ticket } from "../../ticket/schemas/ticket.schema";

export type TicketStatusDocument = HydratedDocument<TicketStatus>

@Schema()
export class TicketStatus{
    @Prop()
    name:string

    @Prop({
        type: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ticket",
          },
        ],
      })
      tickets: Ticket[];
}
export const TicketStatusSchema = SchemaFactory.createForClass(TicketStatus)