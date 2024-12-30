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

  get qtdBilhetesTotais(): number {
    return this.props.qtdBilhetesTotais
  }

  get qtdBilhetesComprados(): number {
    return this.props.qtdBilhetesComprados
  }

  get dataInicioCampanha(): Date {
    return this.props.dataInicioCampanha
  }

  get dataFimCampanha(): Date {
    return this.props.dataFimCampanha
  }

  get porcentagemProgresso(): number {
    return this.props.porcentagemProgresso
  }

  get campanhaAtiva(): boolean {
    return this.props.campanhaAtiva
  }

  get valorUnitarioBilhete(): number {
    return this.props.valorUnitarioBilhete
  }
}
