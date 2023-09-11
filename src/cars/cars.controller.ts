import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe) // use of ValidationPipe at Controller level
export class CarsController {
  constructor(private readonly carsService: CarsService) { }

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  // getById(@Param('id', new ParseUUIDPipe({ version: '5' })) id: string) {
  getById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.carsService.findOneById(id);
  }

  @Post()
  @UsePipes(ValidationPipe) // use of ValidationPipe at method level
  createCar(@Body() createCardDto: CreateCarDto) {
    return createCardDto;
  }

  @Patch(':id')
  updateCar(@Param('id') id: string, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string) {
    return {
      method: 'DELETE',
      id,
    };
  }
}
