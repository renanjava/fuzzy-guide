import { faker } from '@faker-js/faker'
import { CampanhaProps } from '../../entities/campanha.entity'
import { DomainRules } from '../../common/domain.rules'
import { DateRules } from '@/shared/common/date.rules'

type Props = Partial<CampanhaProps>

export function CampanhaDataBuilder(props: Props): CampanhaProps {
  return {
    titulo: props.titulo ?? 'Titulo teste',
    descricao: props.descricao ?? 'Descricao teste',
    qtdBilhetesTotais:
      props.qtdBilhetesTotais ??
      faker.number.int({
        min: DomainRules.MIN_BILHETES_TOTAIS,
        max: DomainRules.MAX_BILHETES,
      }),
    qtdBilhetesComprados:
      props.qtdBilhetesComprados ??
      faker.number.int({
        min: DomainRules.MIN_BILHETES_COMPRADOS,
        max: DomainRules.MAX_BILHETES,
      }),
    dataInicioCampanha: props.dataInicioCampanha ?? new Date(),
    dataFimCampanha:
      props.dataFimCampanha ??
      faker.date.soon({ days: 120, refDate: DateRules.TOMORROW }),
    porcentagemProgresso:
      props.porcentagemProgresso ??
      faker.number.float({
        min: DomainRules.MIN_PROGRESS_PERCENTAGE,
        max: DomainRules.MAX_PROGRESS_PERCENTAGE,
        fractionDigits: 2,
      }),
    campanhaAtiva: props.campanhaAtiva ?? faker.datatype.boolean(),
    valorUnitarioBilhete:
      props.valorUnitarioBilhete ??
      faker.number.float({
        min: DomainRules.MIN_VALOR_BILHETES,
        max: DomainRules.MAX_VALOR_BILHETES,
        fractionDigits: 2,
      }),
  }
}
