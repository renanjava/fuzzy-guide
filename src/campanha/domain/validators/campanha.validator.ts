import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Matches,
  Max,
  MaxDate,
  MaxLength,
  Min,
  MinDate,
  MinLength,
} from 'class-validator'
import { CampanhaProps } from '../entities/campanha.entity'
import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-fields'
import { DomainRules } from '../common/domain.rules'
import { DateRules } from '../../../shared/common/date.rules'

export class CampanhaRules {
  @IsString()
  @Matches(/^[a-zA-Z0-9\s]+$/)
  @MinLength(4)
  @MaxLength(40)
  @IsNotEmpty()
  titulo: string

  @IsString()
  @MinLength(6)
  @MaxLength(255)
  @IsNotEmpty()
  descricao: string

  @IsInt()
  @Min(DomainRules.MIN_BILHETES_TOTAIS)
  @Max(DomainRules.MAX_BILHETES)
  @IsPositive()
  qtdBilhetesTotais: number

  @IsInt()
  @Min(DomainRules.MIN_BILHETES_COMPRADOS)
  @Max(DomainRules.MAX_BILHETES)
  @IsOptional()
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
  @IsPositive()
  @Min(0)
  @IsNotEmpty()
  valorUnitarioBilhete: number

  constructor({
    titulo,
    descricao,
    qtdBilhetesTotais,
    qtdBilhetesComprados,
    dataInicioCampanha,
    dataFimCampanha,
    porcentagemProgresso,
    campanhaAtiva,
    valorUnitarioBilhete,
  }: CampanhaProps) {
    Object.assign(this, {
      titulo,
      descricao,
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
