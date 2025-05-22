import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument} from "mongoose";
import { Customer } from "../../customer/schemas/customer.schema";
import { Region } from "../../region/schemas/region.schema";
import { District } from "../../district/schemas/district.schema";

export type CustomerAddressDocument = HydratedDocument<CustomerAddress>;

@Schema()
export class CustomerAddress {
  @Prop({type:mongoose.Schema.ObjectId,ref:"Customer"})
  customerId:Customer

  @Prop()
  name: string;

  @Prop({type:mongoose.Schema.ObjectId,ref:"District"})
  districtId:District

  @Prop({type:mongoose.Schema.ObjectId,ref:"Region"})
  regionId:Region

  @Prop()
  sreet: string;

  @Prop()
  house: string;

  @Prop()
  flat: number;

  @Prop()
  location: string;

  @Prop()
  post_index: string;

  @Prop()
  info: string;
}

export const CustomerAddressSchema = SchemaFactory.createForClass(CustomerAddress);