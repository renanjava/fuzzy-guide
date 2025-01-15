import { faker } from '@faker-js/faker'
import { CampanhaProps } from '../../entities/campanha.entity'
import { DomainRules } from '../../common/domain.rules'

type Props = Partial<CampanhaProps>

export function CampanhaDataBuilder(props: Props): CampanhaProps {
  return {
    titulo: props.titulo ?? 'Campanha Teste',
    descricao: props.descricao ?? 'Descrição padrão de teste',
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
    dataFimCampanha: props.dataFimCampanha ?? null,
    porcentagemProgresso: props.porcentagemProgresso ?? 50,
    campanhaAtiva: props.campanhaAtiva ?? true,
    valorUnitarioBilhete:
      props.valorUnitarioBilhete ??
      faker.number.float({
        min: DomainRules.MIN_VALOR_BILHETES,
        max: DomainRules.MAX_VALOR_BILHETES,
        fractionDigits: 2,
      }),
  }
}
