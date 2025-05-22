import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { HydratedDocument } from "mongoose"
import { Region } from "../../region/schemas/region.schema"
import { District } from "../../district/schemas/district.schema"
import { VenuePhoto } from "../../venue_photo/schemas/venue_photo.schema"

export type VenueDocument = HydratedDocument<Venue>

@Schema()
export class Venue{
    @Prop()
    name:string

    @Prop()
    address:string

    @Prop()
    location:string

    @Prop()
    site:string

    @Prop()
    phone:string

    @Prop({type:mongoose.Schema.ObjectId,ref:"Region"})
    regionId:Region
    
    @Prop({type:mongoose.Schema.ObjectId,ref:"District"})
    districtId:District

    @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "VenuePhoto",
      },
    ],
  })
  venuePhotos: VenuePhoto[];
}
export const VenueSchema = SchemaFactory.createForClass(Venue)