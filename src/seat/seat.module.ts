import { Module } from "@nestjs/common";
import { SeatService } from "./seat.service";
import { SeatController } from "./seat.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Seat, SeatSchema } from "./schemas/seat.schema";
import { SeatType, SeatTypeSchema } from "../seat_type/schemas/seat_type.schema";
import { Venue, VenueSchema } from "../venue/schemas/venue.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Seat.name, schema: SeatSchema },
      { name: SeatType.name, schema: SeatTypeSchema },
      { name: Venue.name, schema: VenueSchema },
    ]),
  ],
  controllers: [SeatController],
  providers: [SeatService],
})
export class SeatModule {}
