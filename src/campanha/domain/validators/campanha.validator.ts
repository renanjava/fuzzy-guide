import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  Min,
} from 'class-validator'
import { CampanhaProps } from '../entities/campanha.entity'
import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-fields'

export class CampanhaRules {
  @IsInt()
  @Min(10)
  @IsPositive()
  qtdBilhetesTotais: number

  @IsInt()
  @IsOptional()
  qtdBilhetesComprados?: number

  @IsDate()
  @IsNotEmpty()
  dataInicioCampanha: Date

  @IsDate()
  @IsOptional()
  dataFimCampanha?: Date

  @IsNumber()
  @IsOptional()
  porcentagemProgresso?: number

  @IsNotEmpty()
  @IsBoolean()
  campanhaAtiva: boolean

  @IsNotEmpty()
  @IsNumber()
  valorUnitarioBilhete: number

  constructor({
    qtdBilhetesTotais,
    qtdBilhetesComprados,
    dataInicioCampanha,
    dataFimCampanha,
    porcentagemProgresso,
    campanhaAtiva,
    valorUnitarioBilhete,
  }: CampanhaProps) {
    Object.assign(this, {
      qtdBilhetesTotais,
      qtdBilhetesComprados,
      dataInicioCampanha,
      dataFimCampanha,
      porcentagemProgresso,
      campanhaAtiva,
      valorUnitarioBilhete,
    })
  }
}

export class CampanhaValidator extends ClassValidatorFields<CampanhaRules> {
  validate(props: CampanhaProps): boolean {
    return super.validate(new CampanhaRules(props ?? ({} as CampanhaProps)))
  }
}

export class CampanhaValidatorFactory {
  static create(): CampanhaValidator {
    return new CampanhaValidator()
  }
}
