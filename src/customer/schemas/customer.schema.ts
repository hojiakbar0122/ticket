import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { CustomerAddress } from "../../customer_address/schemas/customer_address.schema";
import { CustomerCard } from "../../customer_card/schemas/customer_card.schema";

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  hashed_password: string;

  @Prop()
  birth_date: Date;

  @Prop()
  gender: string;

  @Prop()
  hashed_refresh_token: string;

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
        ref: "CustomerCard",
      },
    ],
  })
  customerCards: CustomerCard[];
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
