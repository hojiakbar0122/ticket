import { Injectable } from '@nestjs/common';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VenuePhoto } from './schemas/venue_photo.schema';
import { Model } from 'mongoose';

@Injectable()
export class VenuePhotoService {
  constructor(@InjectModel(VenuePhoto.name) private venuePhotoSchema:Model<VenuePhoto>){}

  create(createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoSchema.create(createVenuePhotoDto);
  }

  findAll() {
    return this.venuePhotoSchema.find();
  }

  findOne(id: number) {
    return this.venuePhotoSchema.findOne({id});
  }

  update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return this.venuePhotoSchema.findOneAndUpdate({id}, updateVenuePhotoDto, {new:true});
  }

  remove(id: number) {
    return this.venuePhotoSchema.findOneAndDelete({id});
  }
}
