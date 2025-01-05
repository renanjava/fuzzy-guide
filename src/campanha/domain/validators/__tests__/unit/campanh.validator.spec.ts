import { CampanhaDataBuilder } from '@/campanha/domain/testing/helpers/campanha-data-builder'
import {
  CampanhaRules,
  CampanhaValidator,
  CampanhaValidatorFactory,
} from '../../campanha.validator'

let sut: CampanhaValidator
describe('CampanhaValidator Unit tests', () => {
  beforeEach(() => {
    sut = CampanhaValidatorFactory.create()
  })
  describe('QtdBilhetesTotais Field', () => {
    it('Invalid cases for QtdBilhetesTotais field', () => {
      let isValid = sut.validate(null as any)
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be a positive number',
        'qtdBilhetesTotais must not be less than 10',
        'qtdBilhetesTotais must be an integer number',
      ])

      isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: 7,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must not be less than 10',
      ])

      isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: NaN,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be a positive number',
        'qtdBilhetesTotais must not be less than 10',
        'qtdBilhetesTotais must be an integer number',
      ])

      isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: Infinity,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be an integer number',
      ])

      isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: -Infinity,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be a positive number',
        'qtdBilhetesTotais must not be less than 10',
        'qtdBilhetesTotais must be an integer number',
      ])

      isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: 19.1,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be an integer number',
      ])

      isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: -200,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be a positive number',
        'qtdBilhetesTotais must not be less than 10',
      ])

      isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: 'string' as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be a positive number',
        'qtdBilhetesTotais must not be less than 10',
        'qtdBilhetesTotais must be an integer number',
      ])
    })

    it('Valid cases for QtdBilhetesTotais field', () => {
      const props = CampanhaDataBuilder({})
      const isValid = sut.validate({ ...props })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(new CampanhaRules(props))
    })
  })
})
