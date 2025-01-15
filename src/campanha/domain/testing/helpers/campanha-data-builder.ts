import { faker } from '@faker-js/faker'
import { CampanhaProps } from '../../entities/campanha.entity'
import { DomainRules } from '../../common/domain.rules'

type Props = Partial<CampanhaProps>

export function CampanhaDataBuilder(props: Props): CampanhaProps {
  return {
    titulo: props.titulo ?? 'Campanha Teste', // Valor fixo
    descricao: props.descricao ?? 'Descrição padrão de teste', // Valor fixo
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
    porcentagemProgresso: props.porcentagemProgresso ?? 50, // Valor fixo para testar
    campanhaAtiva: props.campanhaAtiva ?? true,
    valorUnitarioBilhete:
      props.valorUnitarioBilhete ?? 10.0, // Valor fixo para testar
  }
}
