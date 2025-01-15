import { faker } from '@faker-js/faker'
import { CampanhaProps } from '../../entities/campanha.entity'
import { DomainRules } from '../../common/domain.rules'

type Props = Partial<CampanhaProps>

export function CampanhaDataBuilder(props: Props): CampanhaProps {
  return {
    titulo: props.titulo ?? faker.word.words(4).substring(0, 40),
    descricao: props.descricao ?? faker.word.words(10).substring(0, 255),
    qtdBilhetesTotais:
      props.qtdBilhetesTotais ??
      faker.number.int({
        min: DomainRules.MIN_BILHETES_TOTAIS,
        max: DomainRules.MAX_BILHETES,
      }),
    qtdBilhetesComprados:
      props.qtdBilhetesComprados ??
      faker.number.int({
        min: DomainRules.MIN_BILHETES_TOTAIS,
        max: DomainRules.MAX_BILHETES,
      }),
    dataInicioCampanha: props.dataInicioCampanha ?? new Date(),
    dataFimCampanha: props.dataFimCampanha ?? null,
    porcentagemProgresso: props.porcentagemProgresso ?? 0,
    campanhaAtiva: props.campanhaAtiva ?? true,
    valorUnitarioBilhete:
      props.valorUnitarioBilhete ??
      faker.number.float({
        fractionDigits: 2,
        min: DomainRules.MIN_PROGRESS_PERCENTAGE,
        max: DomainRules.MAX_PROGRESS_PERCENTAGE,
      }),
  }
}
