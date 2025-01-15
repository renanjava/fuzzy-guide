import { faker } from '@faker-js/faker'
import { CampanhaProps } from '../../entities/campanha.entity'

type Props = Partial<CampanhaProps>

export function CampanhaDataBuilder(props: Props): CampanhaProps {
  return {
    titulo: props.titulo ?? faker.word.words(4).substring(0, 40),
    descricao: props.descricao ?? faker.word.words(10).substring(0, 255),
    qtdBilhetesTotais:
      props.qtdBilhetesTotais ?? faker.number.int({ min: 10, max: 99999 }),
    qtdBilhetesComprados: props.qtdBilhetesComprados ?? 0,
    dataInicioCampanha: props.dataInicioCampanha ?? new Date(),
    dataFimCampanha: props.dataFimCampanha ?? null,
    porcentagemProgresso: props.porcentagemProgresso ?? 0,
    campanhaAtiva: props.campanhaAtiva ?? true,
    valorUnitarioBilhete:
      props.valorUnitarioBilhete ?? faker.number.float({ fractionDigits: 2 }),
  }
}
