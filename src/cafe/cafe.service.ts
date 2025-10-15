import { UpdateCafeDto } from './dto/update-cafe-dto';
import { Injectable } from '@nestjs/common';
import { CreateCafeDto } from './dto/create-cafe-dto';
import { QueryCafeDto } from './dto/query-cafe-dto';
import { Cafe } from './cafe.interface';

@Injectable()
export class CafeService {
  nextId = 9;
  cafes = [
    { id: 1, name: 'Cafe 1', description: 'granos' },
    { id: 2, name: 'Cafe 2', description: 'molido' },
    { id: 3, name: 'Cafe 3', description: 'instantaneo' },
    { id: 4, name: 'Cafe 4', description: 'saquitos' },
    { id: 5, name: 'Cafe 5', description: 'saquitos' },
    { id: 6, name: 'Cafe 6', description: 'granos' },
    { id: 7, name: 'Cafe 7', description: 'molido' },
    { id: 8, name: 'Cafe 8', description: 'instantaneo' },
  ];
  getCafes(query: QueryCafeDto): Cafe[] {
    console.log('Query recibido:', query);
    const cafesToReturn = this.cafes.filter((cafe) => {
      if (
        query.description &&
        cafe.description.toLowerCase() !== query.description.toLowerCase()
      ) {
        return false;
      }
      return true;
    });
    return cafesToReturn;
  }
  getCafeById(id: number) {
    return this.cafes.find((cafe) => cafe.id === Number(id));
    //if (!cafe) {
    // throw new Error('Cafe not found');
    //}
  }
  getCafeEnSubClase(description: string) {
    return this.cafes.filter((cafe) => cafe.description === description);
  }
  createCafe(createCafeDto: CreateCafeDto) {
    const newCafe = {
      id: this.nextId,
      name: createCafeDto.name,
      description: createCafeDto.description,
    };
    this.cafes.push(newCafe);
    this.nextId++;
    return newCafe;
  }
  updateCafe(updateCafeDto: UpdateCafeDto, id: number) {
    const cafeIndex = this.cafes.findIndex((cafe) => cafe.id === Number(id));
    if (cafeIndex === -1) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.cafes[cafeIndex] = {
      id: Number(id),
      name: updateCafeDto.name,
      description: updateCafeDto.description,
    };
    return this.cafes[cafeIndex];
  }
  deleteCafe(id: number) {
    const cafeIndex = this.cafes.findIndex((cafe) => cafe.id === Number(id));
    if (cafeIndex === -1) {
      return null;
    }
    const cafeBorrar = this.cafes[cafeIndex];
    this.cafes = this.cafes.filter((cafe) => cafe.id !== Number(id));
    return cafeBorrar;
  }
}
