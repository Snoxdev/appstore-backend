import { Injectable } from '@nestjs/common';
import { CreateResenhaDto } from './dto/create-resenha.dto';
import { UpdateResenhaDto } from './dto/update-resenha.dto';

@Injectable()
export class ResenhaService {
  create(createResenhaDto: CreateResenhaDto) {
    return 'This action adds a new resenha';
  }

  findAll() {
    return `This action returns all resenha`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resenha`;
  }

  update(id: number, updateResenhaDto: UpdateResenhaDto) {
    return `This action updates a #${id} resenha`;
  }

  remove(id: number) {
    return `This action removes a #${id} resenha`;
  }
}
