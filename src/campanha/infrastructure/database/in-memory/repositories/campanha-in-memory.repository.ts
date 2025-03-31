import { CampanhaEntity } from '@/campanha/domain/entities/campanha.entity'
import { CampanhaRepository } from '@/campanha/domain/repositories/campanha.repository'
import { ConflictError } from '@/shared/domain/errors/conflict-error'
import { NotFoundError } from '@/shared/domain/errors/not-found-error'
import { InMemorySearchableRepository } from '@/shared/domain/repositories/in-memory-searchable.repository'
export class CampanhaInMemoryRepository
  extends InMemorySearchableRepository<CampanhaEntity>
  implements CampanhaRepository
{
  async findByTitulo(titulo: string): Promise<CampanhaEntity> {
    const entity = this.items.find(item => item.titulo === titulo)
    if (!entity) {
      throw new NotFoundError(`Entity not found using titulo ${titulo}`)
    }
    return entity
  }

  async tituloExists(titulo: string): Promise<void> {
    const entity = this.items.find(item => item.titulo === titulo)
    if (entity) {
      throw new ConflictError(`Titulo ${titulo} already exists `)
    }
  }
}
