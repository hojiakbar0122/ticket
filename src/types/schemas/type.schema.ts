import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { VenueType } from "../../venue_types/schemas/venue_type.schema";

export type TypeDocument = HydratedDocument<Type>;

@Schema()
export class Type {
  @Prop({ required: true })
  name: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "VenueType",
      },
    ],
  })
  venueTypes: VenueType[];
}

export const TypeSchema = SchemaFactory.createForClass(Type)