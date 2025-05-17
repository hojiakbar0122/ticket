import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { InjectModel } from "@nestjs/mongoose";
import { District } from "./schemas/district.schema";
import { Model } from "mongoose";
import { Region } from "../region/schemas/region.schema";

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District.name) private distrcitSchema: Model<District>,
    @InjectModel(Region.name) private regionSchema: Model<Region>
  ) {}

  async create(createDistrictDto: CreateDistrictDto) {
    const { regionId } = createDistrictDto;
    const region = await this.regionSchema.findById(regionId);
    if (!region) {
      throw new BadRequestException("Bunday region mavjud emas");
    }
    const district = await this.distrcitSchema.create(createDistrictDto);
    region.districts.push(district);
    await region.save();
  }

  findAll() {
    return `This action returns all district`;
  }

  findOne(id: number) {
    return `This action returns a #${id} district`;
  }

  update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return `This action updates a #${id} district`;
  }

  remove(id: number) {
    return `This action removes a #${id} district`;
  }
}
