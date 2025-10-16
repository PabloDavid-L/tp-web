import { UpdateCafeDto } from './dto/update-cafe-dto';
import { Injectable } from '@nestjs/common';
import { CreateCafeDto } from './dto/create-cafe-dto';
import { QueryCafeDto } from './dto/query-cafe-dto';
import { Cafe } from './cafe.interface';

@Injectable()
export class CafeService {
  nextId = 9;
  cafes = [
    { id: 1, name: 'Cafe 1', tipo: 'granos' },
    { id: 2, name: 'Cafe 2', tipo: 'molido' },
    { id: 3, name: 'Cafe 3', tipo: 'instantaneo' },
    { id: 4, name: 'Cafe 4', tipo: 'saquitos' },
    { id: 5, name: 'Cafe 5', tipo: 'saquitos' },
    { id: 6, name: 'Cafe 6', tipo: 'granos' },
    { id: 7, name: 'Cafe 7', tipo: 'molido' },
    { id: 8, name: 'Cafe 8', tipo: 'instantaneo' },
  ];
  getCafes(query: QueryCafeDto): Cafe[] {
    console.log('Query recibido:', query);
    const cafesToReturn = this.cafes.filter((cafe) => {
      if (
        query.tipo &&
        cafe.tipo.toLowerCase() !== query.tipo.toLowerCase()
      ) {
        return false;
      }
      return true;
    });
    const cafePaginated = cafesToReturn.slice(
      (query.page - 1) * query.limit,
      query.page * query.limit,
    );
    if (query.page && query.limit) {
      return cafePaginated;
    }
    return cafesToReturn;
  }
  getCafeById(id: number) {
    return this.cafes.find((cafe) => cafe.id === Number(id));
    //if (!cafe) {
    // throw new Error('Cafe not found');
    //}
  }
  getCafeEnSubClase(tipo: string) {
    return this.cafes.filter((cafe) => cafe.tipo === tipo);
  }
  createCafe(createCafeDto: CreateCafeDto) {
    const newCafe = {
      id: this.nextId,
      name: createCafeDto.name,
      tipo: createCafeDto.tipo,
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
      tipo: updateCafeDto.tipo,
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
