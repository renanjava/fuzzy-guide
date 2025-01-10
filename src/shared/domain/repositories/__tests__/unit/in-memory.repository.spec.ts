import { NotFoundError } from './../../../errors/not-found-error'
import { Entity } from '@/shared/domain/entities/entity'
import { InMemoryRepository } from '../../in-memory.repository'

type StubEntityProps = {
  name: string
  price: number
}

class StubEntity extends Entity<StubEntityProps> {}

class StubInMemoryRepository extends InMemoryRepository<StubEntity> {}

describe('InMemoryRepository unit tests', () => {
  let sut: StubInMemoryRepository

  beforeEach(() => {
    sut = new StubInMemoryRepository()
  })

  it('should insert a new entity', async () => {
    const entity = new StubEntity({ name: 'test name', price: 40 })
    await sut.insert(entity)
    expect(entity.toJson()).toStrictEqual(sut.items[0].toJson())
  })

  it('should throw error when entity not found', async () => {
    await expect(sut.findById('fakeId')).rejects.toThrow(
      new NotFoundError('Entity not found'),
    )
  })

  it('should find a entity by id', async () => {
    const entity = new StubEntity({ name: 'test name', price: 40 })
    await sut.insert(entity)
    const result = await sut.findById(entity._id)
    expect(entity.toJson()).toStrictEqual(result.toJson())
  })

  it('should returns all entities', async () => {
    const entity1 = new StubEntity({ name: 'test name1', price: 40 })
    await sut.insert(entity1)
    const entity2 = new StubEntity({ name: 'test name2', price: 60 })
    await sut.insert(entity2)
    const result = await sut.findAll()
    expect([entity1, entity2]).toStrictEqual(result)
  })

  it('should throw error when updating entity not found', async () => {
    const entity = new StubEntity({ name: 'test update', price: 20 })
    await expect(sut.update(entity)).rejects.toThrow(
      new NotFoundError('Entity not found'),
    )
  })

  it('should find a entity updating by id', async () => {
    const entityInsert = new StubEntity({ name: 'test name', price: 40 })
    await sut.insert(entityInsert)
    const entityUpdate = new StubEntity(
      { name: 'test update', price: 20 },
      entityInsert._id,
    )
    await sut.update(entityUpdate)
    const result = await sut.findById(entityUpdate._id)
    expect(entityUpdate.toJson()).toStrictEqual(result.toJson())
  })

  it('should throw error when deleting entity not found', async () => {
    await expect(sut.deleteById('fakeId')).rejects.toThrow(
      new NotFoundError('Entity not found'),
    )
  })

  it('should find a entity deleting by id', async () => {
    const entity = new StubEntity({ name: 'test name', price: 40 })
    await sut.insert(entity)
    await sut.deleteById(entity._id)
    expect(sut.items).toHaveLength(0)
  })
})
