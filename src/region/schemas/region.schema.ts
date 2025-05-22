import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { District } from "../../district/schemas/district.schema";
import { CustomerAddress } from "../../customer_address/schemas/customer_address.schema";
import { Venue } from "../../venue/schemas/venue.schema";

export type RegionDocument = HydratedDocument<Region>;

@Schema()
export class Region {
  @Prop({ required: true })
  name: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "District",
      },
    ],
  })
  districts: District[];

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CustomerAddress",
      },
    ],
  })
  customerAddresses: CustomerAddress[];

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Venue",
      },
    ],
  })
  venues: Venue[];
}

export const RegionSchema = SchemaFactory.createForClass(Region)
