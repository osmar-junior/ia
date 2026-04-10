// ferramentas-data.js
const ferramentasData = {
  atualizacao: "Abril/2026",
  nota: "Preços e planos sujeitos a alteração. Consulte o site oficial de cada ferramenta para confirmação.",
  ferramentas: [
    {
      id: "chatgpt",
      nome: "ChatGPT",
      empresa: "OpenAI",
      slogan: "Modelo de linguagem mais popular do mundo",
      badges: ["Popular"],
      tipo: "Gratuito / Pago",
      link: "#chatgpt",
      link_acesso: "https://chatgpt.com",
      caracteristicas: [
        "Interface intuitiva e amigável",
        "Conversas longas e contextuais",
        "Upload de documentos na versão paga",
        "Memória de conversas anteriores",
        "Integração com plugins e ferramentas externas"
      ],
      pontos_fortes: [
        "Maior ecossistema de integrações e plugins",
        "Excelente para tarefas gerais do dia a dia",
        "Interface mais madura e polida do mercado"
      ],
      limitacoes: [
        "Plano gratuito exibe anúncios desde fev/2026",
        "Versão Pro tem custo elevado (US$ 200/mês)"
      ],
      planos: [
        { nome: "Gratuita", preco: "US$ 0", destaques: "GPT-5 com limites diários e anúncios" },
        { nome: "Go", preco: "R$ 39,90/mês", destaques: "Mais mensagens e uploads — inclui anúncios" },
        { nome: "Plus", preco: "US$ 20/mês", destaques: "Acesso completo, sem anúncios, Deep Research" },
        { nome: "Pro", preco: "US$ 200/mês", destaques: "Uso ilimitado, modelos mais avançados, Sora" }
      ]
    },
    {
      id: "claude",
      nome: "Claude",
      empresa: "Anthropic",
      slogan: "Foco em segurança, ética e respostas mais confiáveis",
      badges: ["Recomendado"],
      tipo: "Gratuito / Pago",
      link: "#claude",
      link_acesso: "https://claude.ai",
      caracteristicas: [
        "Janela de contexto de até 1 milhão de tokens",
        "Excelente capacidade de análise e síntese",
        "Mais cuidadoso ao admitir limitações",
        "Interface limpa e funcional",
        "Melhor performance em tarefas analíticas complexas"
      ],
      pontos_fortes: [
        "Leitura de documentos muito longos de uma só vez",
        "Menor tendência a alucinações em textos factuais",
        "Excelente para redação, análise jurídica e código"
      ],
      limitacoes: [
        "Sem geração de imagens nativa",
        "Busca na web disponível apenas nos planos pagos"
      ],
      planos: [
        { nome: "Gratuita", preco: "US$ 0", destaques: "Claude Sonnet 4.6 com limites diários" },
        { nome: "Pro", preco: "US$ 20/mês", destaques: "5× mais uso, Opus 4.6, projetos" },
        { nome: "Max", preco: "US$ 100–200/mês", destaques: "Até 20× capacidade, acesso prioritário" },
        { nome: "Team", preco: "US$ 30/usuário/mês", destaques: "Colaboração entre equipes" }
      ]
    },
    {
      id: "gemini",
      nome: "Gemini",
      empresa: "Google",
      slogan: "Integração nativa com Google Workspace",
      badges: ["Google"],
      tipo: "Gratuito / Pago",
      link: "#gemini",
      link_acesso: "https://gemini.google.com",
      caracteristicas: [
        "Acesso direto à busca do Google",
        "Janela de contexto de até 2 milhões de tokens",
        "Integração com Gmail, Docs e Drive",
        "Capacidade multimodal (texto, imagem, vídeo)"
      ],
      pontos_fortes: [
        "Melhor opção para quem já usa o ecossistema Google",
        "Informações sempre atualizadas via busca nativa",
        "Plano pago inclui 2 TB de armazenamento no Drive"
      ],
      limitacoes: [
        "Integração com ferramentas fora do Google é limitada",
        "Plano AI Ultra é o mais caro desta lista"
      ],
      planos: [
        { nome: "Gratuita", preco: "US$ 0", destaques: "Gemini 2.5 Flash com limites diários" },
        { nome: "Advanced", preco: "R$ 96,99/mês", destaques: "Gemini 3.1 Pro, Deep Research, Veo 3, 2 TB" },
        { nome: "AI Ultra", preco: "US$ 249,99/mês", destaques: "Todos os modelos, 30 TB, agentes avançados" }
      ]
    },
    {
      id: "perplexity",
      nome: "Perplexity AI",
      empresa: "Perplexity AI",
      slogan: "Busca inteligente com citação de fontes",
      badges: ["Pesquisa"],
      tipo: "Gratuito / Pago",
      link: "#perplexity",
      link_acesso: "https://perplexity.ai",
      caracteristicas: [
        "Fornece fontes e citações para cada resposta",
        "Acesso a informações em tempo real",
        "Interface focada em pesquisa",
        "Modo Pro com busca acadêmica e análise de documentos"
      ],
      pontos_fortes: [
        "Ideal para pesquisa com rastreabilidade de fontes",
        "Acessa múltiplos modelos (GPT-5, Claude, Gemini) no Pro",
        "Respostas verificáveis — menos risco de alucinação"
      ],
      limitacoes: [
        "Menos adequado para tarefas criativas ou redação longa",
        "Interface menos polida que ChatGPT ou Claude"
      ],
      planos: [
        { nome: "Gratuita", preco: "US$ 0", destaques: "Buscas ilimitadas, busca Pro limitada a 5/dia" },
        { nome: "Pro", preco: "US$ 20/mês", destaques: "Buscas Pro ilimitadas, uploads, acesso a GPT-5 e Claude" },
        { nome: "Enterprise", preco: "Sob consulta", destaques: "SSO, privacidade, dados não usados para treino" }
      ]
    },
    {
      id: "notebooklm",
      nome: "NotebookLM",
      empresa: "Google",
      slogan: "Análise inteligente de múltiplos documentos",
      badges: ["Gratuito", "Google"],
      tipo: "Gratuito",
      link: "#notebooklm",
      link_acesso: "https://notebooklm.google.com",
      caracteristicas: [
        "Upload de até 50 documentos por caderno",
        "Análise profunda de PDFs, documentos e sites",
        "Geração de resumos, FAQs e guias de estudo",
        "Gera podcasts em áudio sobre seus documentos",
        "Totalmente gratuito na versão base"
      ],
      pontos_fortes: [
        "Único a gerar podcasts em áudio a partir dos seus documentos",
        "Todas as respostas são baseadas exclusivamente nos seus arquivos",
        "Gratuito e sem necessidade de assinatura para uso básico"
      ],
      limitacoes: [
        "Funciona apenas com os documentos que você carrega",
        "Não acessa a internet nem responde perguntas gerais"
      ],
      planos: [
        { nome: "Gratuita", preco: "US$ 0", destaques: "50 fontes por caderno, podcasts, resumos e FAQs" },
        { nome: "Plus", preco: "Incluso no Google One AI (R$ 96,99/mês)", destaques: "5× mais cadernos e fontes, personalização do áudio" }
      ]
    },
    {
      id: "copilot",
      nome: "Copilot",
      empresa: "Microsoft",
      slogan: "IA integrada ao ecossistema Office 365",
      badges: ["Microsoft"],
      tipo: "Gratuito / Pago",
      link: "#copilot",
      link_acesso: "https://copilot.microsoft.com",
      caracteristicas: [
        "Integração nativa com Word, Excel, PowerPoint, Outlook e Teams",
        "Acesso à busca do Bing para informações atualizadas",
        "Geração de conteúdo diretamente nos aplicativos Office",
        "Interface conversacional familiar"
      ],
      pontos_fortes: [
        "Melhor opção para quem já usa o Microsoft 365",
        "Funciona dentro dos documentos, não em janela separada",
        "Ideal para redigir e-mails, resumir reuniões e analisar planilhas"
      ],
      limitacoes: [
        "Pouco útil fora do ecossistema Microsoft",
        "Versão M365 Copilot tem custo por usuário elevado para equipes"
      ],
      planos: [
        { nome: "Gratuita", preco: "US$ 0", destaques: "Chat em copilot.microsoft.com com limites de uso" },
        { nome: "Pro", preco: "US$ 20/usuário/mês", destaques: "Integração dentro do Word, Excel, PowerPoint e Outlook" },
        { nome: "M365 Copilot", preco: "US$ 30/usuário/mês", destaques: "Copilot completo em todo o ecossistema M365 e Teams" }
      ]
    },
    {
      id: "deepseek",
      nome: "DeepSeek",
      empresa: "DeepSeek AI (China)",
      slogan: "Modelo open-source de alta performance",
      badges: ["Atenção", "Gratuito"],
      tipo: "Gratuito",
      link: "#deepseek",
      link_acesso: "https://chat.deepseek.com",
      aviso: "O DeepSeek é desenvolvido por uma empresa chinesa. De acordo com sua política de privacidade, dados de usuários podem ser armazenados em servidores na China e estar sujeitos às leis locais de acesso governamental. Recomendamos não inserir informações sigilosas, dados pessoais de terceiros ou conteúdo de processos e documentos institucionais.",
      caracteristicas: [
        "Totalmente gratuito, sem plano pago",
        "Código aberto (transparência técnica)",
        "Performance surpreendente para um modelo gratuito",
        "Forte em raciocínio matemático e lógico"
      ],
      pontos_fortes: [
        "Melhor custo-benefício disponível — gratuito e capaz",
        "Modo de raciocínio (Thinking) sem custo adicional",
        "Código aberto permite auditoria técnica independente"
      ],
      limitacoes: [
        "Dados podem ser acessados por autoridades chinesas",
        "Não recomendado para informações sigilosas ou institucionais",
        "Sem suporte a voz ou GPTs personalizados"
      ],
      planos: [
        { nome: "Gratuita", preco: "US$ 0", destaques: "DeepSeek V4 com modo de raciocínio (Thinking) sem custo" },
        { nome: "API", preco: "Por token", destaques: "Custo-benefício extremo frente a concorrentes" }
      ]
    }
  ]
};
