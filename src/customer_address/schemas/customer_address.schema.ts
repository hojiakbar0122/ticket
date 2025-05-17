import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument} from "mongoose";

export type CustomerAddressDocument = HydratedDocument<CustomerAddress>;

@Schema()
export class CustomerAddress {
  @Prop()
  customerId: string;

  @Prop()
  name: string;

  @Prop()
  districtId: string;

  @Prop()
  regionId: string;

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