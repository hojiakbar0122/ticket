import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AdminModule } from "./admin/admin.module";
import { AuthModule } from "./auth/auth.module";
import { CustomerModule } from "./customer/customer.module";
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { SeatModule } from './seat/seat.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { DistrictModule } from './district/district.module';
import { RegionModule } from './region/region.module';
import { VenueModule } from './venue/venue.module';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { VenueTypesModule } from './venue_types/venue_types.module';
import { TypesModule } from './types/types.module';
import { EventModule } from './event/event.module';
import { EventTypeModule } from './event_type/event_type.module';
import { HumanCategoryModule } from './human_category/human_category.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    AdminModule,
    AuthModule,
    CustomerModule,
    CustomerAddressModule,
    CustomerCardModule,
    SeatModule,
    SeatTypeModule,
    DistrictModule,
    RegionModule,
    VenueModule,
    VenuePhotoModule,
    VenueTypesModule,
    TypesModule,
    EventModule,
    EventTypeModule,
    HumanCategoryModule,
    TicketModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
