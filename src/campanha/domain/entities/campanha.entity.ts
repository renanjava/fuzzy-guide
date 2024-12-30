import { Entity } from '@/shared/domain/entities/entity'

export type CampanhaProps = {
  qtdBilhetesTotais: number
  qtdBilhetesComprados?: number
  dataInicioCampanha: Date
  dataFimCampanha?: Date
  porcentagemProgresso?: number
  campanhaAtiva: boolean
  valorUnitarioBilhete: number
}

export class CampanhaEntity extends Entity<CampanhaProps> {
  constructor(
    public readonly props: CampanhaProps,
    id?: string,
  ) {
    super(props, id)
    this.props.qtdBilhetesComprados = this.props.qtdBilhetesComprados ?? 0
    this.props.dataFimCampanha = this.props.dataFimCampanha ?? null
    this.props.porcentagemProgresso = this.props.porcentagemProgresso ?? 0
  }

  updateQtdBilhetesComprados(value: number): void {
    this.qtdBilhetesComprados = value
  }

  updateDataFimCampanha(value: Date): void {
    this.dataFimCampanha = value
  }

  updatePorcentagemProgresso(value: number): void {
    this.porcentagemProgresso = value
  }

  updateCampanhaAtiva(value: boolean): void {
    this.campanhaAtiva = value
  }

  get qtdBilhetesTotais(): number {
    return this.props.qtdBilhetesTotais
  }

  get qtdBilhetesComprados(): number {
    return this.props.qtdBilhetesComprados
  }

  private set qtdBilhetesComprados(value: number) {
    this.props.qtdBilhetesComprados = value
  }

  get dataInicioCampanha(): Date {
    return this.props.dataInicioCampanha
  }

  get dataFimCampanha(): Date {
    return this.props.dataFimCampanha
  }

  private set dataFimCampanha(value: Date) {
    this.props.dataFimCampanha = value
  }

  get porcentagemProgresso(): number {
    return this.props.porcentagemProgresso
  }

  private set porcentagemProgresso(value: number) {
    this.props.porcentagemProgresso = value
  }

  get campanhaAtiva(): boolean {
    return this.props.campanhaAtiva
  }

  private set campanhaAtiva(value: boolean) {
    this.props.campanhaAtiva = value
  }

  get valorUnitarioBilhete(): number {
    return this.props.valorUnitarioBilhete
  }
}
