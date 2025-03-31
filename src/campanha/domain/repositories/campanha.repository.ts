import { CampanhaEntity } from './../entities/campanha.entity'
import { SearchableRepositoryInterface } from '@/shared/domain/repositories/searchable-repository-contracts'

export interface CampanhaRepository
  extends SearchableRepositoryInterface<CampanhaEntity, any, any> {
  findByTitulo(titulo: string): Promise<CampanhaEntity>
  tituloExists(titulo: string): Promise<void>
}
