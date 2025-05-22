import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Customer } from "../../customer/schemas/customer.schema";

export type CustomerCardDocument = HydratedDocument<CustomerCard>

@Schema()
export class CustomerCard {
  @Prop({type:mongoose.Schema.ObjectId,ref:"Customer"})
  customerId:Customer

  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop({ required: true })
  number: string;

  @Prop()
  year: string;

  @Prop()
  month: Date;

  @Prop()
  is_active: boolean;

  @Prop()
  is_main: boolean;
}
export const CustomerCardSchema = SchemaFactory.createForClass(CustomerCard)
