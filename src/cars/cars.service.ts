import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/cars.interfaces';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  public cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car: Car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Card with id '${id}' not found`);

    return car;
  }

  create(createCardDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCardDto,
    };

    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB: Car = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException(
        `Car id '${updateCarDto.id}' is not valid inside body`
      );

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };

        return carDB;
      }

      return car;
    });

    return carDB;
  }
}
