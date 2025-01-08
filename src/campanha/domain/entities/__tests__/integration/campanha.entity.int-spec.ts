import { CampanhaDataBuilder } from '@/campanha/domain/testing/helpers/campanha-data-builder'
import { CampanhaEntity, CampanhaProps } from '../../campanha.entity'
import { EntityValidationError } from '@/shared/domain/errors/validation-error'

describe('CampanhaEntity integration tests', () => {
  describe('Constructor method', () => {
    it('should throw an error when creating a Campanha with invalid qtdBilhetesTotais', () => {
      let props: CampanhaProps = {
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: 5,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: 1000000,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: -20,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: 166.1,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: 'string' as any,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: Infinity,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: -Infinity,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: NaN,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        qtdBilhetesTotais: null,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )
    })
    it('should throw an error when creating a Campanha with invalid qtdBilhetesComprados', () => {
      let props: CampanhaProps = {
        ...CampanhaDataBuilder({}),
        qtdBilhetesComprados: 0,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        qtdBilhetesComprados: -10,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        qtdBilhetesComprados: 1000000,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        qtdBilhetesComprados: 'string' as any,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )
    })

    it('should throw an error when creating a Campanha with invalid dataInicioCampanha', () => {
      let props: CampanhaProps = {
        ...CampanhaDataBuilder({}),
        dataInicioCampanha: 'invalid-date' as any,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        dataInicioCampanha: Date.parse('01/01/2000') as any,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )
    })

    it('should throw an error when creating a Campanha with invalid dataFimCampanha', () => {
      let props: CampanhaProps = {
        ...CampanhaDataBuilder({}),
        dataFimCampanha: 'invalid-date' as any,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        dataFimCampanha: Date.parse('01/01/2000') as any,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )
    })

    it('should throw an error when creating a Campanha with invalid porcentagemProgresso', () => {
      let props: CampanhaProps = {
        ...CampanhaDataBuilder({}),
        porcentagemProgresso: -10,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        porcentagemProgresso: 110,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        porcentagemProgresso: 'invalid' as any,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )
    })

    it('should throw an error when creating a Campanha with invalid campanhaAtiva', () => {
      let props: CampanhaProps = {
        ...CampanhaDataBuilder({}),
        campanhaAtiva: 'invalid' as any,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        campanhaAtiva: null,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )
    })

    it('should throw an error when creating a Campanha with invalid valorUnitarioBilhete', () => {
      let props: CampanhaProps = {
        ...CampanhaDataBuilder({}),
        valorUnitarioBilhete: -1,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        valorUnitarioBilhete: 'invalid' as any,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )

      props = {
        ...CampanhaDataBuilder({}),
        valorUnitarioBilhete: null,
      }
      expect(() => new CampanhaEntity(props)).toThrowError(
        EntityValidationError,
      )
    })

    /*
    it('should a valid Campanha', () => {
      expect.assertions(0)
      const props: CampanhaProps = {
        ...CampanhaDataBuilder({}),
      }
      new CampanhaEntity(props)
    })
    */
  })
})
