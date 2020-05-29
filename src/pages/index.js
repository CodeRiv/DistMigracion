import Head from 'next/head'
var escapeJSON = require('escape-json-node')

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>API Migración</title>
        <link rel="icon" href="/favicon.ico" />
        var text = {'\"success\":true,\"data\":[{\"_id\":\"5ec987a691cd6b256cd4374c\",\"DPI\":\"2993772020101\",\"primernombre\":\"Brian\",\"segundonombre\":\"Javier\",\"primerapellido\":\"Rivera\",\"segundoapellido\":\"Galdamez\",\"fechaprimertramite\":\"2020-12-12T06:00:00.000Z\",\"fechaexpiracion\":\"2021-12-12T06:00:00.000Z\",\"Nacionalidad\":\"Guatemalteco\",\"PaisActual\":\"Guatemala\",\"__v\":0}]'};

      </Head>

      <main>
        <h1 className="title">
          Bienvenido a la API de migración
        </h1>

        <p className="description">
          Consulta información sobre el estado actual de los pasaporte, estatus migratorio de un usuario y validez.
        </p>
        
        <p className="description">
          Parámetro requerido: El DPI del usuario
        </p>

        <p className="description">
          Usage: <code>https://distmigracion.cleverapps.io/api/people/(DPI)</code>
        </p>
        <p className="description">
          Usage: <code>https://distmigracion.cleverapps.io/api/valid/(DPI)</code>
        </p>


        <div className="grid">
          <a className="card">
            <h3>Ejemplo Información Pasaporte</h3>
            <p><code>https://distmigracion.cleverapps.io/api/people/2993772020101</code></p>
          </a>

          <a className="card">
            <h3>Ejemplo Información validez</h3>
            <p><code>https://distmigracion.cleverapps.io/api/valid/2993772020101</code></p>
          </a>
        </div>
      </main>

      <style jsx>{`
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

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
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

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
          text-align: medium;
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

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
