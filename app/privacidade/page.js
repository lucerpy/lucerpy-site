import styles from './page.module.css';

export const metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade e proteção de dados da Lucerpy Digital. Entenda como coletamos, usamos e protegemos suas informações.',
  alternates: {
    canonical: 'https://lucerpy.com.br/privacidade',
  },
  openGraph: {
    title: 'Política de Privacidade | Lucerpy',
    description: 'Política de privacidade e proteção de dados da Lucerpy Digital.',
    url: 'https://lucerpy.com.br/privacidade',
  },
};

export default function Privacidade() {
  return (
    <main className={styles.container}>
      <div className={styles.tagline}>LEGAL</div>
      <h1 className={styles.title}>Política de Privacidade</h1>
      <div className={styles.date}>Última atualização: 14 de Agosto de 2026</div>

      <div className={styles.content}>
        <p>
          A <strong>Lucerpy Digital</strong> valoriza a sua privacidade. Esta política descreve como coletamos, usamos, armazenamos e protegemos as informações pessoais tratadas através do nosso site oficial, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
        </p>

        <h2>1. Controlador dos Dados</h2>
        <p>
          A controladora dos dados pessoais tratados neste site é a <strong>Lucerpy Digital</strong>, responsável pelas decisões referentes ao tratamento de dados pessoais aqui descrito. Dúvidas ou solicitações relacionadas aos seus dados podem ser enviadas para <strong>lucerpy@lucerpy.com.br</strong>.
        </p>

        <h2>2. Quais Dados Coletamos</h2>
        <p>
          Coletamos informações pessoais que você nos fornece voluntariamente ao interagir com o site, como:
        </p>
        <ul>
          <li>Nome, e-mail e mensagem, ao preencher o formulário de contato;</li>
          <li>E-mail, ao se inscrever na nossa newsletter;</li>
          <li>Dados de navegação (páginas visitadas, tempo de permanência, origem do acesso), apenas quando você consente com cookies de análise;</li>
          <li>Informações trocadas diretamente por e-mail ou WhatsApp, quando você opta por esse canal de contato.</li>
        </ul>

        <h2>3. Base Legal e Finalidade do Tratamento</h2>
        <p>
          Tratamos os seus dados pessoais com base no seu <strong>consentimento</strong> (ao preencher formulários ou aceitar cookies não essenciais) e no nosso <strong>legítimo interesse</strong> em responder solicitações comerciais, para as seguintes finalidades:
        </p>
        <ul>
          <li>Responder a solicitações de orçamento e dúvidas sobre nossos serviços;</li>
          <li>Enviar propostas comerciais e atualizações sobre projetos em andamento;</li>
          <li>Enviar conteúdo da newsletter, quando você se inscreve voluntariamente;</li>
          <li>Medir audiência e melhorar a experiência de navegação e desempenho do site, quando há consentimento para cookies de análise.</li>
        </ul>

        <h2>4. Compartilhamento com Terceiros</h2>
        <p>
          Não vendemos nem alugamos seus dados pessoais a terceiros. Para operar o site, utilizamos os seguintes processadores de dados:
        </p>
        <ul>
          <li><strong>HubSpot</strong> — plataforma de CRM que recebe os dados enviados pelos formulários de contato e newsletter, usada para gerenciar nosso relacionamento comercial com você;</li>
          <li><strong>Google Tag Manager e Google Analytics</strong> — usados para medir audiência e tráfego do site, ativados apenas mediante o seu consentimento à categoria "Análise" ou "Marketing" no banner de cookies;</li>
          <li><strong>Silktide</strong> — gerenciador de consentimento de cookies, responsável por registrar e lembrar as suas preferências de privacidade.</li>
        </ul>
        <p>
          Esses fornecedores podem processar dados em servidores localizados fora do Brasil. Nesses casos, exigimos que adotem padrões de proteção de dados compatíveis com a LGPD.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Ao acessar o site pela primeira vez, você é convidado a definir suas preferências de cookies em três categorias:
        </p>
        <ul>
          <li><strong>Essenciais</strong> — necessários para o funcionamento do site (ex: lembrar sua preferência de cookies). Não podem ser desativados;</li>
          <li><strong>Análise</strong> — nos ajudam a entender quais páginas são mais populares e como os visitantes navegam pelo site;</li>
          <li><strong>Marketing</strong> — usados por nós e por parceiros de publicidade para mostrar anúncios relevantes e medir o desempenho de campanhas.</li>
        </ul>
        <p>
          Você pode alterar suas preferências a qualquer momento pelo ícone de cookies no canto da tela, ou limpando os cookies do seu navegador.
        </p>

        <h2>6. Retenção dos Dados</h2>
        <p>
          Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, ou pelo período exigido por obrigação legal. Dados de contatos comerciais são mantidos enquanto durar o relacionamento com a Lucerpy ou até que você solicite a exclusão.
        </p>

        <h2>7. Seus Direitos (LGPD)</h2>
        <p>
          Conforme os artigos 17 e 18 da LGPD, você tem o direito de solicitar, a qualquer momento:
        </p>
        <ul>
          <li>Confirmação da existência de tratamento dos seus dados;</li>
          <li>Acesso aos dados pessoais que temos sobre você;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei;</li>
          <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
          <li>Eliminação dos dados tratados com base no seu consentimento;</li>
          <li>Revogação do consentimento a qualquer momento;</li>
          <li>Informação sobre com quem compartilhamos seus dados.</li>
        </ul>
        <p>
          Caso não fique satisfeito com a nossa resposta, você também pode registrar uma reclamação junto à Autoridade Nacional de Proteção de Dados (ANPD).
        </p>

        <h2>8. Segurança dos Dados</h2>
        <p>
          Adotamos medidas de segurança técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, perda, alteração ou divulgação indevida, incluindo conexão criptografada (HTTPS) em todo o site.
        </p>

        <h2>9. Alterações a Esta Política</h2>
        <p>
          Podemos atualizar esta política periodicamente para refletir mudanças nas nossas práticas ou por exigência legal. A data da última atualização está sempre indicada no topo desta página.
        </p>

        <h2>10. Contato</h2>
        <p>
          Se tiver dúvidas sobre esta Política de Privacidade ou quiser exercer algum dos seus direitos, entre em contato através do e-mail <strong>lucerpy@lucerpy.com.br</strong>.
        </p>
      </div>
    </main>
  );
}
