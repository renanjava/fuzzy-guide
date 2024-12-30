import { Entity } from '@/shared/domain/entities/entity'
import { validate as uuidValidate } from 'uuid'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('should set props and id', () => {
    const props = {
      prop1: 'value1',
      prop2: 1,
    }
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it('should accept a valid uuid', () => {
    const props = {
      prop1: 'value1',
      prop2: 1,
    }
    const id = '1af8d236-2aa0-4b65-8ce0-ea358b2b650f'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it('should convert to a javascript object', () => {
    const props = {
      prop1: 'value1',
      prop2: 1,
    }
    const id = '1af8d236-2aa0-4b65-8ce0-ea358b2b650f'
    const entity = new StubEntity(props, id)

    expect(entity.toJson()).toStrictEqual({
      id,
      ...props,
    })
  })
})
