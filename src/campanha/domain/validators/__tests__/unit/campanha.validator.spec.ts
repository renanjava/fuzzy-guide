import { CampanhaDataBuilder } from '@/campanha/domain/testing/helpers/campanha-data-builder'
import {
  //CampanhaRules,
  CampanhaValidator,
  CampanhaValidatorFactory,
} from '../../campanha.validator'
import { DateRules } from '@/campanha/domain/common/date.rules'
//import { CampanhaProps } from '@/campanha/domain/entities/campanha.entity'

let sut: CampanhaValidator
//let props: CampanhaProps
describe('CampanhaValidator Unit tests', () => {
  beforeEach(() => {
    sut = CampanhaValidatorFactory.create()
    //props = CampanhaDataBuilder({})
  })

  describe('QtdBilhetesTotais Field', () => {
    it('should return false and specific errors when qtdBilhetesTotais is null', () => {
      const isValid = sut.validate(null as any)
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be a positive number',
        'qtdBilhetesTotais must not be greater than 99999',
        'qtdBilhetesTotais must not be less than 10',
        'qtdBilhetesTotais must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesTotais is less than 10', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: 7,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must not be less than 10',
      ])
    })

    it('should return false and specific errors when qtdBilhetesTotais is NaN', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: NaN,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be a positive number',
        'qtdBilhetesTotais must not be greater than 99999',
        'qtdBilhetesTotais must not be less than 10',
        'qtdBilhetesTotais must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesTotais is Infinity', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: Infinity,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must not be greater than 99999',
        'qtdBilhetesTotais must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesTotais is -Infinity', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: -Infinity,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be a positive number',
        'qtdBilhetesTotais must not be less than 10',
        'qtdBilhetesTotais must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesTotais is a decimal', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: 19.1,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesTotais is a negative number', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: -200,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be a positive number',
        'qtdBilhetesTotais must not be less than 10',
      ])
    })

    it('should return false and specific errors when qtdBilhetesTotais is a string', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: 'string' as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be a positive number',
        'qtdBilhetesTotais must not be greater than 99999',
        'qtdBilhetesTotais must not be less than 10',
        'qtdBilhetesTotais must be an integer number',
      ])
    })

    /*
    it('should return true and validate the correct value for qtdBilhetesTotais', () => {
      let qtdBilhetesTotais = 999999
      let isValid = sut.validate({
        ...props,
        qtdBilhetesTotais: qtdBilhetesTotais,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({ ...props, qtdBilhetesTotais: qtdBilhetesTotais }),
      )

      qtdBilhetesTotais = 10
      isValid = sut.validate({
        ...props,
        qtdBilhetesTotais: qtdBilhetesTotais,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({ ...props, qtdBilhetesTotais: qtdBilhetesTotais }),
      )
  })
  */
  })

  describe('QtdBilhetesComprados Field', () => {
    it('should return false and specific errors when qtdBilhetesComprados is less than 0', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesComprados: -1,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesComprados']).toStrictEqual([
        'qtdBilhetesComprados must not be less than 0',
      ])
    })

    it('should return false and specific errors when qtdBilhetesComprados is a decimal', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesComprados: 19.1,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesComprados']).toStrictEqual([
        'qtdBilhetesComprados must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesComprados is a string', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesComprados: 'string' as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesComprados']).toStrictEqual([
        'qtdBilhetesComprados must not be greater than 99999',
        'qtdBilhetesComprados must not be less than 0',
        'qtdBilhetesComprados must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesComprados is Infinity', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesComprados: Infinity,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesComprados']).toStrictEqual([
        'qtdBilhetesComprados must not be greater than 99999',
        'qtdBilhetesComprados must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesComprados is -Infinity', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesComprados: -Infinity,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesComprados']).toStrictEqual([
        'qtdBilhetesComprados must not be less than 0',
        'qtdBilhetesComprados must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesComprados is NaN', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        qtdBilhetesComprados: NaN,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesComprados']).toStrictEqual([
        'qtdBilhetesComprados must not be greater than 99999',
        'qtdBilhetesComprados must not be less than 0',
        'qtdBilhetesComprados must be an integer number',
      ])
    })

    /*
    it('should return true and validate the correct value for qtdBilhetesComprados', () => {
      let qtdBilhetesComprados = 999999
      let isValid = sut.validate({
        ...props,
        qtdBilhetesComprados: qtdBilhetesComprados,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({
          ...props,
          qtdBilhetesComprados: qtdBilhetesComprados,
        }),
      )

      qtdBilhetesComprados = 0
      isValid = sut.validate({
        ...props,
        qtdBilhetesComprados: qtdBilhetesComprados,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({
          ...props,
          qtdBilhetesComprados: qtdBilhetesComprados,
        }),
      )
    })
    */
  })

  describe('DataInicioCampanha Field', () => {
    it('should return error when dataInicioCampanha is a past date', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        dataInicioCampanha: DateRules.YESTERDAY,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['dataInicioCampanha']).toStrictEqual([
        `minimal allowed date for dataInicioCampanha is ${DateRules.MIN_TODAY}`,
      ])
    })

    it('should return error when dataInicioCampanha is an invalid date', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        dataInicioCampanha: 'invalid-date' as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['dataInicioCampanha']).toStrictEqual([
        `maximal allowed date for dataInicioCampanha is ${DateRules.MAX_TODAY}`,
        `minimal allowed date for dataInicioCampanha is ${DateRules.MIN_TODAY}`,
        'dataInicioCampanha must be a Date instance',
      ])
    })

    it('should return error when dataInicioCampanha is null', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        dataInicioCampanha: null as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['dataInicioCampanha']).toStrictEqual([
        'dataInicioCampanha should not be empty',
        `maximal allowed date for dataInicioCampanha is ${DateRules.MAX_TODAY}`,
        `minimal allowed date for dataInicioCampanha is ${DateRules.MIN_TODAY}`,
        'dataInicioCampanha must be a Date instance',
      ])
    })

    /*
    it('should return valid when dataInicioCampanha is a valid date', () => {
      const dataInicioCampanha = new Date()

      const isValid = sut.validate({
        ...props,
        dataInicioCampanha: dataInicioCampanha,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({ ...props, dataInicioCampanha: dataInicioCampanha }),
      )
    })
    */
  })
})
