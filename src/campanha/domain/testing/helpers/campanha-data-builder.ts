import { faker } from '@faker-js/faker'
import { CampanhaProps } from '../../entities/campanha.entity'

type Props = Partial<CampanhaProps>

export function CampanhaDataBuilder(props: Props): CampanhaProps {
  return {
    qtdBilhetesTotais: props.qtdBilhetesTotais ?? faker.number.int(),
    qtdBilhetesComprados: props.qtdBilhetesComprados ?? 0,
    dataInicioCampanha: props.dataInicioCampanha ?? faker.date.recent(),
    dataFimCampanha: props.dataFimCampanha ?? null,
    porcentagemProgresso: props.porcentagemProgresso ?? 0,
    campanhaAtiva: props.campanhaAtiva ?? true,
    valorUnitarioBilhete: props.valorUnitarioBilhete ?? faker.number.float(),
  }
}