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
          A <strong>Lucerpy Digital</strong> valoriza a sua privacidade. Esta política descreve como tratamos informações pessoais coletadas através do nosso site oficial.
        </p>

        <h2>1. Coleta de Informações</h2>
        <p>
          Coletamos informações pessoais que você nos fornece voluntariamente ao entrar em contato através dos nossos formulários ou e-mail (como nome, endereço de e-mail e informações sobre seu projeto).
        </p>

        <h2>2. Uso dos Dados</h2>
        <p>
          As informações coletadas são utilizadas exclusivamente para:
        </p>
        <ul>
          <li>Responder a solicitações de orçamento e dúvidas sobre nossos serviços;</li>
          <li>Enviar propostas comerciais e atualizações sobre projetos em andamento;</li>
          <li>Melhorar a experiência de navegação e desempenho do nosso site.</li>
        </ul>

        <h2>3. Compartilhamento com Terceiros</h2>
        <p>
          Não vendemos nem alugamos seus dados pessoais. Para gerenciar contatos e o envio da nossa newsletter, utilizamos a HubSpot como plataforma de CRM: ao preencher os formulários deste site, suas informações são enviadas diretamente para essa plataforma, que atua como nossa processadora de dados. Adotamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Este site pode utilizar cookies essenciais ao seu funcionamento. Quando ferramentas de análise de audiência (como Google Analytics) estiverem ativas, cookies de mensuração também poderão ser utilizados — nesses casos, solicitamos seu consentimento através de um banner de cookies antes de qualquer coleta não essencial, e você pode ajustar suas preferências a qualquer momento.
        </p>

        <h2>5. Seus Direitos (LGPD)</h2>
        <p>
          Conforme a Lei Geral de Proteção de Dados (LGPD), você tem o direito de solicitar a confirmação, acesso, correção ou eliminação dos seus dados pessoais armazenados por nós.
        </p>

        <h2>6. Contato</h2>
        <p>
          Se tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados, entre em contato através do e-mail <strong>lucerpy@lucerpy.com.br</strong>.
        </p>
      </div>
    </main>
  );
}
