# APIs

## Fase 1 - Antes de Pesquisar

1. enums

```json
[
    {
        "name": "CaracteristicaCompraEnum",
        "values": [
            {
                "enumName": "TRADICIONAL",
                "value": "1",
                "label": "Tradicional"
            },
            {
                "enumName": "REGISTRO_PRECO",
                "value": "2",
                "label": "Registro de Preço"
            }
        ]
    },
    {
        "name": "CodigoRetornoSituacaoSessaoPublicaEnum",
        "values": [
            {
                "enumName": "SESSAO_PUBLICA_AGUARDANDO_ABERTURA",
                "value": "1",
                "label": "A sessão pública ainda não abriu"
            },
            {
                "enumName": "SESSAO_PUBLICA_ABERTA",
                "value": "2",
                "label": "A sessão pública já abriu"
            },
            {
                "enumName": "SESSAO_PUBLICA_SUSPENSA",
                "value": "3",
                "label": "A sessão pública já abriu, mas está suspensa"
            },
            {
                "enumName": "SESSAO_PUBLICA_ENCERRADA",
                "value": "4",
                "label": "A sessão pública já foi encerrada"
            }
        ]
    },
    {
        "name": "CriterioJulgamentoCompraEnum",
        "values": [
            {
                "enumName": "MELHOR_TECNICA",
                "value": "3",
                "label": "Melhor Técnica"
            },
            {
                "enumName": "TECNICA_PRECO",
                "value": "4",
                "label": "Técnica e Preço"
            },
            {
                "enumName": "CONTEUDO_ARTISTICO",
                "value": "5",
                "label": "Conteúdo Artístico"
            },
            {
                "enumName": "MAIOR_RETORNO_ECONOMICO",
                "value": "6",
                "label": "Maior Retorno Econômico"
            },
            {
                "enumName": "MENOR_PRECO_OU_MAIOR_DESCONTO",
                "value": "7",
                "label": "Menor Preço / Maior Desconto"
            },
            {
                "enumName": "MELHOR_TECNICA_OU_CONTEUDO_ARTISTICO",
                "value": "8",
                "label": "Melhor Técnica / Conteúdo Artístico"
            }
        ]
    },
    {
        "name": "CriterioJulgamentoItemEnum",
        "values": [
            {
                "enumName": "MENOR_PRECO",
                "value": "1",
                "label": "Menor Preço"
            },
            {
                "enumName": "MAIOR_DESCONTO",
                "value": "2",
                "label": "Maior Desconto"
            },
            {
                "enumName": "MELHOR_TECNICA",
                "value": "3",
                "label": "Melhor Técnica"
            },
            {
                "enumName": "TECNICA_PRECO",
                "value": "4",
                "label": "Técnica e Preço"
            },
            {
                "enumName": "CONTEUDO_ARTISTICO",
                "value": "5",
                "label": "Conteúdo Artístico"
            },
            {
                "enumName": "MAIOR_RETORNO_ECONOMICO",
                "value": "6",
                "label": "Maior Retorno Econômico"
            },
            {
                "enumName": "MELHOR_TECNICA_OU_CONTEUDO_ARTISTICO",
                "value": "8",
                "label": "Melhor Técnica ou Conteúdo Artístico"
            }
        ]
    },
    {
        "name": "CriterioValorItemEnum",
        "values": [
            {
                "enumName": "VALOR_ESTIMADO",
                "value": "E",
                "label": "Valor estimado"
            },
            {
                "enumName": "VALOR_REFERENCIA",
                "value": "R",
                "label": "Valor de referência"
            },
            {
                "enumName": "VALOR_MAXIMO_ACEITAVEL",
                "value": "M",
                "label": "Valor máximo aceitável"
            },
            {
                "enumName": "VALOR_CRITERIO_VALOR",
                "value": "C",
                "label": "Critério de valor"
            },
            {
                "enumName": "PREMIO_REMUNERACAO",
                "value": "P",
                "label": "Prêmio / Remuneração"
            },
            {
                "enumName": "VALOR_GASTO_ATUALMENTE",
                "value": "A",
                "label": "Valor gasto atualmente"
            }
        ]
    },
    {
        "name": "DeclaracoesMargemPreferenciaEnum",
        "values": [
            {
                "enumName": "NAO_SE_APLICA",
                "value": "0",
                "label": "Não se aplica"
            },
            {
                "enumName": "APENAS_MPN",
                "value": "1",
                "label": "MPN"
            },
            {
                "enumName": "MPN_MPA",
                "value": "2",
                "label": "MPN + MPA"
            }
        ]
    },
    {
        "name": "DestinoRetornoJulgamentoParaSalaDisputaEnum",
        "values": [
            {
                "enumName": "ETAPA_FECHADA_MODO_ABERTO_FECHADO",
                "value": "F",
                "label": "disputa fechada"
            },
            {
                "enumName": "DESEMPATE_ME_EPP",
                "value": "M",
                "label": "desempate Me/Epp"
            },
            {
                "enumName": "DESEMPATE_7174",
                "value": "7",
                "label": "desempate 7174"
            },
            {
                "enumName": "DISPUTA_FINAL_DESEMPATE_VALOR",
                "value": "V",
                "label": "desempate por disputa final do art. 60 da lei 14.133/2021"
            }
        ]
    },
    {
        "name": "EtapaDisputaEnum",
        "values": [
            {
                "enumName": "ABERTA",
                "value": "A",
                "label": "Aberta"
            },
            {
                "enumName": "FECHADA",
                "value": "F",
                "label": "Fechada"
            },
            {
                "enumName": "DESEMPATE",
                "value": "D",
                "label": "Desempate"
            },
            {
                "enumName": "DISPUTA_FINAL_DESEMPATE_VALOR",
                "value": "V",
                "label": "Disputa final - Art. 60 da Lei 14.133/2021"
            },
            {
                "enumName": "ENCERRADA",
                "value": "E",
                "label": "Encerrada"
            }
        ]
    },
    {
        "name": "EtapaSelecaoFornecedoresEnum",
        "values": [
            {
                "enumName": "JULGAMENTO_PROPOSTAS",
                "value": "JP",
                "label": "Julgamento de Proposta"
            },
            {
                "enumName": "HABILITACAO_FORNECEDORES",
                "value": "HF",
                "label": "Habilitação de Fornecedores"
            },
            {
                "enumName": "ADJUDICACAO_HOMOLOGACAO",
                "value": "AH",
                "label": "Adjudicação/Homologação"
            },
            {
                "enumName": "FASE_RECURSAL",
                "value": "FR",
                "label": "Fase Recursal"
            }
        ]
    },
    {
        "name": "FaseCompraFaseExternaEnum",
        "values": [
            {
                "enumName": "AGUARDANDO_ABERTURA_SESSAO_PUBLICA",
                "value": "1",
                "label": "Aguardando abertura da sessão pública"
            },
            {
                "enumName": "EM_ANALISE_PROPOSTAS",
                "value": "2",
                "label": "Em análise de propostas"
            },
            {
                "enumName": "DISPUTA_INICIADA",
                "value": "3",
                "label": "Disputa iniciada"
            },
            {
                "enumName": "SELECAO_FORNECEDORES_INICIADA",
                "value": "4",
                "label": "Seleção de fornecedores iniciada"
            },
            {
                "enumName": "CARREGANDO_COMPRA",
                "value": "5",
                "label": "Carregando compra da Fase Interna"
            },
            {
                "enumName": "AGUARDANDO_PUBLICACAO",
                "value": "6",
                "label": "Aguardando publicação"
            },
            {
                "enumName": "DISPUTA_AGENDADA",
                "value": "99",
                "label": "Disputa Agendada"
            }
        ]
    },
    {
        "name": "FaseItemEnum",
        "values": [
            {
                "enumName": "AGUARDANDO_ABERTURA_SESSAO_PUBLICA",
                "value": "AS",
                "label": "Aguardando abertura da sessão pública"
            },
            {
                "enumName": "PENDENTE_ANALISE_PROPOSTAS",
                "value": "AP",
                "label": "Pendente da análise de propostas"
            },
            {
                "enumName": "AGUARDANDO_DISPUTA",
                "value": "F",
                "label": "Aguardando disputa"
            },
            {
                "enumName": "AGUARDANDO_ABERTURA_PARA_LANCES",
                "value": "AA",
                "label": "Aguardando abertura"
            },
            {
                "enumName": "ABERTURA_LANCES_SUSPENSA",
                "value": "LS",
                "label": "Abertura Suspensa"
            },
            {
                "enumName": "ABERTO_LANCES_FASE_ABERTA",
                "value": "LA",
                "label": "Etapa aberta"
            },
            {
                "enumName": "ABERTO_LANCES_FASE_FECHADA",
                "value": "LF",
                "label": "Etapa fechada"
            },
            {
                "enumName": "EM_ENCERRAMENTO_ALEATORIO",
                "value": "AL",
                "label": "Etapa aberta (aleatório)"
            },
            {
                "enumName": "FALHA_SISTEMA_ENCERRAMENTO_PENDENTE",
                "value": "FE",
                "label": "Aguardando Encerramento"
            },
            {
                "enumName": "AGUARDANDO_DECISAO_REINICIO_FASE_ABERTA",
                "value": "RA",
                "label": "Aguardando Decisão sobre Reinício"
            },
            {
                "enumName": "AGUARDANDO_DISPUTA_FECHADA",
                "value": "AF",
                "label": "Aguardando Disputa Fechada"
            },
            {
                "enumName": "AGUARDANDO_DESEMPATE_ME_EPP",
                "value": "AM",
                "label": "Aguardando Desempate ME/EPP"
            },
            {
                "enumName": "EM_DESEMPATE_ME_EPP",
                "value": "DM",
                "label": "Em Desempate ME/EPP"
            },
            {
                "enumName": "AGUARDANDO_DESEMPATE_7174",
                "value": "A7",
                "label": "Aguardando Desempate 7174"
            },
            {
                "enumName": "EM_DESEMPATE_7174",
                "value": "D7",
                "label": "Em Desempate 7174"
            },
            {
                "enumName": "EM_DISPUTA_FINAL_DESEMPATE_VALOR",
                "value": "DF",
                "label": "Em Disputa final - Art. 60 da Lei 14.133/2021"
            },
            {
                "enumName": "AGUARDANDO_DECISAO_ITEM_COTA",
                "value": "B3",
                "label": "Aguardando Decisão sobre item de cota"
            },
            {
                "enumName": "AGUARDANDO_JULGAMENTO_TECNICA",
                "value": "JT",
                "label": "Aguardando julgamento de técnica | técnica e preço"
            },
            {
                "enumName": "AGUARDANDO_JULGAMENTO",
                "value": "E",
                "label": "Disputa Encerrada"
            },
            {
                "enumName": "DISPUTA_ENCERRADA",
                "value": "E",
                "label": "Disputa Encerrada"
            },
            {
                "enumName": "AGUARDANDO_HABILITACAO",
                "value": "JE",
                "label": "Julgamento encerrado"
            },
            {
                "enumName": "AGUARDANDO_ADJUDICACAO",
                "value": "HE",
                "label": "Habilitação encerrada"
            },
            {
                "enumName": "AGUARDANDO_ENCERRAMENTO_JUG_HAB",
                "value": "PE",
                "label": "Aguardando encerramento"
            },
            {
                "enumName": "AGUARDANDO_REABERTURA_JUG_HAB",
                "value": "PR",
                "label": "Aguardando reabertura"
            },
            {
                "enumName": "JUG_HAB_REABERTO",
                "value": "JR",
                "label": "Julgamento/Habilitação reabertos"
            },
            {
                "enumName": "ABERTO_RECURSOS",
                "value": "AR",
                "label": "Aberto para recursos"
            },
            {
                "enumName": "ABERTO_CONTRARRAZOES",
                "value": "AC",
                "label": "Aberto para contrarrazões"
            },
            {
                "enumName": "AGUARDANDO_DECISAO_RECURSOS_AG_CONT",
                "value": "D1",
                "label": "Aguardando decisão de recursos"
            },
            {
                "enumName": "AGUARDANDO_DECISAO_RECURSOS_AUT_COMP",
                "value": "D2",
                "label": "Aguardando revisão de decisão"
            },
            {
                "enumName": "APTO_HOMOLOGACAO",
                "value": "AE",
                "label": "Adjudicação encerrada"
            }
        ]
    },
    {
        "name": "FiltroFornecedoresMinhasParticipacoesEnum",
        "values": [
            {
                "enumName": "EM_ANDAMENTO",
                "value": "2",
                "label": "Em andamento"
            },
            {
                "enumName": "PROPOSTAS",
                "value": "3",
                "label": "Propostas"
            },
            {
                "enumName": "DISPUTA",
                "value": "4",
                "label": "Disputa"
            },
            {
                "enumName": "SELECAO_DE_FORNECEDORES",
                "value": "5",
                "label": "Seleção de fornecedores"
            },
            {
                "enumName": "FINALIZADAS",
                "value": "6",
                "label": "Finalizadas"
            }
        ]
    },
    {
        "name": "FiltroFornecedoresParaSelecaoFornecedoresEnum",
        "values": [
            {
                "enumName": "TODOS_FORNECEDORES",
                "value": "1",
                "label": "Todos os Fornecedores"
            },
            {
                "enumName": "FORNECEDORES_COM_ITENS_PENDENTES_JULGAMENTO",
                "value": "2",
                "label": "Fornecedores com itens pendentes de julgamento"
            },
            {
                "enumName": "FORNECEDORES_COM_ITENS_PENDENTES_HABILITACAO",
                "value": "3",
                "label": "Fornecedores com itens pendentes de habilitação"
            }
        ]
    },
    {
        "name": "FiltroItensParaAnalisePropostasEnum",
        "values": [
            {
                "enumName": "TODOS_ITENS",
                "value": "1",
                "label": "Todos os Itens"
            },
            {
                "enumName": "SOMENTE_ITENS_PENDENTES_ANALISE",
                "value": "2",
                "label": "Itens pendentes de análise"
            }
        ]
    },
    {
        "name": "FiltroItensParaSelecaoFornecedoresEnum",
        "values": [
            {
                "enumName": "TODOS_ITENS",
                "value": "1",
                "label": "Todos os Itens"
            },
            {
                "enumName": "FORNECEDOR_SOMENTE_ITENS_COM_PARTICIPACAO",
                "value": "2",
                "label": "Itens em que estou participando"
            },
            {
                "enumName": "GOVERNO_SOMENTE_ITENS_AGUARDANDO_JULGAMENTO",
                "value": "3",
                "label": "Itens aguardando julgamento"
            },
            {
                "enumName": "GOVERNO_SOMENTE_ITENS_AGUARDANDO_HABILITACAO",
                "value": "4",
                "label": "Itens aguardando habilitação"
            }
        ]
    },
    {
        "name": "FormaJulgamentoItemEnum",
        "values": [
            {
                "enumName": "MENOR_PRECO",
                "value": "V",
                "label": "Menor Preço"
            },
            {
                "enumName": "MAIOR_DESCONTO",
                "value": "D",
                "label": "Maior Desconto"
            }
        ]
    },
    {
        "name": "FormaRealizacaoCompraEnum",
        "values": [
            {
                "enumName": "ELETRONICA",
                "value": "1",
                "label": "Eletrônica"
            },
            {
                "enumName": "PRESENCIAL",
                "value": "2",
                "label": "Presencial"
            }
        ]
    },
    {
        "name": "FundamentoLegalEnum",
        "values": [
            {
                "enumName": "DECRETO_5450",
                "value": "D5450",
                "label": "Decreto 5.450/2005"
            },
            {
                "enumName": "DECRETO_10024",
                "value": "D10024",
                "label": "Decreto 10.024/2019"
            },
            {
                "enumName": "LEI_10520",
                "value": "L10520",
                "label": "Lei 10.520"
            },
            {
                "enumName": "LEI_12462",
                "value": "L12462",
                "label": "Lei 12.462"
            },
            {
                "enumName": "LEI_14133",
                "value": "L14133",
                "label": "Lei 14.133/2021"
            },
            {
                "enumName": "MP_1221",
                "value": "MP1221",
                "label": "MP 1.221/2024"
            }
        ]
    },
    {
        "name": "FundamentoAplicacaoDesempateArtigo60Enum",
        "values": [
            {
                "enumName": "PARTICIPACAO_EM_DISPUTA_FINAL",
                "label": "Lei 14.133/2021, art 60, inciso I"
            },
            {
                "enumName": "PREFERENCIA_POR_EMPRESA_NA_UF_DA_UASG",
                "label": "Lei 14.133/2021, art 60, § 1º, inciso I"
            },
            {
                "enumName": "PREFERENCIA_POR_EMPRESA_BRASILEIRA",
                "label": "Lei 14.133/2021, art 60, § 1º, inciso II"
            },
            {
                "enumName": "PREFERENCIA_POR_EMPRESA_ME_EPP_DECLARANTE",
                "label": "Lei 14.133/2021, art 60, § 2º"
            },
            {
                "enumName": "DESEMPATE_MANUAL_PELO_AGENTE_CONTRATACAO",
                "label": "Lei 14.133/2021, art 60, outros incisos"
            }
        ]
    },
    {
        "name": "ModalidadeCompraEnum",
        "values": [
            {
                "enumName": "CONVITE",
                "value": "1",
                "label": "Convite"
            },
            {
                "enumName": "TOMADA_DE_PRECO",
                "value": "2",
                "label": "Tomada de preço"
            },
            {
                "enumName": "CONCORRENCIA",
                "value": "3",
                "label": "Concorrência"
            },
            {
                "enumName": "CONCORRENCIA_INTERNACIONAL",
                "value": "4",
                "label": "Concorrência Internacional"
            },
            {
                "enumName": "PREGAO",
                "value": "5",
                "label": "Pregão"
            },
            {
                "enumName": "DISPENSA",
                "value": "6",
                "label": "Dispensa"
            },
            {
                "enumName": "INEXIGIBILIDADE",
                "value": "7",
                "label": "Inexigibilidade"
            },
            {
                "enumName": "COTACAO",
                "value": "8",
                "label": "Cotação"
            },
            {
                "enumName": "CREDENCIAMENTO",
                "value": "12",
                "label": "Credenciamento"
            },
            {
                "enumName": "CONCURSO",
                "value": "20",
                "label": "Concurso"
            },
            {
                "enumName": "RDC",
                "value": "99",
                "label": "RDC"
            }
        ]
    },
    {
        "name": "ModoDisputaCompraEnum",
        "values": [
            {
                "enumName": "ABERTO",
                "value": "A",
                "label": "Aberto"
            },
            {
                "enumName": "FECHADO",
                "value": "F",
                "label": "Fechado"
            },
            {
                "enumName": "ABERTO_FECHADO",
                "value": "AF",
                "label": "Aberto/Fechado"
            },
            {
                "enumName": "FECHADO_ABERTO",
                "value": "FA",
                "label": "Fechado/Aberto"
            }
        ]
    },
    {
        "name": "MotivoAlteracaoAberturaSessaoPublicaEnum",
        "values": [
            {
                "enumName": "ADMINISTRATIVO",
                "value": "A",
                "label": "Medida administrativa"
            },
            {
                "enumName": "POR_CAUTELAR",
                "value": "C",
                "label": "Medida Cautelar"
            },
            {
                "enumName": "JUDICIAL",
                "value": "J",
                "label": "Medida Judicial"
            }
        ]
    },
    {
        "name": "OrdenacaoItensEnum",
        "values": [
            {
                "enumName": "ORDEM_NUMERICA",
                "value": "1",
                "label": "Ordem numérica"
            },
            {
                "enumName": "ORDEM_DE_ABERTURA",
                "value": "2",
                "label": "Ordem de abertura"
            }
        ]
    },
    {
        "name": "OrdenacaoPropostasEnum",
        "values": [
            {
                "enumName": "ORDEM_DE_VALOR",
                "value": "V",
                "label": "Ordem de valor"
            },
            {
                "enumName": "ORDEM_DE_PREFERENCIA",
                "value": "P",
                "label": "Ordem de preferência"
            }
        ]
    },
    {
        "name": "OrigemMelhorValorEnum",
        "values": [
            {
                "enumName": "PROPOSTA_INICIAL",
                "value": "P",
                "label": "Proposta"
            },
            {
                "enumName": "LANCE",
                "value": "L",
                "label": "Lance"
            },
            {
                "enumName": "DESEMPATE_MEEPP",
                "value": "M",
                "label": "Desempate"
            },
            {
                "enumName": "DESEMPATE_7174",
                "value": "7",
                "label": "Desempate"
            },
            {
                "enumName": "DISPUTA_FINAL_DESEMPATE_VALOR",
                "value": "F",
                "label": "Disputa Final"
            }
        ]
    },
    {
        "name": "PorteEmpresaEnum",
        "values": [
            {
                "enumName": "GRANDE_PORTE",
                "value": "0",
                "label": "Grande Empresa"
            },
            {
                "enumName": "ME_EPP",
                "value": "1",
                "label": "ME ou EPP"
            },
            {
                "enumName": "EQUIPARADA_MEP_EPP",
                "value": "2",
                "label": "Equiparada Me/Epp"
            },
            {
                "enumName": "NAO_CADASTRADO",
                "value": "N",
                "label": "Fornecedor não cadastrado na base da Receita Federal"
            }
        ]
    },
    {
        "name": "RegimeExecucaoEnum",
        "values": [
            {
                "enumName": "EMPREITADA_PRECO_GLOBAL",
                "value": "1",
                "label": "Empreitada por Preço Global"
            },
            {
                "enumName": "EMPREITADA_PRECO_UNITARIO",
                "value": "2",
                "label": "Empreitada por Preço Unitário"
            },
            {
                "enumName": "CONTRATACAO_TAREFA",
                "value": "3",
                "label": "Contratação por Tarefa"
            },
            {
                "enumName": "EMPREITADA_INTEGRAL",
                "value": "4",
                "label": "Empreitada Integral"
            },
            {
                "enumName": "CONTRATACAO_INTEGRADA_SEMI_INTEGRADA",
                "value": "5",
                "label": "Contratação Integrada/Semi-Integrada"
            },
            {
                "enumName": "CONTRATACAO_INTEGRADA",
                "value": "6",
                "label": "Contratação Integrada"
            },
            {
                "enumName": "CONTRATACAO_SEMI_INTEGRADA",
                "value": "7",
                "label": "Contratação Semi-Integrada"
            },
            {
                "enumName": "FORNECIMENTO_E_PRESTACAO_SERVICO_ASSOCIADO",
                "value": "8",
                "label": "Fornecimento e Prestação de Serviço Associado"
            }
        ]
    },
    {
        "name": "SituacaoCompraFaseExternaEnum",
        "values": [
            {
                "enumName": "PUBLICADA_DIVULGADA",
                "value": "PD",
                "label": "Publicada/Divulgada"
            },
            {
                "enumName": "REVOGADA",
                "value": "RE",
                "label": "Revogada"
            },
            {
                "enumName": "ANULADA",
                "value": "AN",
                "label": "Anulada"
            },
            {
                "enumName": "SUSPENSA",
                "value": "SU",
                "label": "Suspensa"
            },
            {
                "enumName": "FRACASSADA",
                "value": "FR",
                "label": "Fracassada"
            },
            {
                "enumName": "DESERTA",
                "value": "DE",
                "label": "Deserta"
            }
        ]
    },
    {
        "name": "SituacaoEnvioResultadoEnum",
        "values": [
            {
                "enumName": "RESULTADO_PENDENTE_ENVIO_SIASG",
                "value": "PS",
                "label": "Em processo de homologação"
            },
            {
                "enumName": "RESULTADO_PENDENTE_ENVIO_SIASG_GRUPO",
                "value": "PG",
                "label": "Em processo de homologação"
            },
            {
                "enumName": "ERRO_AO_ENVIAR_RESULTADO_SIASG",
                "value": "ES",
                "label": "Erro na homologação"
            },
            {
                "enumName": "RESULTADO_ENVIADO_COM_SUCESSO_SIASG",
                "value": "SS",
                "label": "Resultado enviado com sucesso"
            },
            {
                "enumName": "RESULTADO_PENDENTE_CANCELAMENTO_SIASG_GRUPO",
                "value": "CG",
                "label": "Em processo cancelamento de homologação"
            },
            {
                "enumName": "RESULTADO_PENDENTE_CANCELAMENTO_SIASG_ITEM_DO_GRUPO",
                "value": "CS",
                "label": "Em processo cancelamento de homologação"
            },
            {
                "enumName": "ERRO_AO_CANCELAR_RESULTADO_SIASG",
                "value": "CE",
                "label": "Erro no cancelamento da homologação"
            },
            {
                "enumName": "RESULTADO_PENDENTE_ENVIO_PNCP",
                "value": "PP",
                "label": "Enviando resultado ao PNCP"
            },
            {
                "enumName": "ERRO_AO_ENVIAR_RESULTADO_PNCP",
                "value": "EP",
                "label": "Erro no envio de resultado ao PNCP"
            },
            {
                "enumName": "RESULTADO_ENVIADO_COM_SUCESSO_PNCP",
                "value": "SP",
                "label": "Resultado enviado ao PNCP"
            }
        ]
    },
    {
        "name": "SituacaoItemCompraEnum",
        "values": [
            {
                "enumName": "ATIVO",
                "value": "1",
                "label": "Ativo"
            },
            {
                "enumName": "CANCELADO",
                "value": "2",
                "label": "Cancelado"
            },
            {
                "enumName": "ANULADO",
                "value": "3",
                "label": "Anulado"
            },
            {
                "enumName": "REVOGADO",
                "value": "4",
                "label": "Revogado"
            },
            {
                "enumName": "SUSPENSO",
                "value": "5",
                "label": "Suspenso"
            },
            {
                "enumName": "DESERTO",
                "value": "6",
                "label": "Deserto"
            },
            {
                "enumName": "FRACASSADO_NA_ANALISE",
                "value": "7",
                "label": "Fracassado"
            },
            {
                "enumName": "FRACASSADO_NO_JULGAMENTO",
                "value": "8",
                "label": "Fracassado"
            },
            {
                "enumName": "FRACASSADO_NA_DISPUTA",
                "value": "9",
                "label": "Fracassado"
            }
        ]
    },
    {
        "name": "SituacaoNivelCadastramentoSicafEnum",
        "values": [
            {
                "enumName": "NAO_CADASTRADO",
                "label": "Não Cadastrado"
            },
            {
                "enumName": "RASCUNHO",
                "label": "Rascunho"
            },
            {
                "enumName": "CADASTRADO",
                "label": "Cadastrado"
            }
        ]
    },
    {
        "name": "SituacaoParticipanteDisputaEnum",
        "values": [
            {
                "enumName": "GANHANDO",
                "value": "G",
                "label": "Ganhando"
            },
            {
                "enumName": "EMPATADO",
                "value": "E",
                "label": "Empatado"
            },
            {
                "enumName": "PERDENDO",
                "value": "P",
                "label": "Perdendo"
            }
        ]
    },
    {
        "name": "SituacaoPropostaItemEnum",
        "values": [
            {
                "enumName": "DESCLASSIFICADA_NA_ANALISE",
                "value": "1",
                "label": "Proposta desclassificada"
            },
            {
                "enumName": "DESCLASSIFICADA_NA_SALA_DE_DISPUTA",
                "value": "9",
                "label": "Proposta desclassificada"
            },
            {
                "enumName": "PENDENTE_ACEITE_ASSUMIR_COTA",
                "value": "7",
                "label": "Pendente aceite para assumir cota"
            },
            {
                "enumName": "RECUSADO_ASSUMIR_COTA",
                "value": "8",
                "label": "Recusa para assumir cota"
            },
            {
                "enumName": "DESCLASSIFICADA_NO_JULGAMENTO",
                "value": "2",
                "label": "Proposta desclassificada"
            },
            {
                "enumName": "ACEITA",
                "value": "3",
                "label": "Proposta aceita"
            },
            {
                "enumName": "PARTICIPANTE_HABILITADO",
                "value": "4",
                "label": "Fornecedor habilitado"
            },
            {
                "enumName": "PARTICIPANTE_INABILITADO",
                "value": "5",
                "label": "Fornecedor inabilitado"
            },
            {
                "enumName": "ADJUDICADA",
                "value": "6",
                "label": "Proposta adjudicada"
            }
        ]
    },
    {
        "name": "SituacaoRecursalEnum",
        "values": [
            {
                "enumName": "PROCEDE",
                "value": "P",
                "label": "Procede"
            },
            {
                "enumName": "NAO_PROCEDE",
                "value": "N",
                "label": "Não procede"
            },
            {
                "enumName": "MANTIDA_DECISAO_NAO_PROCEDE",
                "value": "M",
                "label": "Mantida decisão não procede"
            },
            {
                "enumName": "REVERTIDA_DECISAO_NAO_PROCEDE",
                "value": "R",
                "label": "Revertida decisão não procede"
            }
        ]
    },
    {
        "name": "SituacaoRecursoContrarrazaoEnum",
        "values": [
            {
                "enumName": "RASCUNHO",
                "value": "R",
                "label": "Rascunho"
            },
            {
                "enumName": "CADASTRADO",
                "value": "C",
                "label": "Cadastrado"
            },
            {
                "enumName": "DESISTIU_CADASTRO",
                "value": "D",
                "label": "Desistiu Cadastro"
            }
        ]
    },
    {
        "name": "SituacaoSolicitacaoAoParticipanteEnum",
        "values": [
            {
                "enumName": "SOLICITADA",
                "value": "S",
                "label": "Solicitada"
            },
            {
                "enumName": "PARCIALMENTE_ENCERRADA",
                "value": "P",
                "label": "Parcialmente encerrada"
            },
            {
                "enumName": "ENCERRADA",
                "value": "E",
                "label": "Encerrada"
            }
        ]
    },
    {
        "name": "SituacaoAssumirCotaEnum",
        "values": [
            {
                "enumName": "SOLICITADA",
                "value": "S",
                "label": "Pendente"
            },
            {
                "enumName": "RECUSADA",
                "value": "R",
                "label": "Recusada"
            },
            {
                "enumName": "ACEITA",
                "value": "A",
                "label": "Aceita"
            }
        ]
    },
    {
        "name": "TipoDesempateEnum",
        "values": [
            {
                "enumName": "DESEMPATE_ME_EPP",
                "value": "M",
                "label": "Me/Epp"
            },
            {
                "enumName": "DESEMPATE_7174",
                "value": "7",
                "label": "7174"
            },
            {
                "enumName": "DISPUTA_FINAL_DESEMPATE_VALOR",
                "value": "V",
                "label": "por disputa final do art. 60 da lei 14.133/2021"
            }
        ]
    },
    {
        "name": "TipoEventoFaseInternaEnum",
        "values": [
            {
                "enumName": "ABANDONO",
                "value": "-1",
                "label": "Abandono"
            },
            {
                "enumName": "CANCELAMENTO_ANULACAO_REVOGACAO",
                "value": "1",
                "label": "Cancelamento de Anulação/Revogação"
            },
            {
                "enumName": "ADIAMENTO",
                "value": "2",
                "label": "Adiamento"
            },
            {
                "enumName": "REVOGACAO",
                "value": "3",
                "label": "Revogação"
            },
            {
                "enumName": "ANULACAO",
                "value": "4",
                "label": "Anulação"
            },
            {
                "enumName": "ALTERACAO",
                "value": "5",
                "label": "Alteração"
            },
            {
                "enumName": "RETIFICACAO",
                "value": "6",
                "label": "Retificação"
            },
            {
                "enumName": "SUSPENSAO",
                "value": "7",
                "label": "Suspensão"
            },
            {
                "enumName": "REABERTURA",
                "value": "8",
                "label": "Reabertura"
            }
        ]
    },
    {
        "name": "TipoFornecedorEnum",
        "values": [
            {
                "enumName": "PESSOA_FISICA",
                "value": "F",
                "label": "Pessoa Física"
            },
            {
                "enumName": "PESSOA_JURIDICA",
                "value": "J",
                "label": "Pessoa Jurídica"
            },
            {
                "enumName": "ESTRANGEIRO",
                "value": "E",
                "label": "Estrangeiro"
            }
        ]
    },
    {
        "name": "TipoItemEnum",
        "values": [
            {
                "enumName": "ITEM_NAO_AGRUPADO",
                "value": "I",
                "label": "ItemPregao não agrupado"
            },
            {
                "enumName": "SUBITEM_GRUPO",
                "value": "S",
                "label": "Subitem"
            },
            {
                "enumName": "GRUPO",
                "value": "G",
                "label": "Grupo"
            }
        ]
    },
    {
        "name": "TipoItemCatalogoEnum",
        "values": [
            {
                "enumName": "MATERIAL",
                "value": "M",
                "label": "Material"
            },
            {
                "enumName": "SERVICO",
                "value": "S",
                "label": "Serviço"
            }
        ]
    },
    {
        "name": "TipoObjetoLicitacaoEnum",
        "values": [
            {
                "enumName": "BENS",
                "value": "1",
                "label": "Bens"
            },
            {
                "enumName": "OBRAS",
                "value": "2",
                "label": "Obras"
            },
            {
                "enumName": "SERVICOS",
                "value": "3",
                "label": "Serviços"
            },
            {
                "enumName": "SERVICOS_ENGENHARIA",
                "value": "4",
                "label": "Serviços de engenharia"
            },
            {
                "enumName": "BENS_COMUNS",
                "value": "5",
                "label": "Bens comuns"
            },
            {
                "enumName": "SERVICOS_COMUNS",
                "value": "6",
                "label": "Serviços comuns"
            },
            {
                "enumName": "SERVICOS_COMUNS_ENGENHARIA",
                "value": "7",
                "label": "Serviços comuns de engenharia"
            },
            {
                "enumName": "BENS_ESPECIAIS",
                "value": "8",
                "label": "Bens especiais"
            },
            {
                "enumName": "SERVICOS_ESPECIAIS",
                "value": "9",
                "label": "Serviços especiais"
            },
            {
                "enumName": "SERVICOS_ESPECIAIS_ENGENHARIA",
                "value": "10",
                "label": "Serviços especiais de engenharia"
            },
            {
                "enumName": "OBRAS_COMUNS",
                "value": "11",
                "label": "Obras Comuns"
            },
            {
                "enumName": "OBRAS_ESPECIAIS",
                "value": "12",
                "label": "Obras Especiais"
            },
            {
                "enumName": "TRABALHO_TECNICO_CIENTIFICO_OU_ARTISTICO",
                "value": "13",
                "label": "Trabalho Técnico, Científico ou Artístico"
            },
            {
                "enumName": "BENS_E_SERVICOS_ESPECIAIS_DE_TIC",
                "value": "14",
                "label": "Bens e Serviços Especiais de TIC"
            },
            {
                "enumName": "OBRAS_E_SERVICOS_ESPECIAIS_DE_ENGENHARIA",
                "value": "15",
                "label": "Obras e Serviços Especiais de Engenharia"
            },
            {
                "enumName": "OBJETOS_QUE_ADMITAM_SOLUCOES_ESPECIFICAS_E_ALTERNATIVAS_E_VARIACOES_DE_EXECUCAO",
                "value": "16",
                "label": "Objetos que admitam soluções específicas e alternativas e variações de execução"
            },
            {
                "enumName": "SERVICOS_TECNICOS_ESPECIALIZADOS_DE_NATUREZA_PREDOMINANTEMENTE_INTELECTUAL",
                "value": "17",
                "label": "Serviços Técnicos especializados de natureza predominantemente intelectual"
            },
            {
                "enumName": "SERVICOS_MAJORITARIAMENTE_DEPENDENTES_DE_TECNOLOGIA_SOFISTICADA_E_DE_DOMINIO_RESTRITO",
                "value": "18",
                "label": "Serviços majoritariamente dependentes de tecnologia sofisticada e de domínio restrito"
            },
            {
                "enumName": "ESTUDOS_TECNICOS_PROJETOS_BASICOS_E_PROJETOS_EXECUTIVOS",
                "value": "19",
                "label": "Estudos técnicos, planejamentos, projetos básicos e projetos executivos"
            },
            {
                "enumName": "FISCALIZACAO_SUPERVISAO_GERENCIAMENTO_OBRAS_E_SERVICOS",
                "value": "20",
                "label": "Fiscalização, supervisão e gerenciamento de obras e serviços"
            },
            {
                "enumName": "CONTROLE_QUALIDADE_E_TECNOLOGICO",
                "value": "21",
                "label": "Controles de qualidade e tecnológico, análises, [...] e demais serviços de engenharia"
            }
        ]
    },
    {
        "name": "TipoPendenciaPropostaItemEnum",
        "values": [
            {
                "enumName": "ENVIO_DE_ANEXO_NAO_REALIZADO_PARA_O_ITEM",
                "value": "A",
                "label": "Envio de anexo não realizado para o item."
            },
            {
                "enumName": "ITEM_DE_GRUPO_SEM_PROPOSTA",
                "value": "G",
                "label": "Existe pelo menos um item de grupo sem proposta."
            },
            {
                "enumName": "NOTA_TECNICA_NAO_DEFINIDA",
                "value": "N",
                "label": "Nota não definida."
            }
        ]
    },
    {
        "name": "TipoQuadroInformativoEnum",
        "values": [
            {
                "enumName": "AVISO",
                "value": "A",
                "label": "Aviso"
            },
            {
                "enumName": "ESCLARECIMENTO",
                "value": "E",
                "label": "Esclarecimento"
            },
            {
                "enumName": "IMPUGNACAO",
                "value": "I",
                "label": "Impugnação"
            }
        ]
    },
    {
        "name": "TipoRemetenteMensagemChatEnum",
        "values": [
            {
                "enumName": "SISTEMA",
                "value": "0"
            },
            {
                "enumName": "USUARIO_FORNECEDOR",
                "value": "1"
            },
            {
                "enumName": "USUARIO_GOVERNO",
                "value": "3"
            }
        ]
    },
    {
        "name": "TipoSolicitacaoAoParticipanteEnum",
        "values": [
            {
                "enumName": "NEGOCIACAO_VALOR",
                "value": "N",
                "label": "Negociação de valor"
            },
            {
                "enumName": "NEGOCIACAO_VALOR_E_SUBCONTRATACAO",
                "value": "S",
                "label": "Negociação de valor e subcontratação"
            },
            {
                "enumName": "NEGOCIACAO_SUBCONTRATACAO",
                "value": "S",
                "label": "Negociação de subcontratação"
            },
            {
                "enumName": "CONVOCACAO_ENVIO_ANEXO",
                "value": "A",
                "label": "Convocação para envio de anexos"
            },
            {
                "enumName": "SOLICITACAO_ASSUMIR_COTA_ITEM",
                "value": "C",
                "label": "Solicitação para assumir cota de item"
            },
            {
                "enumName": "PERGUNTA_CHAT",
                "value": "P",
                "label": "Pergunta do chat"
            }
        ]
    },
    {
        "name": "TipoSuspensaoCompraEnum",
        "values": [
            {
                "enumName": "ADMINISTRATIVO",
                "value": "3",
                "label": "Administrativa"
            },
            {
                "enumName": "POR_CAUTELAR",
                "value": "12",
                "label": "Por cautelar"
            },
            {
                "enumName": "JUDICIAL",
                "value": "13",
                "label": "Judicial"
            },
            {
                "enumName": "POR_ABANDONO",
                "value": "14",
                "label": "Por abandono"
            }
        ]
    },
    {
        "name": "TipoTratamentoDiferenciadoMeEppEnum",
        "values": [
            {
                "enumName": "NENHUM",
                "value": "0",
                "label": "Nenhum"
            },
            {
                "enumName": "INCISO1",
                "value": "1",
                "label": "Exclusividade ME/EPP"
            },
            {
                "enumName": "INCISO2",
                "value": "2",
                "label": "Subcontratação ME/EPP"
            },
            {
                "enumName": "INCISO3",
                "value": "3",
                "label": "Cota reservada ME/EPP"
            },
            {
                "enumName": "SEM_BENEFICIO_MEEPP",
                "value": "9",
                "label": "Sem benefícios ME/EPP"
            }
        ]
    },
    {
        "name": "TipoVariacaoMinimaEntreLancesEnum",
        "values": [
            {
                "enumName": "VALOR",
                "value": "V",
                "label": "Valor"
            },
            {
                "enumName": "PERCENTUAL",
                "value": "P",
                "label": "Percentual"
            }
        ]
    }
]
```


## Fase 2 -  Depois de pesquisar

### Compras

```json
[
    {
        "numeroUasg": 121101,
        "modalidade": 5,
        "numero": 90000,
        "ano": 2024,
        "chaveCompraPncp": "6191489100018610001242024",
        "nomeUasg": "ESP-FUND. PE. ANCHI - CTO.PTA.RADIO TV.EDUC.",
        "caracteristica": "1",
        "formaRealizacao": "1",
        "criterioJulgamento": "7",
        "fundamentoLegal": "L14133",
        "equalizacaoIcms": false,
        "situacaoCompraFaseExterna": "PD",
        "faseCompraFaseExterna": "4",
        "homologada": false,
        "possuiAvisoDeEvento": false,
        "possuiEventoQueImpedeAcaoNaCompra": false,
        "objetoCompra": "Prestação serviços de plotagem com instalação pra eventos.  ",
        "julgamentoIniciado": true,
        "participacaoExclusivaMeEPP": false,
        "nomeOrgao": "ESP-FUND.PE ACH-CENTRO PAUL.RADIO-TV EDU",
        "possuiInformativo": false
    },
    {
        "numeroUasg": 130102,
        "modalidade": 5,
        "numero": 90000,
        "ano": 2024,
        "chaveCompraPncp": "0039689500012510003322024",
        "nomeUasg": "LABORATÓRIO FED. DE DEFESA AGROPECUÁRIA/SP",
        "caracteristica": "1",
        "formaRealizacao": "1",
        "criterioJulgamento": "7",
        "fundamentoLegal": "L14133",
        "equalizacaoIcms": false,
        "situacaoCompraFaseExterna": "PD",
        "faseCompraFaseExterna": "4",
        "homologada": false,
        "possuiAvisoDeEvento": false,
        "possuiEventoQueImpedeAcaoNaCompra": false,
        "objetoCompra": "Contratação de serviços de limpeza, conservação, controle e manejo integrado de pragas e limpeza de caixa d'água​, em proveito do Laboratório Federal de Defesa Agropecuária LFDA/SP, a serem executados em regime com e sem dedicação exclusiva de mão de obra.",
        "julgamentoIniciado": true,
        "participacaoExclusivaMeEPP": false,
        "nomeOrgao": "MINISTERIO DA AGRICULTURA E PECUARIA - MAPA",
        "possuiInformativo": true
    },
    {
        "numeroUasg": 158128,
        "modalidade": 5,
        "numero": 90000,
        "ano": 2024,
        "chaveCompraPncp": "1073514500019410000172024",
        "nomeUasg": "INST.FED.DE EDUC., CIENCIA E TEC. DO MARANHÃO",
        "caracteristica": "1",
        "formaRealizacao": "1",
        "criterioJulgamento": "7",
        "fundamentoLegal": "L14133",
        "equalizacaoIcms": false,
        "situacaoCompraFaseExterna": "PD",
        "faseCompraFaseExterna": "4",
        "homologada": false,
        "possuiAvisoDeEvento": false,
        "possuiEventoQueImpedeAcaoNaCompra": false,
        "objetoCompra": "Contratação de serviços para fornecimento de refeições (almoço e jantar), tipo buffet, para atendimento aos servidores da instituição participantes do evento - VII Jogos dos Servidores do IFMA, a ser realizado no período de 06 a 09 de março de 2024, em Pinheiro/MA.  ",
        "julgamentoIniciado": true,
        "participacaoExclusivaMeEPP": false,
        "nomeOrgao": "INST.FED.DE EDUC.,CIENC. E TEC. DO MARANHãO",
        "possuiInformativo": false
    },
    {
        "numeroUasg": 160749,
        "modalidade": 5,
        "numero": 90000,
        "ano": 2024,
        "chaveCompraPncp": "0039445200010310168282024",
        "nomeUasg": "7º CENTRO TELEMÁTICA ÁREA- CONTROLE DE CUSTOS",
        "caracteristica": "2",
        "formaRealizacao": "1",
        "criterioJulgamento": "7",
        "fundamentoLegal": "L14133",
        "equalizacaoIcms": false,
        "situacaoCompraFaseExterna": "PD",
        "faseCompraFaseExterna": "4",
        "homologada": false,
        "possuiAvisoDeEvento": false,
        "possuiEventoQueImpedeAcaoNaCompra": false,
        "objetoCompra": "Registro de Preços para futura e eventual aquisição de Equipamentos de Telefonia, com o  objetivo de atender às necessidades das organizações militares apoiadas pelo 7º Centro de Telemática de área (7°CTA), em território da 11ª Região Militar apoiadas pelo 7°CTA, conforme condições, quantidades e exigências estabelecidas neste instrumento e seus anexos. ",
        "julgamentoIniciado": true,
        "participacaoExclusivaMeEPP": false,
        "nomeOrgao": "COMANDO DO EXERCITO",
        "possuiInformativo": true
    },
    {
        "numeroUasg": 389099,
        "modalidade": 5,
        "numero": 90000,
        "ano": 2024,
        "chaveCompraPncp": "0492094800011610000052024",
        "nomeUasg": "CONSELHO REG. DE ENGENHARIA E AGRONOMIA - RO",
        "caracteristica": "1",
        "formaRealizacao": "1",
        "criterioJulgamento": "7",
        "fundamentoLegal": "L14133",
        "equalizacaoIcms": false,
        "situacaoCompraFaseExterna": "PD",
        "faseCompraFaseExterna": "4",
        "homologada": false,
        "possuiAvisoDeEvento": false,
        "possuiEventoQueImpedeAcaoNaCompra": false,
        "objetoCompra": "Gestão de vale alimentação/Refeição, na forma de cartão eletrônico magnético ou de tecnologia similar, equipado com microprocessador com chip eletrônico de segurança.",
        "julgamentoIniciado": true,
        "participacaoExclusivaMeEPP": false,
        "nomeOrgao": "CONSELHO REGIONAL ENGENHARIA E AGRONOMIA - RO",
        "possuiInformativo": true
    }
]
```


## Fase 3 - Ao clicar no item

#### Chamada ao numero da compra

```json
{
    "numeroUasg": 130102,
    "modalidade": 5,
    "numero": 90000,
    "ano": 2024,
    "chaveCompraPncp": "0039689500012510003322024",
    "nomeUasg": "LABORATÓRIO FED. DE DEFESA AGROPECUÁRIA/SP",
    "ufUasg": "SP",
    "caracteristica": "1",
    "formaRealizacao": "1",
    "criterioJulgamento": "7",
    "fundamentoLegal": "L14133",
    "equalizacaoIcms": false,
    "situacaoCompraFaseExterna": "PD",
    "faseCompraFaseExterna": "4",
    "homologada": false,
    "possuiAvisoDeEvento": false,
    "possuiEventoQueImpedeAcaoNaCompra": false,
    "modoDisputa": "A",
    "tipoObjeto": "6",
    "dataHoraPrevisaoAbertura": "2024-06-28T09:00:00",
    "dataHoraInicioPropostas": "2024-06-14T08:00:00",
    "dataHoraFimPropostas": "2024-06-28T09:00:00",
    "dataHoraAbertura": "2024-06-28T09:04:12.443366",
    "emergencial": false,
    "objeto": "Contratação de serviços de limpeza, conservação, controle e manejo integrado de pragas e limpeza de caixa d'água​, em proveito do Laboratório Federal de Defesa Agropecuária LFDA/SP, a serem executados em regime com e sem dedicação exclusiva de mão de obra.",
    "julgamentoIniciado": true
}


```


### Itens

```json
[
    {
        "numero": 1,
        "tipo": "I",
        "disputaPorValorUnitario": true,
        "possuiOrcamentoSigiloso": false,
        "identificador": "1",
        "tipoItemCatalogo": "S",
        "descricao": "Serviço Especializado de Limpeza",
        "criterioJulgamento": "1",
        "homologado": false,
        "numeroSessaoJulgHab": 1,
        "tipoTratamentoDiferenciadoMeEpp": "0",
        "participacaoExclusivaMeEppOuEquiparadas": false,
        "utilizaMargemPreferencia": false,
        "situacao": "1",
        "fase": "E",
        "quantidadeSolicitada": 12,
        "criterioValor": "E",
        "valorEstimado": 85169.3300,
        "valorEstimadoUnitario": 85169.3300,
        "valorEstimadoTotal": 1022031.9600,
        "priorizarAbertura": false,
        "julgHabEncerrada": false
    },
    {
        "numero": 2,
        "tipo": "I",
        "disputaPorValorUnitario": true,
        "possuiOrcamentoSigiloso": false,
        "identificador": "2",
        "tipoItemCatalogo": "S",
        "descricao": "Desinsetização / Desratização / Dedetização",
        "criterioJulgamento": "1",
        "homologado": false,
        "numeroSessaoJulgHab": 1,
        "tipoTratamentoDiferenciadoMeEpp": "1",
        "participacaoExclusivaMeEppOuEquiparadas": true,
        "utilizaMargemPreferencia": false,
        "situacao": "1",
        "fase": "JE",
        "quantidadeSolicitada": 12,
        "criterioValor": "E",
        "valorEstimado": 2550.0000,
        "valorEstimadoUnitario": 2550.0000,
        "valorEstimadoTotal": 30600.0000,
        "priorizarAbertura": false,
        "julgHabEncerrada": false
    },
    {
        "numero": 3,
        "tipo": "I",
        "disputaPorValorUnitario": true,
        "possuiOrcamentoSigiloso": false,
        "identificador": "3",
        "tipoItemCatalogo": "S",
        "descricao": "Manutenção / Higienização de Reservatório de Água Potável",
        "criterioJulgamento": "1",
        "homologado": false,
        "numeroSessaoJulgHab": 1,
        "tipoTratamentoDiferenciadoMeEpp": "1",
        "participacaoExclusivaMeEppOuEquiparadas": true,
        "utilizaMargemPreferencia": false,
        "situacao": "1",
        "fase": "JE",
        "quantidadeSolicitada": 2,
        "criterioValor": "E",
        "valorEstimado": 4650.0000,
        "valorEstimadoUnitario": 4650.0000,
        "valorEstimadoTotal": 9300.0000,
        "priorizarAbertura": false,
        "julgHabEncerrada": false
    },
    {
        "numero": 4,
        "tipo": "I",
        "disputaPorValorUnitario": true,
        "possuiOrcamentoSigiloso": false,
        "identificador": "4",
        "tipoItemCatalogo": "S",
        "descricao": "Serviço Especializado de Limpeza",
        "criterioJulgamento": "1",
        "homologado": false,
        "numeroSessaoJulgHab": 1,
        "tipoTratamentoDiferenciadoMeEpp": "0",
        "participacaoExclusivaMeEppOuEquiparadas": false,
        "utilizaMargemPreferencia": false,
        "situacao": "1",
        "fase": "JE",
        "quantidadeSolicitada": 12,
        "criterioValor": "E",
        "valorEstimado": 15792.7400,
        "valorEstimadoUnitario": 15792.7400,
        "valorEstimadoTotal": 189512.8800,
        "priorizarAbertura": false,
        "julgHabEncerrada": false
    },
    {
        "numero": 5,
        "tipo": "I",
        "disputaPorValorUnitario": true,
        "possuiOrcamentoSigiloso": false,
        "identificador": "5",
        "tipoItemCatalogo": "S",
        "descricao": "Desinsetização / Desratização / Dedetização",
        "criterioJulgamento": "1",
        "homologado": false,
        "numeroSessaoJulgHab": 1,
        "tipoTratamentoDiferenciadoMeEpp": "1",
        "participacaoExclusivaMeEppOuEquiparadas": true,
        "utilizaMargemPreferencia": false,
        "situacao": "1",
        "fase": "E",
        "quantidadeSolicitada": 12,
        "criterioValor": "E",
        "valorEstimado": 1003.5500,
        "valorEstimadoUnitario": 1003.5500,
        "valorEstimadoTotal": 12042.6000,
        "priorizarAbertura": false,
        "julgHabEncerrada": false
    },
    {
        "numero": 6,
        "tipo": "I",
        "disputaPorValorUnitario": true,
        "possuiOrcamentoSigiloso": false,
        "identificador": "6",
        "tipoItemCatalogo": "S",
        "descricao": "Manutenção / Higienização de Reservatório de Água Potável",
        "criterioJulgamento": "1",
        "homologado": false,
        "numeroSessaoJulgHab": 1,
        "tipoTratamentoDiferenciadoMeEpp": "1",
        "participacaoExclusivaMeEppOuEquiparadas": true,
        "utilizaMargemPreferencia": false,
        "situacao": "1",
        "fase": "JE",
        "quantidadeSolicitada": 2,
        "criterioValor": "E",
        "valorEstimado": 5000.0000,
        "valorEstimadoUnitario": 5000.0000,
        "valorEstimadoTotal": 10000.0000,
        "priorizarAbertura": false,
        "julgHabEncerrada": false
    }
]
```

## Fase 4 - Ao clicar no Item

#### Detalhamento

```json
{
    "numero": 1,
    "tipo": "I",
    "disputaPorValorUnitario": true,
    "possuiOrcamentoSigiloso": false,
    "identificador": "1",
    "tipoItemCatalogo": "S",
    "descricao": "Serviço Especializado de Limpeza",
    "criterioJulgamento": "1",
    "homologado": false,
    "numeroSessaoJulgHab": 1,
    "tipoTratamentoDiferenciadoMeEpp": "0",
    "participacaoExclusivaMeEppOuEquiparadas": false,
    "utilizaMargemPreferencia": false,
    "situacao": "1",
    "fase": "E",
    "descricaoDetalhada": "Serviços de limpeza e conservação de áreas prediais, internas e adjacentes, áreas externas e esquadrias externas (faces internas e externas, com e sem exposição ao risco) - por metragem\r\nOBS: Uma unidade equivale a um mês de prestação de serviços",
    "quantidadeSolicitada": 12,
    "unidadeFornecimento": "UNIDADE",
    "criterioValor": "E",
    "valorEstimado": 85169.3300,
    "valorEstimadoUnitario": 85169.3300,
    "valorEstimadoTotal": 1022031.9600,
    "tratamentoDiferenciadoMeEppDetalhado": "Não",
    "tipoVariacaoMinimaEntreLances": "P",
    "variacaoMinimaEntreLances": 0.5000
}
```