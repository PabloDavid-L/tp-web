import { CafeService } from './cafe.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateCafeDto } from './dto/create-cafe-dto';
import { UpdateCafeDto } from './dto/update-cafe-dto';
import type { Cafe } from './cafe.interface';
import { QueryCafeDto } from './dto/query-cafe-dto';

@Controller('cafe')
export class CafeController {
  constructor(private readonly cafeService: CafeService) {}
  @Get()
  findAll(@Query() query: QueryCafeDto): Cafe[] {
    console.log('Obtener tipos de Cafe');
    return this.cafeService.getCafes(query);
  }
  @Get(':id')
  findOne(@Param('id') id: number): Cafe {
    console.log(`Cafe con id: ${id}`);
    const cafe = this.cafeService.getCafeById(id);
    if (!cafe) {
      throw new Error('Cafe not found');
    }
    return cafe;
  }
  @Get('subclase/:description')
  findEnSubClase(@Param('description') description: string): Cafe[] {
    console.log(`Cafes con descripcion: ${description}`);
    return this.cafeService.getCafeEnSubClase(description);
  }
  @Post()
  create(@Body() createCafeDto: CreateCafeDto): Cafe {
    console.log('Crear un nuevo cafe');
    return this.cafeService.createCafe(createCafeDto);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() updateCafeDto: UpdateCafeDto): Cafe {
    console.log(`Actualizar cafe con id: ${id}`);
    const cafe = this.cafeService.updateCafe(updateCafeDto, id);
    if (!cafe) {
      throw new Error('Cafe not found');
    }
    return cafe;
  }
  @Delete(':id')
  remove(@Param('id') id: number): Cafe {
    console.log(`Borrar cafe con id: ${id}`);
    const cafeBorrar = this.cafeService.deleteCafe(id);
    if (!cafeBorrar) {
      throw new Error('Cafe not found');
    }
    return cafeBorrar;
  }
}
