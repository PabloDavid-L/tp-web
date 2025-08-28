import { Controller, Delete, Get, Param } from '@nestjs/common';

@Controller('tp-main')
export class TpMainController {
  @Get()
  findAll(): any[] {
    console.log('Obtener tipos de Cafe');
    return [
      { id: 1, name: 'Cafe 1', description: 'cafe tatata' },
      { id: 2, name: 'Cafe 2', description: 'cafe tatata' },
      { id: 3, name: 'Cafe 3', description: 'cafe tatata' },
    ];
  }
  @Get(':id')
  findOne(@Param('id') id: number): any {
    console.log('Cafe con id: ${id}');
    return {
      id: id,
      name: 'Cafe ${id}',
      description: 'Descripcion del Cafe ${id}',
    };
  }
  @Delete(':id')
  rempve(@Param('id') id: number): any {
    console.log('Borrar cafe con id: ${id}');
    return {
      id: id,
      name: 'Cafe ${id}',
      description: 'Descripcion del Cafe ${id}',
    };
  }
}
