import Image from "next/image";
import styles from "./page.module.css";
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <main className={styles.main}>
        <h1 className="title">Teste do Lanza</h1>

        <p className="description">Seu parceiro confiável em soluções tecnológicas.</p>

        <div className="grid">
          <a href="#" className="card">
            <h3>Sobre Nós &rarr;</h3>
            <p>Conheça mais sobre a história e valores da Baguals Corporation.</p>
          </a>

          <a href="#" className="card">
            <h3>Nossos Serviços &rarr;</h3>
            <p>Descubra os serviços que oferecemos para nossos clientes.</p>
          </a>

          <a href="#" className="card">
            <h3>Entre em Contato &rarr;</h3>
            <p>Entre em contato conosco para mais informações.</p>
          </a>
        </div>
        <footer>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
          &copy; 2024 Baguals Corporation. Todos os direitos reservados.
          </a>
        </footer>
        <style>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>
      </main>
    </div>
   
  );
}
