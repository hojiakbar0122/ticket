import { Module } from '@nestjs/common';
import { VenueTypesService } from './venue_types.service';
import { VenueTypesController } from './venue_types.controller';

@Module({
  controllers: [VenueTypesController],
  providers: [VenueTypesService],
})
export class VenueTypesModule {}
