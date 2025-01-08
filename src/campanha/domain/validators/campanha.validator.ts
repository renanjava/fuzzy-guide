import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  Max,
  MaxDate,
  Min,
  MinDate,
} from 'class-validator'
import { CampanhaProps } from '../entities/campanha.entity'
import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-fields'
import { DomainRules } from '../common/domain.rules'
import { DateRules } from '../common/date.rules'

export class CampanhaRules {
  @IsInt()
  @Min(DomainRules.MIN_BILHETES_TOTAIS)
  @Max(DomainRules.MAX_BILHETES)
  @IsPositive()
  qtdBilhetesTotais: number

  @IsInt()
  @Min(DomainRules.MIN_BILHETES_COMPRADOS)
  @Max(DomainRules.MAX_BILHETES)
  @IsOptional()
  @IsPositive()
  qtdBilhetesComprados?: number

  @IsDate()
  @MinDate(DateRules.MIN_TODAY)
  @MaxDate(DateRules.MAX_TODAY)
  @IsNotEmpty()
  dataInicioCampanha: Date

  @IsDate()
  @MinDate(DateRules.TOMORROW)
  @IsOptional()
  dataFimCampanha?: Date

  @Min(DomainRules.MIN_PROGRESS_PERCENTAGE)
  @Max(DomainRules.MAX_PROGRESS_PERCENTAGE)
  @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })
  @IsOptional()
  porcentagemProgresso?: number

  @IsNotEmpty()
  @IsBoolean()
  campanhaAtiva: boolean

  @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })
  @IsNotEmpty()
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
