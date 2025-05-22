import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Region } from "../../region/schemas/region.schema";
import { CustomerAddress } from "../../customer_address/schemas/customer_address.schema";
import { Venue } from "../../venue/schemas/venue.schema";

export type DistrictDocument = HydratedDocument<District>

@Schema()
export class District {
    @Prop({required:true})
    name:string

    @Prop({type:mongoose.Schema.ObjectId,ref:"Region"})
    regionId:Region

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

export const DistrictSchema = SchemaFactory.createForClass(District)
