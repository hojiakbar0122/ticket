import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { TicketStatus } from "../../ticket_status/schemas/ticket_status.schema";

export type TicketDocument = HydratedDocument<Ticket>

@Schema()
export class Ticket{
    @Prop()
    eventId:string

    @Prop()
    seatId:string

    @Prop()
    price:number

    @Prop()
    service_fee:string
    
    @Prop({type:mongoose.Schema.ObjectId,ref:"TicketStatus"})
    statusId:TicketStatus

    @Prop()
    ticket_type:string
}
export const TicketSchema = SchemaFactory.createForClass(Ticket)