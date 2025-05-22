import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Venue } from "../../venue/schemas/venue.schema";
import { Type } from "../../types/schemas/type.schema";

export type VenueTypeDocument = HydratedDocument<VenueType>;

@Schema()
export class VenueType {
  @Prop({ type: mongoose.Schema.ObjectId, ref: "Venue" })
  venueId: Venue;

  @Prop({ type: mongoose.Schema.ObjectId, ref: "Type" })
  typeId: Type;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Venue",
      },
    ],
  })
  venues: Venue[];

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Type",
      },
    ],
  })
  types: Type[];
}

export const VenueTypeSchema = SchemaFactory.createForClass(VenueType);
