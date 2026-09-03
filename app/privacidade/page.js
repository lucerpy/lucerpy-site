import path from 'path';
import styles from './page.module.css';
import PolicyContent from './PolicyContent';
import { getLastCommitDate } from '@/lib/lastModified';

const MONTHS = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
];

// Reads the date parts straight off the ISO string (which already carries
// the commit's own timezone offset) instead of routing through Date/UTC
// conversion, which could roll the calendar day over near midnight.
function formatLongDate(isoString) {
  const [year, month, day] = isoString.slice(0, 10).split('-').map(Number);
  return `${day} de ${MONTHS[month - 1]} de ${year}`;
}

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
  const lastModified = getLastCommitDate(path.join(process.cwd(), 'app/privacidade/PolicyContent.js'));

  return (
    <main className={styles.container}>
      <div className={styles.tagline}>LEGAL</div>
      <h1 className={styles.title}>Política de Privacidade</h1>
      <div className={styles.date}>
        Última atualização: {lastModified ? formatLongDate(lastModified) : '14 de agosto de 2026'}
      </div>

      <PolicyContent />
    </main>
  );
}
