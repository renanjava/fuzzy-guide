import { Injectable } from '@nestjs/common'
import { CreateCampanhaDto } from './dto/create-campanha.dto'
import { UpdateCampanhaDto } from './dto/update-campanha.dto'

@Injectable()
export class CampanhaService {
  create(createCampanhaDto: CreateCampanhaDto) {
    return 'This action adds a new campanha'
  }

  findAll() {
    return `This action returns all campanha`
  }

  findOne(id: number) {
    return `This action returns a #${id} campanha`
  }

  update(id: number, updateCampanhaDto: UpdateCampanhaDto) {
    return `This action updates a #${id} campanha`
  }

  remove(id: number) {
    return `This action removes a #${id} campanha`
  }
}
