import Button from '@/components/Button/Button';

export const metadata = {
  title: 'Página não encontrada',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="notFoundContainer">
      <div className="notFoundTagline">ERRO 404</div>
      <div className="notFoundCode">404</div>
      <h1 className="notFoundTitle">Essa página saiu do ar.</h1>
      <p className="notFoundDescription">
        O link pode estar errado ou a página pode ter sido movida. Vamos te levar de volta pro caminho certo.
      </p>
      <div className="notFoundActions">
        <Button href="/" variant="primary">Voltar para a home →</Button>
        <Button href="/contato" variant="secondary">Falar com a gente</Button>
      </div>
    </main>
  );
}
