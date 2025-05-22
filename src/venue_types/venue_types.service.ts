import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VenueType } from './schemas/venue_type.schema';
import { Model } from 'mongoose';

@Injectable()
export class VenueTypesService {
    constructor(@InjectModel(VenueType.name) private venueTypeSchema:Model<VenueType>){}
  
  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeSchema.create(createVenueTypeDto);
  }

  findAll() {
    return this.venueTypeSchema.find();
  }

  findOne(id: number) {
    return this.venueTypeSchema.findOne({id});
  }

  update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypeSchema.findOneAndUpdate({id}, updateVenueTypeDto, {new:true});
  }

  remove(id: number) {
    return this.venueTypeSchema.findOneAndDelete({id});
  }
}
