import { CampanhaEntity, CampanhaProps } from '../../campanha.entity'
import { CampanhaDataBuilder } from '@/campanha/domain/testing/helpers/campanha-data-builder'
import { DateRules } from '@/shared/common/date.rules'

describe('CampanhaEntity unit tests', () => {
  let props: CampanhaProps
  let sut: CampanhaEntity

  beforeEach(() => {
    CampanhaEntity.validate = jest.fn()
    props = CampanhaDataBuilder({})
    sut = new CampanhaEntity(props)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('constructor method', () => {
    expect(CampanhaEntity.validate).toHaveBeenCalled()
    expect(sut.props.titulo).toEqual(props.titulo)
    expect(sut.props.descricao).toEqual(props.descricao)
    expect(sut.props.qtdBilhetesTotais).toEqual(props.qtdBilhetesTotais)
    expect(sut.props.dataInicioCampanha).toEqual(props.dataInicioCampanha)
    expect(sut.props.campanhaAtiva).toEqual(props.campanhaAtiva)
    expect(sut.props.valorUnitarioBilhete).toEqual(props.valorUnitarioBilhete)
    expect(sut.props.qtdBilhetesComprados).toEqual(props.qtdBilhetesComprados)
    expect(
      sut.props.dataFimCampanha === null ||
        sut.props.dataFimCampanha instanceof Date,
    ).toBeTruthy()
    expect(sut.props.porcentagemProgresso).toEqual(props.porcentagemProgresso)
  })

  it('getter titulo', () => {
    expect(sut.titulo).toEqual(props.titulo)
    expect(sut.props.titulo).toBeDefined()
    expect(sut.props.titulo).toEqual(props.titulo)
    expect(typeof sut.props.titulo).toBe('string')
  })

  it('getter descricao', () => {
    expect(sut.descricao).toEqual(props.descricao)
    expect(sut.props.descricao).toBeDefined()
    expect(sut.props.descricao).toEqual(props.descricao)
    expect(typeof sut.props.descricao).toBe('string')
  })
  it('getter qtdBilhetesTotais', () => {
    expect(sut.qtdBilhetesTotais).toEqual(props.qtdBilhetesTotais)
    expect(sut.props.qtdBilhetesTotais).toBeDefined()
    expect(sut.props.qtdBilhetesTotais).toEqual(props.qtdBilhetesTotais)
    expect(typeof sut.props.qtdBilhetesTotais).toBe('number')
  })

  it('getter dataInicioCampanha', () => {
    expect(sut.dataInicioCampanha).toEqual(props.dataInicioCampanha)
    expect(sut.props.dataInicioCampanha).toBeDefined()
    expect(sut.props.dataInicioCampanha).toEqual(props.dataInicioCampanha)
    expect(sut.props.dataInicioCampanha).toBeInstanceOf(Date)
  })

  it('getter campanhaAtiva', () => {
    expect(sut.campanhaAtiva).toEqual(props.campanhaAtiva)
    expect(sut.props.campanhaAtiva).toBeDefined()
    expect(sut.props.campanhaAtiva).toEqual(props.campanhaAtiva)
    expect(typeof sut.props.campanhaAtiva).toBe('boolean')
  })

  it('setter campanhaAtiva', () => {
    sut['campanhaAtiva'] = false
    expect(sut.props.campanhaAtiva).toBeFalsy()
  })

  it('should update campanhaAtiva', () => {
    expect(CampanhaEntity.validate).toHaveBeenCalled()
    sut.updateCampanhaAtiva(false)
    expect(sut.props.campanhaAtiva).toBeFalsy()
  })

  it('getter valorUnitarioBilhete', () => {
    expect(sut.valorUnitarioBilhete).toEqual(props.valorUnitarioBilhete)
    expect(sut.props.valorUnitarioBilhete).toBeDefined()
    expect(sut.props.valorUnitarioBilhete).toEqual(props.valorUnitarioBilhete)
    expect(typeof sut.props.valorUnitarioBilhete).toBe('number')
  })

  it('getter qtdBilhetesComprados', () => {
    expect(sut.qtdBilhetesComprados).toEqual(props.qtdBilhetesComprados)
    expect(sut.props.qtdBilhetesComprados).toBeDefined()
    expect(sut.props.qtdBilhetesComprados).toEqual(props.qtdBilhetesComprados)
    expect(typeof sut.props.qtdBilhetesComprados).toBe('number')
  })

  it('setter qtdBilhetesComprados', () => {
    sut['qtdBilhetesComprados'] = 100
    expect(sut.props.qtdBilhetesComprados).toEqual(100)
  })

  it('should update qtdBilhetesComprados', () => {
    expect(CampanhaEntity.validate).toHaveBeenCalled()
    sut.updateQtdBilhetesComprados(500)
    expect(sut.props.qtdBilhetesComprados).toEqual(500)
  })

  it('getter dataFimCampanha', () => {
    expect(
      sut.dataFimCampanha === null || sut.dataFimCampanha instanceof Date,
    ).toBeTruthy()
    expect(sut.props.dataFimCampanha).toBeDefined()
    expect(sut.props.dataFimCampanha).toEqual(props.dataFimCampanha)
    expect(
      sut.props.dataFimCampanha === null ||
        sut.props.dataFimCampanha instanceof Date,
    ).toBeTruthy()
  })

  it('setter dataFimCampanha', () => {
    const prop = DateRules.TOMORROW
    sut['dataFimCampanha'] = prop
    expect(sut.props.dataFimCampanha).toEqual(prop)
  })

  it('should update dataFimCampanha', () => {
    expect(CampanhaEntity.validate).toHaveBeenCalled()
    const prop = DateRules.TOMORROW
    sut.updateDataFimCampanha(prop)
    expect(sut.props.dataFimCampanha).toEqual(prop)
  })

  it('getter porcentagemProgresso', () => {
    expect(sut.porcentagemProgresso).toEqual(props.porcentagemProgresso)
    expect(sut.props.porcentagemProgresso).toBeDefined()
    expect(sut.props.porcentagemProgresso).toEqual(props.porcentagemProgresso)
    expect(typeof sut.props.porcentagemProgresso).toBe('number')
  })

  it('setter porcentagemProgresso', () => {
    sut['porcentagemProgresso'] = 80
    expect(sut.props.porcentagemProgresso).toEqual(80)
  })

  it('should update porcentagemProgresso', () => {
    expect(CampanhaEntity.validate).toHaveBeenCalled()
    sut.updatePorcentagemProgresso(25.0)
    expect(sut.props.porcentagemProgresso).toEqual(25.0)
  })
})
