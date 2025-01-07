import { CampanhaDataBuilder } from '@/campanha/domain/testing/helpers/campanha-data-builder'
import {
  //CampanhaRules,
  CampanhaValidator,
  CampanhaValidatorFactory,
} from '../../campanha.validator'
import { DateRules } from '@/campanha/domain/common/date.rules'
import { DomainRules } from '@/campanha/domain/common/domain.rules'
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

    it('should return error when dataInicioCampanha is a future date', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        dataInicioCampanha: DateRules.TOMORROW,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['dataInicioCampanha']).toStrictEqual([
        `maximal allowed date for dataInicioCampanha is ${DateRules.MAX_TODAY}`,
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
      const isValid = sut.validate({
        ...props,
        dataInicioCampanha: DateRules.TODAY,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({ ...props, dataInicioCampanha: DateRules.TODAY }),
      )
    })
    */
  })

  describe('DataFimCampanha Field', () => {
    it('should return error when dataFimCampanha is yesterday', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        dataFimCampanha: DateRules.YESTERDAY,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['dataFimCampanha']).toStrictEqual([
        `minimal allowed date for dataFimCampanha is ${DateRules.TOMORROW}`,
      ])
    })

    it('should return error when dataFimCampanha is today', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        dataFimCampanha: DateRules.TODAY,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['dataFimCampanha']).toStrictEqual([
        `minimal allowed date for dataFimCampanha is ${DateRules.TOMORROW}`,
      ])
    })

    it('should return error when dataFimCampanha is an invalid date', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        dataFimCampanha: 'invalid-date' as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['dataFimCampanha']).toStrictEqual([
        `minimal allowed date for dataFimCampanha is ${DateRules.TOMORROW}`,
        'dataFimCampanha must be a Date instance',
      ])
    })

    /*
    it('should return valid when dataFimCampanha is a future date', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        dataFimCampanha: DateRules.TOMORROW,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({ ...props, dataFimCampanha: DateRules.TOMORROW }
      )
    })

    it('should return valid when dataFimCampanha is null', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        dataFimCampanha: null as any,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({ ...props, dataFimCampanha: null }
      )
    })
    */
  })

  describe('PorcentagemProgresso Field', () => {
    it('should return error when porcentagemProgresso is below the minimum value', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        porcentagemProgresso: DomainRules.MIN_PROGRESS_PERCENTAGE - 1,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['porcentagemProgresso']).toStrictEqual([
        `porcentagemProgresso must not be less than ${DomainRules.MIN_PROGRESS_PERCENTAGE}`,
      ])
    })

    it('should return error when porcentagemProgresso is above the maximum value', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        porcentagemProgresso: DomainRules.MAX_PROGRESS_PERCENTAGE + 1,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['porcentagemProgresso']).toStrictEqual([
        `porcentagemProgresso must not be greater than ${DomainRules.MAX_PROGRESS_PERCENTAGE}`,
      ])
    })

    it('should return error when porcentagemProgresso is not a number', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        porcentagemProgresso: 'string' as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['porcentagemProgresso']).toStrictEqual([
        'porcentagemProgresso must be a number conforming to the specified constraints',
        `porcentagemProgresso must not be greater than ${DomainRules.MAX_PROGRESS_PERCENTAGE}`,
        `porcentagemProgresso must not be less than ${DomainRules.MIN_PROGRESS_PERCENTAGE}`,
      ])
    })

    it('should return error when porcentagemProgresso has more than 2 decimal places', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        porcentagemProgresso: 12.345,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['porcentagemProgresso']).toStrictEqual([
        'porcentagemProgresso must be a number conforming to the specified constraints',
      ])
    })

    /*
    it('should return valid when porcentagemProgresso is within the valid range and is a valid number', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        porcentagemProgresso: 50.0,
      })
      expect(isValid).toBeTruthy()
    })
    */
  })

  describe('CampanhaAtiva Field', () => {
    it('should return error when campanhaAtiva is not a boolean', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        campanhaAtiva: 'true' as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['campanhaAtiva']).toStrictEqual([
        'campanhaAtiva must be a boolean value',
      ])
    })

    /*
    it('should return valid when campanhaAtiva is true', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        campanhaAtiva: true,
      })
      expect(isValid).toBeTruthy()
    })

    it('should return valid when campanhaAtiva is false', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        campanhaAtiva: false,
      })
      expect(isValid).toBeTruthy()
    })
    */
  })

  describe('ValorUnitarioBilhete Field', () => {
    it('should return error when valorUnitarioBilhete is not a number', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        valorUnitarioBilhete: 'string' as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['valorUnitarioBilhete']).toStrictEqual([
        'valorUnitarioBilhete must be a number conforming to the specified constraints',
      ])
    })

    it('should return error when valorUnitarioBilhete has more than 2 decimal places', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        valorUnitarioBilhete: 12.345,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['valorUnitarioBilhete']).toStrictEqual([
        'valorUnitarioBilhete must be a number conforming to the specified constraints',
      ])
    })

    /*
    it('should return valid when valorUnitarioBilhete is a valid number', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        valorUnitarioBilhete: 10.5,
      })
      expect(isValid).toBeTruthy()
    })
    */

    it('should return error when valorUnitarioBilhete is empty', () => {
      const isValid = sut.validate({
        ...CampanhaDataBuilder({}),
        valorUnitarioBilhete: null as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['valorUnitarioBilhete']).toStrictEqual([
        'valorUnitarioBilhete should not be empty',
        'valorUnitarioBilhete must be a number conforming to the specified constraints',
      ])
    })
  })
})
