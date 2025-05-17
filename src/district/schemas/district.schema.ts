import { Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Region } from "../../region/schemas/region.schema";

export type DistrictDocument = HydratedDocument<District>

export class District {
    @Prop({required:true})
    name:string

    @Prop({type:mongoose.Schema.ObjectId,ref:"Region"})
    regionId:Region
}

export const DistrictSchema = SchemaFactory.createForClass(District)
