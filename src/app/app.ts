import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {

  // Lista dos serviços (ícone e título)
  servicos = [
    { icone: 'fa-solid fa-file-invoice-dollar', titulo: 'IRPF <br>Imposto de Renda<br>Pessoa Física',
      resumo: 'Preparamos e entregamos a sua declaração de Imposto de Renda, com conferência de rendimentos, deduções e bens. Também cuidamos de retificações e de pendências na malha fina.' },
    { icone: 'fa-solid fa-city', titulo: 'Abertura, alteração, <br>transformação e <br>encerramento de empresas',
      resumo: 'Abrimos a sua empresa ou MEI do início ao fim: CNPJ, inscrições e licenças. Também fazemos alterações contratuais, mudança de enquadramento e o encerramento correto, sem deixar pendências.' },
    { icone: 'fa-regular fa-circle-check', titulo: 'Regularizações <br>e pendências',
      resumo: 'Levantamos débitos, declarações em atraso e pendências com Receita Federal, estado e prefeitura. Depois organizamos o caminho para regularizar o seu CNPJ ou CPF, com parcelamentos quando possível.' },
    { icone: 'fa-solid fa-id-card-clip', titulo: 'Certificado <br>digital',
      resumo: 'Emitimos e renovamos o certificado digital e-CPF e e-CNPJ, com orientação para instalar e usar nos sistemas do governo, na emissão de notas fiscais e no internet banking.' },
    { icone: 'fa-regular fa-lightbulb', titulo: 'Marcas e <br>patentes',
      resumo: 'Orientamos o registro da sua marca no INPI, da pesquisa de disponibilidade ao acompanhamento do processo, e o depósito de patentes, para proteger o nome e as ideias do seu negócio.' },
    { icone: 'fa-solid fa-gavel', titulo: 'Perícia e <br>assistência técnica',
      resumo: 'Elaboramos laudos e pareceres contábeis e atuamos como assistente técnico em processos judiciais e extrajudiciais, com fundamentação técnica e linguagem clara.' },
    { icone: 'fa-solid fa-piggy-bank', titulo: 'Apoio administrativo <br>e financeiro',
      resumo: 'Ajudamos a organizar contas a pagar e a receber, fluxo de caixa, emissão de notas e rotinas do dia a dia, para você ter mais tempo para cuidar do seu negócio.' },
    { icone: 'fa-solid fa-users', titulo: 'Assessoria contábil,<br>fiscal e trabalhista',
      resumo: 'Cuidamos da escrituração contábil, da apuração de impostos, da folha de pagamento e das obrigações acessórias, mantendo a sua empresa em dia com o Fisco.' },
    { icone: 'fa-solid fa-chart-line', titulo: 'Consultoria contábil, <br>fiscal e tributária',
      resumo: 'Analisamos o seu negócio para indicar o regime tributário mais vantajoso, reduzir a carga de impostos dentro da lei e planejar o crescimento com segurança.' }
  ];

  // Passos da seção "Como funciona"
  passos = [
    {
      icone: 'fa-brands fa-whatsapp',
      titulo: 'Fale conosco',
      descricao: 'Você chama pelo WhatsApp e conta o que precisa. O primeiro atendimento é sem compromisso.'
    },
    {
      icone: 'fa-solid fa-magnifying-glass-chart',
      titulo: 'Analisamos o seu caso',
      descricao: 'Entendemos o seu negócio ou a sua situação e indicamos a melhor solução e o regime mais vantajoso.'
    },
    {
      icone: 'fa-solid fa-file-signature',
      titulo: 'Proposta e documentos',
      descricao: 'Você recebe uma proposta com honorários fixos e envia os documentos de forma simples e segura.'
    },
    {
      icone: 'fa-solid fa-circle-check',
      titulo: 'Cuidamos de tudo',
      descricao: 'Assumimos a rotina e você acompanha cada etapa, com prazos cumpridos e suporte sempre que precisar.'
    }
  ];

  // Serviço selecionado (começa com o primeiro aberto)
  servicoAtivo = signal(0);

  selecionarServico(indice: number): void {
    this.servicoAtivo.set(indice);
  }

  // Lista dos diferenciais (título, ícone e resumo exibido ao clicar)
  diferenciais = [
    {
      icone: 'fa-solid fa-user-tie',
      titulo: 'Atendimento<br>personalizado<br>e próximo',
      resumo: 'Cada cliente tem um contador de referência que conhece o seu negócio. Você fala direto com quem cuida da sua contabilidade, por WhatsApp, telefone ou reunião, sem robôs e sem filas de atendimento.'
    },
    {
      icone: 'fa-solid fa-hand-holding-dollar',
      titulo: 'Honorários fixos,<br>sem surpresas.',
      resumo: 'Nossos pacotes incluem os serviços contábeis básicos, sem cobranças adicionais por cada guia emitida, recálculo ou declaração prevista no plano.'
    },
    {
      icone: 'fa-regular fa-calendar-check',
      titulo: 'Compromisso<br>com prazos<br>e resultados',
      resumo: 'Acompanhamos o calendário fiscal da sua empresa e entregamos guias, obrigações e declarações com antecedência. Assim você evita multas, juros e preocupações com vencimentos.'
    },
    {
      icone: 'fa-solid fa-arrow-trend-up',
      titulo: 'Experiência e<br>atualização constante',
      resumo: 'Nossa equipe se atualiza continuamente sobre mudanças na legislação tributária e trabalhista, para indicar o enquadramento mais vantajoso e manter sua empresa sempre em conformidade.'
    },
    {
      icone: 'fa-regular fa-handshake',
      titulo: 'Transparência<br>em todas as etapas',
      resumo: 'Você acompanha tudo o que é feito: valores apurados, impostos pagos e situação da empresa. Explicamos os números de forma simples, para que você decida com segurança.'
    }
  ];

  // Índice do diferencial selecionado (começa com o primeiro aberto)
  diferencialAtivo = signal(0);

  selecionarDiferencial(indice: number): void {
    this.diferencialAtivo.set(indice);
  }
  
  // Logo: se public/images/logo.png não existir, mostra a logo em texto
  logoOk = signal(true);

  anoAtual = new Date().getFullYear();

  // Dados de contato (FICTÍCIOS - troque pelos reais quando tiver)
  contato = {
    whatsapp: '5516994250396',
    telefone: '(16) 99425-0396',
    email: 'davanzzocontabilidade@outlook.com',
    endereco: 'R. Angelo Drudi Neto, 54 - Jardim Leone',
    horario: 'Seg a Sex, das 8h às 18h',
    instagram: 'davanzzo.contabilidade',
    razaoSocial: 'Davanzzo Contabilidade e Regularizações Ltda',
    cnpj: '00.000.000/0001-00',
    crc: 'CRC-SP 000000/O'
  };

  // Controle do menu mobile
  menuAberto = signal(false);

  alternarMenu(): void {
    this.menuAberto.update(aberto => !aberto);
  }

  // Fecha o menu ao aumentar a tela ou apertar Esc
  @HostListener('document:keydown.escape')
  fecharMenu(): void {
    this.menuAberto.set(false);
  }

  @HostListener('window:resize')
  aoRedimensionar(): void {
    // 768px = breakpoint "md" do Tailwind (onde o menu desktop aparece)
    if (window.innerWidth >= 768) {
      this.menuAberto.set(false);
    }
  }

  // Função de rolagem suave
  scrollTo(sectionId: string): void {
    this.menuAberto.set(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 96; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
  }

  // NOVA FUNÇÃO: Abrir WhatsApp
  abrirWhatsapp(): void {
    // Coloque o DDD e o número (somente números). Ex: 55 = Brasil, 11 = DDD, 999999999 = Número
    const numero = this.contato.whatsapp; 
    
    // Escreva a mensagem padrão que o cliente já vai enviar
    const mensagem = 'Olá! Acessei o site e gostaria de saber mais sobre os serviços de contabilidade.';
    
    // Monta a URL oficial da API do WhatsApp
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    
    // Abre em uma nova aba
    window.open(url, '_blank');
  }
}