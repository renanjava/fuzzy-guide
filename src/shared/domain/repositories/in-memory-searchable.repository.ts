import { Entity } from '@/shared/domain/entities/entity'
import { SearchableRepositoryInterface } from './searchable-repository-contracts'
import { InMemoryRepository } from './in-memory.repository'

export abstract class InMemorySearchableRepository<E extends Entity>
  extends InMemoryRepository<E>
  implements SearchableRepositoryInterface<E, any, any>
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search(props: any): Promise<any> {
    throw new Error('Method not implemented.')
  }
}
