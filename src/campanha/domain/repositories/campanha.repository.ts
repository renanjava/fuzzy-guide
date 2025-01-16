import { RepositoryInterface } from '@/shared/domain/repositories/repository-contracts'
import { CampanhaEntity } from './../entities/campanha.entity'

export interface CampanhaRepository
  extends RepositoryInterface<CampanhaEntity> {
  findByTitulo(titulo: string): Promise<CampanhaEntity>
  tituloExists(titulo: string): Promise<void>
}
