import { UpdateCafeDto } from './dto/update-cafe-dto';
import { Injectable } from '@nestjs/common';
import { CreateCafeDto } from './dto/create-cafe-dto';

@Injectable()
export class CafeService {
  nextId = 6;
  cafes = [
    { id: 1, name: 'Cafe 1', description: 'Cafe en granos' },
    { id: 2, name: 'Cafe 2', description: 'Cafe molido' },
    { id: 3, name: 'Cafe 3', description: 'Cafe instantaneo' },
    { id: 4, name: 'Cafe 4', description: 'Cafe en saquitos' },
    { id: 5, name: 'Cafe 5', description: 'Cafe en saquitos' },
  ];
  getCafes() {
    return this.cafes;
  }
  getCafeById(id: number) {
    return this.cafes.find((cafe) => cafe.id === Number(id));
    //if (!cafe) {
    // throw new Error('Cafe not found');
    //}
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
