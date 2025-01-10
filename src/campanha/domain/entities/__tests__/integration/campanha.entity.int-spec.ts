import { CampanhaDataBuilder } from '@/campanha/domain/testing/helpers/campanha-data-builder'
import { CampanhaEntity, CampanhaProps } from '../../campanha.entity'
import { EntityValidationError } from '@/shared/domain/errors/validation-error'
import { DomainRules } from '@/campanha/domain/common/domain.rules'
import { DateRules } from '@/shared/domain/common/date.rules'

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

    it('should a valid Campanha', () => {
      expect.assertions(0)
      const props: CampanhaProps = {
        ...CampanhaDataBuilder({}),
      }
      new CampanhaEntity(props)
    })
  })

  describe('Update method', () => {
    it('should throw an error when update a CampanhaAtiva with invalid value', () => {
      const entity = new CampanhaEntity(CampanhaDataBuilder({}))

      expect(() => entity.updateCampanhaAtiva('string' as any)).toThrowError(
        EntityValidationError,
      )
      expect(() => entity.updateCampanhaAtiva(null)).toThrowError(
        EntityValidationError,
      )
    })

    it('should a valid CampanhaAtiva update', () => {
      expect.assertions(0)
      const entity = new CampanhaEntity(CampanhaDataBuilder({}))
      entity.updateCampanhaAtiva(false)
    })

    it('should throw an error when update a QtdBilhetesComprados with invalid value', () => {
      const entity = new CampanhaEntity(CampanhaDataBuilder({}))

      expect(() => entity.updateQtdBilhetesComprados(19.1)).toThrowError(
        EntityValidationError,
      )
      expect(() =>
        entity.updateQtdBilhetesComprados('string' as any),
      ).toThrowError(EntityValidationError)
      expect(() => entity.updateQtdBilhetesComprados(-200)).toThrowError(
        EntityValidationError,
      )
      expect(() => entity.updateQtdBilhetesComprados(Infinity)).toThrowError(
        EntityValidationError,
      )
      expect(() => entity.updateQtdBilhetesComprados(-Infinity)).toThrowError(
        EntityValidationError,
      )
      expect(() => entity.updateQtdBilhetesComprados(NaN)).toThrowError(
        EntityValidationError,
      )
      expect(() => entity.updateQtdBilhetesComprados(1000000)).toThrowError(
        EntityValidationError,
      )
    })

    it('should a valid QtdBilhetesComprados update', () => {
      expect.assertions(0)

      const entity = new CampanhaEntity(CampanhaDataBuilder({}))

      entity.updateQtdBilhetesComprados(0)
      entity.updateQtdBilhetesComprados(999999)
    })

    it('should throw an error when update a DataFimCampanha with invalid value', () => {
      const entity = new CampanhaEntity(CampanhaDataBuilder({}))

      expect(() =>
        entity.updateDataFimCampanha(DateRules.YESTERDAY),
      ).toThrowError(EntityValidationError)
      expect(() => entity.updateDataFimCampanha(DateRules.TODAY)).toThrowError(
        EntityValidationError,
      )
      expect(() =>
        entity.updateDataFimCampanha('invalid-date' as any),
      ).toThrowError(EntityValidationError)
    })

    it('should a valid DataFimCampanha update', () => {
      expect.assertions(0)

      const entity = new CampanhaEntity(CampanhaDataBuilder({}))

      entity.updateDataFimCampanha(DateRules.TOMORROW)
      entity.updateDataFimCampanha(null)
    })

    it('should throw an error when update a PorcentagemProgresso with invalid value', () => {
      const entity = new CampanhaEntity(CampanhaDataBuilder({}))

      expect(() =>
        entity.updatePorcentagemProgresso(
          DomainRules.MIN_PROGRESS_PERCENTAGE - 1,
        ),
      ).toThrowError(EntityValidationError)
      expect(() =>
        entity.updatePorcentagemProgresso(
          DomainRules.MAX_PROGRESS_PERCENTAGE + 1,
        ),
      ).toThrowError(EntityValidationError)
      expect(() =>
        entity.updatePorcentagemProgresso('string' as any),
      ).toThrowError(EntityValidationError)
      expect(() => entity.updatePorcentagemProgresso(12.345)).toThrowError(
        EntityValidationError,
      )
      expect(() => entity.updatePorcentagemProgresso(Infinity)).toThrowError(
        EntityValidationError,
      )
      expect(() => entity.updatePorcentagemProgresso(-Infinity)).toThrowError(
        EntityValidationError,
      )
      expect(() => entity.updatePorcentagemProgresso(NaN)).toThrowError(
        EntityValidationError,
      )
    })

    it('should a valid PorcentagemProgresso update', () => {
      expect.assertions(0)

      const entity = new CampanhaEntity(CampanhaDataBuilder({}))

      entity.updatePorcentagemProgresso(DomainRules.MIN_PROGRESS_PERCENTAGE)
      entity.updatePorcentagemProgresso(DomainRules.MAX_PROGRESS_PERCENTAGE)
      entity.updatePorcentagemProgresso(50.0)
    })
  })
})
