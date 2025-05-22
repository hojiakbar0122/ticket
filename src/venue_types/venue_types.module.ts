import { Module } from "@nestjs/common";
import { VenueTypesService } from "./venue_types.service";
import { VenueTypesController } from "./venue_types.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { VenueType } from "./schemas/venue_type.schema";
import { VenuePhotoSchema } from "../venue_photo/schemas/venue_photo.schema";
import { Type, TypeSchema } from "../types/schemas/type.schema";
import { Venue, VenueSchema } from "../venue/schemas/venue.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VenueType.name, schema: VenuePhotoSchema },
      { name: Type.name, schema: TypeSchema },
      { name: Venue.name, schema: VenueSchema },
    ]),
  ],
  controllers: [VenueTypesController],
  providers: [VenueTypesService],
})
export class VenueTypesModule {}
