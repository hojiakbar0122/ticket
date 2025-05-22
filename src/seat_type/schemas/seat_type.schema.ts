import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Seat } from "../../seat/schemas/seat.schema";

export type SeatTypeDocument = HydratedDocument<SeatType>

@Schema()
export class SeatType{
    @Prop()
    name:string

    @Prop({
        type: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Seat",
          },
        ],
      })
      seats: Seat[];
}
export const SeatTypeSchema = SchemaFactory.createForClass(SeatType)