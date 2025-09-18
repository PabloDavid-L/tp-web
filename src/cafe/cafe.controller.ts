import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCafeDto } from './dto/create-cafe-dto';
import { UpdateCafeDto } from './dto/update-cafe-dto';
import type { Cafe } from './cafe.interface';

@Controller('cafe')
export class CafeController {
  nextId = 6;
  cafes = [
    { id: 1, name: 'Cafe 1', description: 'Cafe en granos' },
    { id: 2, name: 'Cafe 2', description: 'Cafe molido' },
    { id: 3, name: 'Cafe 3', description: 'Cafe instantaneo' },
    { id: 4, name: 'Cafe 4', description: 'Cafe en saquitos' },
    { id: 5, name: 'Cafe 5', description: 'Cafe en saquitos' },
  ];
  @Get()
  findAll(): Cafe[] {
    console.log('Obtener tipos de Cafe');
    return this.cafes;
  }
  @Get(':id')
  findOne(@Param('id') id: number): Cafe {
    console.log(`Cafe con id: ${id}`);
    const cafe = this.cafes.find((cafe) => cafe.id === Number(id));
    if (!cafe) {
      throw new Error('Cafe not found');
    }
    return cafe;
  }
  @Post()
  create(@Body() createCafeDto: CreateCafeDto): Cafe {
    console.log('Crear un nuevo cafe');
    // createCafeDto ={ name: 'Cafe 6', description: 'Cafe en saquitos' }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const newCafe = {
      id: this.nextId,
      name: createCafeDto.name,
      description: createCafeDto.description,
    };
    this.cafes.push(newCafe);
    this.nextId++;
    return newCafe;
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() updateCafeDto: UpdateCafeDto): Cafe {
    console.log(`Actualizar cafe con id: ${id}`);
    const cafeIndex = this.cafes.findIndex((cafe) => cafe.id === Number(id));
    if (cafeIndex === -1) {
      throw new Error('Cafe not found');
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.cafes[cafeIndex] = {
      id: Number(id),
      name: updateCafeDto.name,
      description: updateCafeDto.description,
    };
    return this.cafes[cafeIndex];
  }
  @Delete(':id')
  remove(@Param('id') id: number): Cafe {
    console.log(`Borrar cafe con id: ${id}`);
    const cafeBorrar = this.cafes.find((cafe) => cafe.id === Number(id));
    if (!cafeBorrar) {
      throw new Error('Cafe not found');
    }
    this.cafes = this.cafes.filter((cafe) => cafe.id !== Number(id));
    return cafeBorrar;
  }
}
