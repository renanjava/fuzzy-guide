import { Entity } from '@/shared/domain/entities/entity'
import { CampanhaValidatorFactory } from '../validators/campanha.validator'
import { EntityValidationError } from '@/shared/domain/errors/validation-error'

export type CampanhaProps = {
  titulo: string
  descricao: string
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
    CampanhaEntity.validate(props)
    super(props, id)
    this.props.qtdBilhetesComprados = this.props.qtdBilhetesComprados ?? 0
    this.props.dataFimCampanha = this.props.dataFimCampanha ?? null
    this.props.porcentagemProgresso = this.props.porcentagemProgresso ?? 0
  }

  updateQtdBilhetesComprados(value: number): void {
    CampanhaEntity.validate({ ...this.props, qtdBilhetesComprados: value })
    this.qtdBilhetesComprados = value
  }

  updateDataFimCampanha(value: Date): void {
    CampanhaEntity.validate({ ...this.props, dataFimCampanha: value })
    this.dataFimCampanha = value
  }

  updatePorcentagemProgresso(value: number): void {
    CampanhaEntity.validate({ ...this.props, porcentagemProgresso: value })
    this.porcentagemProgresso = value
  }

  updateCampanhaAtiva(value: boolean): void {
    CampanhaEntity.validate({ ...this.props, campanhaAtiva: value })
    this.campanhaAtiva = value
  }

  get titulo(): string {
    return this.props.titulo
  }

  get descricao(): string {
    return this.props.descricao
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

  static validate(props: CampanhaProps) {
    const validator = CampanhaValidatorFactory.create()
    const isValid = validator.validate(props)
    if (!isValid) {
      console.log('motivo do erro:', props)
      console.log('erros de validação:', validator.errors)
      throw new EntityValidationError(validator.errors)
    }
  }
}
