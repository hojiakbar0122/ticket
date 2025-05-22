import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Venue } from "../../venue/schemas/venue.schema";

export type VenuePhotoDocument = HydratedDocument<VenuePhoto>;

@Schema()
export class VenuePhoto {
  @Prop({ type: mongoose.Schema.ObjectId, ref: "Venue" })
  venueId: Venue;

  @Prop({ required: true })
  name: string;
}

export const VenuePhotoSchema = SchemaFactory.createForClass(VenuePhoto);
