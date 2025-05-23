import { CampanhaDataBuilder } from '@/campanha/domain/testing/helpers/campanha-data-builder'
import {
  CampanhaRules,
  CampanhaValidator,
  CampanhaValidatorFactory,
} from '../../campanha.validator'
import { DateRules } from '@/shared/common/date.rules'
import { DomainRules } from '@/campanha/domain/common/domain.rules'
import { CampanhaProps } from '@/campanha/domain/entities/campanha.entity'

let sut: CampanhaValidator
let props: CampanhaProps
describe('CampanhaValidator Unit tests', () => {
  beforeEach(() => {
    sut = CampanhaValidatorFactory.create()
    props = CampanhaDataBuilder({})
  })

  describe('Titulo Field', () => {
    it('should return false and specific errors when titulo is less than 4 characters', () => {
      const isValid = sut.validate({
        ...props,
        titulo: 'abc',
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['titulo']).toStrictEqual([
        'titulo must be longer than or equal to 4 characters',
      ])
    })

    it('should return false and specific errors when titulo exceeds 40 characters', () => {
      const isValid = sut.validate({
        ...props,
        titulo: 'a'.repeat(41),
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['titulo']).toStrictEqual([
        'titulo must be shorter than or equal to 40 characters',
      ])
    })

    it('should return false and specific errors when titulo contains invalid characters', () => {
      const isValid = sut.validate({
        ...props,
        titulo: 'Titulo@Invalido!',
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['titulo']).toStrictEqual([
        'titulo must match /^[a-zA-Z0-9\\s]+$/ regular expression',
      ])
    })

    it('should return false and specific errors when titulo is empty', () => {
      const isValid = sut.validate({
        ...props,
        titulo: '',
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['titulo']).toStrictEqual([
        'titulo should not be empty',
        'titulo must be longer than or equal to 4 characters',
        'titulo must match /^[a-zA-Z0-9\\s]+$/ regular expression',
      ])
    })

    it('should return false and specific errors when titulo is not a string', () => {
      const isValid = sut.validate({
        ...props,
        titulo: 123 as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['titulo']).toStrictEqual([
        'titulo must be shorter than or equal to 40 characters',
        'titulo must be longer than or equal to 4 characters',
        'titulo must match /^[a-zA-Z0-9\\s]+$/ regular expression',
        'titulo must be a string',
      ])
    })

    it('should return false and specific errors when titulo is null', () => {
      const isValid = sut.validate({
        ...props,
        titulo: null,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['titulo']).toStrictEqual([
        'titulo should not be empty',
        'titulo must be shorter than or equal to 40 characters',
        'titulo must be longer than or equal to 4 characters',
        'titulo must match /^[a-zA-Z0-9\\s]+$/ regular expression',
        'titulo must be a string',
      ])
    })

    it('should return true and validate the correct value for titulo', () => {
      const titulo = 'Titulo Valido'
      const isValid = sut.validate({
        ...props,
        titulo,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({ ...props, titulo }),
      )
    })

    it('should return true for titulo with exactly 4 characters', () => {
      const titulo = 'abcd'
      const isValid = sut.validate({
        ...props,
        titulo,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({ ...props, titulo }),
      )
    })

    it('should return true for titulo with exactly 40 characters', () => {
      const titulo = 'a'.repeat(40)
      const isValid = sut.validate({
        ...props,
        titulo,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({ ...props, titulo }),
      )
    })
  })

  describe('Descricao Field', () => {
    it('should return false and specific errors when descricao is less than 6 characters', () => {
      const isValid = sut.validate({
        ...props,
        descricao: 'abcde',
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['descricao']).toStrictEqual([
        'descricao must be longer than or equal to 6 characters',
      ])
    })

    it('should return false and specific errors when descricao exceeds 255 characters', () => {
      const isValid = sut.validate({
        ...props,
        descricao: 'a'.repeat(256),
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['descricao']).toStrictEqual([
        'descricao must be shorter than or equal to 255 characters',
      ])
    })

    it('should return false and specific errors when descricao is empty', () => {
      const isValid = sut.validate({
        ...props,
        descricao: '',
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['descricao']).toStrictEqual([
        'descricao should not be empty',
        'descricao must be longer than or equal to 6 characters',
      ])
    })

    it('should return false and specific errors when descricao is not a string', () => {
      const isValid = sut.validate({
        ...props,
        descricao: 123 as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['descricao']).toStrictEqual([
        'descricao must be shorter than or equal to 255 characters',
        'descricao must be longer than or equal to 6 characters',
        'descricao must be a string',
      ])
    })

    it('should return false and specific errors when descricao is null', () => {
      const isValid = sut.validate({
        ...props,
        descricao: null,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['descricao']).toStrictEqual([
        'descricao should not be empty',
        'descricao must be shorter than or equal to 255 characters',
        'descricao must be longer than or equal to 6 characters',
        'descricao must be a string',
      ])
    })

    it('should return true and validate the correct value for descricao', () => {
      const descricao = 'Descricao valida para a campanha'
      const isValid = sut.validate({
        ...props,
        descricao,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({ ...props, descricao }),
      )
    })

    it('should return true for descricao with exactly 6 characters', () => {
      const descricao = 'abcdef'
      const isValid = sut.validate({
        ...props,
        descricao,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({ ...props, descricao }),
      )
    })

    it('should return true for descricao with exactly 255 characters', () => {
      const descricao = 'a'.repeat(255)
      const isValid = sut.validate({
        ...props,
        descricao,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({ ...props, descricao }),
      )
    })
  })

  describe('QtdBilhetesTotais Field', () => {
    it('should return false and specific errors when qtdBilhetesTotais is less than 10', () => {
      const isValid = sut.validate({
        ...props,
        qtdBilhetesTotais: 7,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must not be less than 10',
      ])
    })

    it('should return false and specific errors when qtdBilhetesTotais is NaN', () => {
      const isValid = sut.validate({
        ...props,
        qtdBilhetesTotais: NaN,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be a positive number',
        `qtdBilhetesTotais must not be greater than ${DomainRules.MAX_BILHETES}`,
        'qtdBilhetesTotais must not be less than 10',
        'qtdBilhetesTotais must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesTotais is Infinity', () => {
      const isValid = sut.validate({
        ...props,
        qtdBilhetesTotais: Infinity,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        `qtdBilhetesTotais must not be greater than ${DomainRules.MAX_BILHETES}`,
        'qtdBilhetesTotais must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesTotais is -Infinity', () => {
      const isValid = sut.validate({
        ...props,
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
        ...props,
        qtdBilhetesTotais: 19.1,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesTotais is a negative number', () => {
      const isValid = sut.validate({
        ...props,
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
        ...props,
        qtdBilhetesTotais: 'string' as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be a positive number',
        `qtdBilhetesTotais must not be greater than ${DomainRules.MAX_BILHETES}`,
        'qtdBilhetesTotais must not be less than 10',
        'qtdBilhetesTotais must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesTotais is null', () => {
      const isValid = sut.validate({
        ...props,
        qtdBilhetesTotais: null,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        'qtdBilhetesTotais must be a positive number',
        `qtdBilhetesTotais must not be greater than ${DomainRules.MAX_BILHETES}`,
        'qtdBilhetesTotais must not be less than 10',
        'qtdBilhetesTotais must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesTotais is more than 999999', () => {
      const isValid = sut.validate({
        ...props,
        qtdBilhetesTotais: 1000000,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesTotais']).toStrictEqual([
        `qtdBilhetesTotais must not be greater than ${DomainRules.MAX_BILHETES}`,
      ])
    })

    it('should return true and validate the correct value for qtdBilhetesTotais', () => {
      let qtdBilhetesTotais = DomainRules.MAX_BILHETES
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
  })

  describe('QtdBilhetesComprados Field', () => {
    it('should return false and specific errors when qtdBilhetesComprados is a decimal', () => {
      const isValid = sut.validate({
        ...props,
        qtdBilhetesComprados: 19.1,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesComprados']).toStrictEqual([
        'qtdBilhetesComprados must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesComprados is a string', () => {
      const isValid = sut.validate({
        ...props,
        qtdBilhetesComprados: 'string' as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesComprados']).toStrictEqual([
        `qtdBilhetesComprados must not be greater than ${DomainRules.MAX_BILHETES}`,
        'qtdBilhetesComprados must not be less than 0',
        'qtdBilhetesComprados must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesComprados is a negative number', () => {
      const isValid = sut.validate({
        ...props,
        qtdBilhetesComprados: -200,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesComprados']).toStrictEqual([
        'qtdBilhetesComprados must not be less than 0',
      ])
    })

    it('should return false and specific errors when qtdBilhetesComprados is Infinity', () => {
      const isValid = sut.validate({
        ...props,
        qtdBilhetesComprados: Infinity,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesComprados']).toStrictEqual([
        `qtdBilhetesComprados must not be greater than ${DomainRules.MAX_BILHETES}`,
        'qtdBilhetesComprados must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesComprados is -Infinity', () => {
      const isValid = sut.validate({
        ...props,
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
        ...props,
        qtdBilhetesComprados: NaN,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesComprados']).toStrictEqual([
        `qtdBilhetesComprados must not be greater than ${DomainRules.MAX_BILHETES}`,
        'qtdBilhetesComprados must not be less than 0',
        'qtdBilhetesComprados must be an integer number',
      ])
    })

    it('should return false and specific errors when qtdBilhetesComprados is more than 999999', () => {
      const isValid = sut.validate({
        ...props,
        qtdBilhetesComprados: 1000000,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['qtdBilhetesComprados']).toStrictEqual([
        `qtdBilhetesComprados must not be greater than ${DomainRules.MAX_BILHETES}`,
      ])
    })

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
  })

  describe('DataInicioCampanha Field', () => {
    it('should return error when dataInicioCampanha is a past date', () => {
      const isValid = sut.validate({
        ...props,
        dataInicioCampanha: DateRules.YESTERDAY,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['dataInicioCampanha']).toStrictEqual([
        `minimal allowed date for dataInicioCampanha is ${DateRules.MIN_TODAY}`,
      ])
    })

    it('should return error when dataInicioCampanha is a future date', () => {
      const isValid = sut.validate({
        ...props,
        dataInicioCampanha: DateRules.TOMORROW,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['dataInicioCampanha']).toStrictEqual([
        `maximal allowed date for dataInicioCampanha is ${DateRules.MAX_TODAY}`,
      ])
    })

    it('should return error when dataInicioCampanha is an invalid date', () => {
      const isValid = sut.validate({
        ...props,
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
        ...props,
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
  })

  describe('DataFimCampanha Field', () => {
    it('should return error when dataFimCampanha is yesterday', () => {
      const isValid = sut.validate({
        ...props,
        dataFimCampanha: DateRules.YESTERDAY,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['dataFimCampanha']).toStrictEqual([
        `minimal allowed date for dataFimCampanha is ${DateRules.TOMORROW}`,
      ])
    })

    it('should return error when dataFimCampanha is today', () => {
      const isValid = sut.validate({
        ...props,
        dataFimCampanha: DateRules.TODAY,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['dataFimCampanha']).toStrictEqual([
        `minimal allowed date for dataFimCampanha is ${DateRules.TOMORROW}`,
      ])
    })

    it('should return error when dataFimCampanha is an invalid date', () => {
      const isValid = sut.validate({
        ...props,
        dataFimCampanha: 'invalid-date' as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['dataFimCampanha']).toStrictEqual([
        `minimal allowed date for dataFimCampanha is ${DateRules.TOMORROW}`,
        'dataFimCampanha must be a Date instance',
      ])
    })

    it('should return valid when dataFimCampanha is a future date', () => {
      const isValid = sut.validate({
        ...props,
        dataFimCampanha: DateRules.TOMORROW,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({ ...props, dataFimCampanha: DateRules.TOMORROW }),
      )
    })

    it('should return valid when dataFimCampanha is null', () => {
      const isValid = sut.validate({
        ...props,
        dataFimCampanha: null as any,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({ ...props, dataFimCampanha: null }),
      )
    })
  })
  describe('PorcentagemProgresso Field', () => {
    it('should return error when porcentagemProgresso is below the minimum value', () => {
      const isValid = sut.validate({
        ...props,
        porcentagemProgresso: DomainRules.MIN_PROGRESS_PERCENTAGE - 1,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['porcentagemProgresso']).toStrictEqual([
        `porcentagemProgresso must not be less than ${DomainRules.MIN_PROGRESS_PERCENTAGE}`,
      ])
    })

    it('should return error when porcentagemProgresso is above the maximum value', () => {
      const isValid = sut.validate({
        ...props,
        porcentagemProgresso: DomainRules.MAX_PROGRESS_PERCENTAGE + 1,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['porcentagemProgresso']).toStrictEqual([
        `porcentagemProgresso must not be greater than ${DomainRules.MAX_PROGRESS_PERCENTAGE}`,
      ])
    })

    it('should return error when porcentagemProgresso is not a number', () => {
      const isValid = sut.validate({
        ...props,
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
        ...props,
        porcentagemProgresso: 12.345,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['porcentagemProgresso']).toStrictEqual([
        'porcentagemProgresso must be a number conforming to the specified constraints',
      ])
    })
    it('should return valid when porcentagemProgresso is within the valid range and is a valid number', () => {
      const porcentagemProgresso = 50.0
      const isValid = sut.validate({
        ...props,
        porcentagemProgresso: porcentagemProgresso,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({
          ...props,
          porcentagemProgresso: porcentagemProgresso,
        }),
      )
    })
  })
  describe('CampanhaAtiva Field', () => {
    it('should return error when campanhaAtiva is not a boolean', () => {
      const isValid = sut.validate({
        ...props,
        campanhaAtiva: 'true' as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['campanhaAtiva']).toStrictEqual([
        'campanhaAtiva must be a boolean value',
      ])
    })

    it('should return error when campanhaAtiva is null', () => {
      const isValid = sut.validate({
        ...props,
        campanhaAtiva: null,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['campanhaAtiva']).toStrictEqual([
        'campanhaAtiva must be a boolean value',
        'campanhaAtiva should not be empty',
      ])
    })
    it('should return valid when campanhaAtiva is true', () => {
      const campanhaAtiva = true
      const isValid = sut.validate({
        ...props,
        campanhaAtiva: campanhaAtiva,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({
          ...props,
          campanhaAtiva: campanhaAtiva,
        }),
      )
    })
    it('should return valid when campanhaAtiva is false', () => {
      const campanhaAtiva = false
      const isValid = sut.validate({
        ...props,
        campanhaAtiva: campanhaAtiva,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({
          ...props,
          campanhaAtiva: campanhaAtiva,
        }),
      )
    })
  })

  describe('ValorUnitarioBilhete Field', () => {
    it('should return error when valorUnitarioBilhete is not a number', () => {
      const isValid = sut.validate({
        ...props,
        valorUnitarioBilhete: 'string' as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['valorUnitarioBilhete']).toStrictEqual([
        `valorUnitarioBilhete must not be greater than ${DomainRules.MAX_VALOR_BILHETES}`,
        `valorUnitarioBilhete must not be less than ${DomainRules.MIN_VALOR_BILHETES}`,
        'valorUnitarioBilhete must be a positive number',
        'valorUnitarioBilhete must be a number conforming to the specified constraints',
      ])
    })

    it('should return error when valorUnitarioBilhete has more than 2 decimal places', () => {
      const isValid = sut.validate({
        ...props,
        valorUnitarioBilhete: 12.345,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['valorUnitarioBilhete']).toStrictEqual([
        'valorUnitarioBilhete must be a number conforming to the specified constraints',
      ])
    })
    it('should return valid when valorUnitarioBilhete is a valid number', () => {
      const valorUnitarioBilhete = 10.5
      const isValid = sut.validate({
        ...props,
        valorUnitarioBilhete: valorUnitarioBilhete,
      })
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(
        new CampanhaRules({
          ...props,
          valorUnitarioBilhete: valorUnitarioBilhete,
        }),
      )
    })
    it('should return error when valorUnitarioBilhete is empty', () => {
      const isValid = sut.validate({
        ...props,
        valorUnitarioBilhete: null as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['valorUnitarioBilhete']).toStrictEqual([
        'valorUnitarioBilhete should not be empty',
        `valorUnitarioBilhete must not be greater than ${DomainRules.MAX_VALOR_BILHETES}`,
        `valorUnitarioBilhete must not be less than ${DomainRules.MIN_VALOR_BILHETES}`,
        'valorUnitarioBilhete must be a positive number',
        'valorUnitarioBilhete must be a number conforming to the specified constraints',
      ])
    })
  })
})
