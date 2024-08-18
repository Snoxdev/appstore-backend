import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResenhaService } from './resenha.service';
import { CreateResenhaDto } from './dto/create-resenha.dto';
import { UpdateResenhaDto } from './dto/update-resenha.dto';

@Controller('resenha')
export class ResenhaController {
  constructor(private readonly resenhaService: ResenhaService) {}

  @Post()
  create(@Body() createResenhaDto: CreateResenhaDto) {
    return this.resenhaService.create(createResenhaDto);
  }

  @Get()
  findAll() {
    return this.resenhaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resenhaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResenhaDto: UpdateResenhaDto) {
    return this.resenhaService.update(+id, updateResenhaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resenhaService.remove(+id);
  }
}
