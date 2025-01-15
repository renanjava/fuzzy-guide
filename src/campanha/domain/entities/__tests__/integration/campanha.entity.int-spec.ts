import { CampanhaDataBuilder } from '@/campanha/domain/testing/helpers/campanha-data-builder'
import { CampanhaEntity, CampanhaProps } from '../../campanha.entity'
import { EntityValidationError } from '@/shared/domain/errors/validation-error'
import { DomainRules } from '@/campanha/domain/common/domain.rules'
import { DateRules } from '@/shared/common/date.rules'

describe('CampanhaEntity integration tests', () => {
  describe('Constructor method', () => {
    it('should throw an error when creating a Campanha with invalid Titulo', () => {
      const props: CampanhaProps = {
        ...CampanhaDataBuilder({}),
      }
      expect(
        () => new CampanhaEntity({ ...props, titulo: 'abc' }),
      ).toThrowError(EntityValidationError)

      expect(
        () =>
          new CampanhaEntity({
            ...props,
            titulo: 'a'.repeat(41),
          }),
      ).toThrowError(EntityValidationError)

      expect(
        () =>
          new CampanhaEntity({
            ...props,
            titulo: 'Titulo@Invalido!',
          }),
      ).toThrowError(EntityValidationError)

      expect(
        () =>
          new CampanhaEntity({
            ...props,
            titulo: '',
          }),
      ).toThrowError(EntityValidationError)

      expect(
        () =>
          new CampanhaEntity({
            ...props,
            titulo: 123 as any,
          }),
      ).toThrowError(EntityValidationError)

      expect(
        () =>
          new CampanhaEntity({
            ...props,
            titulo: null,
          }),
      ).toThrowError(EntityValidationError)
    })

    describe('Constructor method', () => {
      it('should throw an error when creating a Campanha with invalid Descricao', () => {
        const props: CampanhaProps = {
          ...CampanhaDataBuilder({}),
        }

        expect(
          () => new CampanhaEntity({ ...props, descricao: 'abcde' }),
        ).toThrowError(EntityValidationError)
        expect(
          () => new CampanhaEntity({ ...props, descricao: 'a'.repeat(256) }),
        ).toThrowError(EntityValidationError)
        expect(
          () => new CampanhaEntity({ ...props, descricao: '' }),
        ).toThrowError(EntityValidationError)
        expect(
          () => new CampanhaEntity({ ...props, descricao: 123 as any }),
        ).toThrowError(EntityValidationError)
        expect(
          () => new CampanhaEntity({ ...props, descricao: null }),
        ).toThrowError(EntityValidationError)
      })

      it('should throw an error when creating a Campanha with invalid qtdBilhetesTotais', () => {
        const props: CampanhaProps = {
          ...CampanhaDataBuilder({}),
        }

        expect(
          () => new CampanhaEntity({ ...props, qtdBilhetesTotais: 5 }),
        ).toThrowError(EntityValidationError)
        expect(
          () => new CampanhaEntity({ ...props, qtdBilhetesTotais: 1000000 }),
        ).toThrowError(EntityValidationError)
        expect(
          () => new CampanhaEntity({ ...props, qtdBilhetesTotais: -20 }),
        ).toThrowError(EntityValidationError)
        expect(
          () => new CampanhaEntity({ ...props, qtdBilhetesTotais: 166.1 }),
        ).toThrowError(EntityValidationError)
        expect(
          () =>
            new CampanhaEntity({
              ...props,
              qtdBilhetesTotais: 'string' as any,
            }),
        ).toThrowError(EntityValidationError)
        expect(
          () => new CampanhaEntity({ ...props, qtdBilhetesTotais: Infinity }),
        ).toThrowError(EntityValidationError)
        expect(
          () => new CampanhaEntity({ ...props, qtdBilhetesTotais: -Infinity }),
        ).toThrowError(EntityValidationError)
        expect(
          () => new CampanhaEntity({ ...props, qtdBilhetesTotais: NaN }),
        ).toThrowError(EntityValidationError)
        expect(
          () => new CampanhaEntity({ ...props, qtdBilhetesTotais: null }),
        ).toThrowError(EntityValidationError)
      })

      it('should throw an error when creating a Campanha with invalid qtdBilhetesComprados', () => {
        const props: CampanhaProps = {
          ...CampanhaDataBuilder({}),
        }

        expect(
          () => new CampanhaEntity({ ...props, qtdBilhetesComprados: -10 }),
        ).toThrowError(EntityValidationError)
        expect(
          () => new CampanhaEntity({ ...props, qtdBilhetesComprados: 1000000 }),
        ).toThrowError(EntityValidationError)
        expect(
          () =>
            new CampanhaEntity({
              ...props,
              qtdBilhetesComprados: 'string' as any,
            }),
        ).toThrowError(EntityValidationError)
      })
    })

    it('should throw an error when creating a Campanha with invalid dataInicioCampanha', () => {
      const props: CampanhaProps = {
        ...CampanhaDataBuilder({}),
      }

      expect(
        () =>
          new CampanhaEntity({
            ...props,
            dataInicioCampanha: 'invalid-date' as any,
          }),
      ).toThrowError(EntityValidationError)

      expect(
        () =>
          new CampanhaEntity({
            ...props,
            dataInicioCampanha: Date.parse('01/01/2000') as any,
          }),
      ).toThrowError(EntityValidationError)
    })

    it('should throw an error when creating a Campanha with invalid dataFimCampanha', () => {
      const props: CampanhaProps = {
        ...CampanhaDataBuilder({}),
      }

      expect(
        () =>
          new CampanhaEntity({
            ...props,
            dataFimCampanha: 'invalid-date' as any,
          }),
      ).toThrowError(EntityValidationError)

      expect(
        () =>
          new CampanhaEntity({
            ...props,
            dataFimCampanha: Date.parse('01/01/2000') as any,
          }),
      ).toThrowError(EntityValidationError)
    })

    it('should throw an error when creating a Campanha with invalid porcentagemProgresso', () => {
      const props: CampanhaProps = {
        ...CampanhaDataBuilder({}),
      }

      expect(
        () => new CampanhaEntity({ ...props, porcentagemProgresso: -10 }),
      ).toThrowError(EntityValidationError)

      expect(
        () => new CampanhaEntity({ ...props, porcentagemProgresso: 110 }),
      ).toThrowError(EntityValidationError)

      expect(
        () =>
          new CampanhaEntity({
            ...props,
            porcentagemProgresso: 'invalid' as any,
          }),
      ).toThrowError(EntityValidationError)
    })

    it('should throw an error when creating a Campanha with invalid campanhaAtiva', () => {
      const props: CampanhaProps = {
        ...CampanhaDataBuilder({}),
      }

      expect(
        () => new CampanhaEntity({ ...props, campanhaAtiva: 'invalid' as any }),
      ).toThrowError(EntityValidationError)

      expect(
        () => new CampanhaEntity({ ...props, campanhaAtiva: null }),
      ).toThrowError(EntityValidationError)
    })

    it('should throw an error when creating a Campanha with invalid valorUnitarioBilhete', () => {
      const props: CampanhaProps = {
        ...CampanhaDataBuilder({}),
      }

      expect(
        () => new CampanhaEntity({ ...props, valorUnitarioBilhete: -1 }),
      ).toThrowError(EntityValidationError)

      expect(
        () =>
          new CampanhaEntity({
            ...props,
            valorUnitarioBilhete: 'invalid' as any,
          }),
      ).toThrowError(EntityValidationError)

      expect(
        () => new CampanhaEntity({ ...props, valorUnitarioBilhete: null }),
      ).toThrowError(EntityValidationError)
    })

    it('should create a valid Campanha', () => {
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
