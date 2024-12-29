import { CampanhaEntity, CampanhaProps } from '../../campanha.entity'
import { CampanhaDataBuilder } from '@/campanha/domain/testing/helpers/campanha-data-builder'

describe('CampanhaEntity unit tests', () => {
  let props: CampanhaProps
  let sut: CampanhaEntity

  beforeEach(() => {
    props = CampanhaDataBuilder({})
    sut = new CampanhaEntity(props)
  })
  it('constructor method', () => {
    expect(sut.props.qtdBilhetesTotais).toEqual(props.qtdBilhetesTotais)
    expect(sut.props.dataInicioCampanha).toEqual(props.dataInicioCampanha)
    expect(sut.props.campanhaAtiva).toEqual(props.campanhaAtiva)
    expect(sut.props.valorUnitarioBilhete).toEqual(props.valorUnitarioBilhete)
    expect(sut.props.qtdBilhetesComprados).toEqual(0)
    expect(sut.props.dataFimCampanha).toBeNull()
    expect(sut.props.porcentagemProgresso).toEqual(0)
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

  it('getter valorUnitarioBilhete', () => {
    expect(sut.valorUnitarioBilhete).toEqual(props.valorUnitarioBilhete)
    expect(sut.props.valorUnitarioBilhete).toBeDefined()
    expect(sut.props.valorUnitarioBilhete).toEqual(props.valorUnitarioBilhete)
    expect(typeof sut.props.valorUnitarioBilhete).toBe('number')
  })

  it('getter qtdBilhetesComprados', () => {
    expect(sut.qtdBilhetesComprados).toEqual(0)
    expect(sut.props.qtdBilhetesComprados).toBeDefined()
    expect(sut.props.qtdBilhetesComprados).toEqual(props.qtdBilhetesComprados)
    expect(typeof sut.props.qtdBilhetesComprados).toBe('number')
  })

  it('getter dataFimCampanha', () => {
    expect(sut.dataFimCampanha).toBeNull()
    expect(sut.props.dataFimCampanha).toBeDefined()
    expect(sut.props.dataFimCampanha).toEqual(props.dataFimCampanha)
    expect(sut.props.dataFimCampanha).toBeNull()
  })

  it('getter porcentagemProgresso', () => {
    expect(sut.porcentagemProgresso).toEqual(0)
    expect(sut.props.porcentagemProgresso).toBeDefined()
    expect(sut.props.porcentagemProgresso).toEqual(props.porcentagemProgresso)
    expect(typeof sut.props.porcentagemProgresso).toBe('number')
  })
})
