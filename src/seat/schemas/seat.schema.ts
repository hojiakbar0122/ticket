import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { SeatType } from "../../seat_type/schemas/seat_type.schema";
import { Venue } from "../../venue/schemas/venue.schema";
import { Ticket } from "../../ticket/schemas/ticket.schema";

export type SeatDocument = HydratedDocument<Seat>;

@Schema()
export class Seat {
  @Prop()
  sector: number;

  @Prop()
  row_number: number;

  @Prop()
  row: number;

  @Prop({ type: mongoose.Schema.ObjectId, ref: "Vanue" })
  vanueId: Venue;

  @Prop({ type: mongoose.Schema.ObjectId, ref: "SeatType" })
  seatTypeId: SeatType;

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
export const SeatSchema = SchemaFactory.createForClass(Seat);
